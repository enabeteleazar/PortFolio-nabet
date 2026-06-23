export const config = { runtime: 'edge' };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Méthode non autorisée' }, { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? 'contact@portfolio.fr.nf';
  if (!apiKey) return Response.json({ error: 'Service de contact non configuré' }, { status: 503 });

  const body = (await request.json()) as { name?: string; email?: string; message?: string; company?: string };
  if (body.company) return Response.json({ ok: true });
  if (!body.name?.trim() || !body.email || !emailPattern.test(body.email) || !body.message?.trim()) {
    return Response.json({ error: 'Données du formulaire invalides' }, { status: 400 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Portfolio <onboarding@resend.dev>',
      to: [contactEmail],
      reply_to: body.email,
      subject: `Portfolio — message de ${body.name}`,
      text: body.message,
    }),
  });

  return response.ok
    ? Response.json({ ok: true })
    : Response.json({ error: 'Envoi temporairement indisponible' }, { status: 502 });
}
