const projects = {
  site1: {
    title: "Jacek Jeznach",
    category: "Portfolio creatif",
    description: "Une reference visuelle forte pour un portfolio anime et expressif.",
    url: "https://jacekjeznach.com/"
  },
  site2: {
    title: "Aremac's",
    category: "Site vitrine",
    description: "Une interface de presentation claire pour valoriser une activite en ligne.",
    url: "https://aremacs.netlify.app"
  },
  site3: {
    title: "Dice Roll",
    category: "Jeu web",
    description: "Un projet interactif centre sur la logique JavaScript et le feedback utilisateur.",
    url: "https://dice-roller0-game.netlify.app"
  },
  site4: {
    title: "Patiss'Orane",
    category: "Patisserie",
    description: "Un univers gourmand avec une structure simple pour presenter produits et ambiance.",
    url: "https://orane-patisserie.netlify.app"
  },
  site5: {
    title: "Mon Marche",
    category: "Commerce local",
    description: "Une approche utile et directe pour mettre en avant des produits de marche.",
    url: "https://monmarche.netlify.app"
  }
};

function displayProject(projectId) {
  const project = projects[projectId];
  const canvas = document.getElementById("project-canvas");
  const canvasTitle = document.getElementById("project-canvas-title");
  const category = document.getElementById("project-category");
  const description = document.getElementById("project-description");
  const title = document.getElementById("project-title");
  const link = document.getElementById("project-link");

  if (!project || !canvas || !canvasTitle || !category || !description || !title || !link) {
    return;
  }

  canvas.className = "project-canvas theme-" + projectId;
  canvas.setAttribute("aria-label", "Apercu stylise du projet " + project.title);
  canvasTitle.textContent = project.title;
  category.textContent = project.category;
  description.textContent = project.description;
  title.textContent = project.title;
  link.href = project.url;

  document.querySelectorAll(".project-tab").forEach(function (button) {
    const isSelected = button.id === "btn" + projectId.replace("site", "");
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-selected", String(isSelected));
  });
}
