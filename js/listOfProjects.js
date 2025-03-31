import { projects } from "../data.js";
const projectGrid = document.querySelector("#project-gallery");
const saveProjectData = (data) => {
  localStorage.setItem("project-data", JSON.stringify(data));
};

// Create Project Card
const createProjectCard = (project, index) => {
  // Card Container
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.setAttribute("data-index", index);

  // Project Title
  const title = document.createElement("div");
  title.classList.add("project-text");
  title.textContent = project.name;
  card.appendChild(title);

  // Project Icon
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.classList.add("img-fluid", "icon");
  image.src = project.photo;
  image.alt = project.name;
  figure.appendChild(image);
  card.appendChild(figure);

  // Product Link
  const link = document.createElement("a");
  link.classList.add("nav-button");
  link.href = "./project-page.html";
  link.textContent = "Learn More";
  card.appendChild(link);

  card.addEventListener("click", () => saveProjectData(project));

  return card;
};

// Main function to render all project cards into the grid
const populateProjects = (projects) => {
  projects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    projectGrid.appendChild(card);
  });
};

populateProjects(projects);
