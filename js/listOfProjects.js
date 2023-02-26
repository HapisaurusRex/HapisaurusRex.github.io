import { projects } from "../data.js";

const projectGrid = document.querySelector(".project-grid");

const saveProjectData = (data) => {
  localStorage.setItem("project-data", JSON.stringify(data));
};


  const populateProjects = (projects) => {

    projects.forEach((project, i) =>{
      const projectCard =   `<div class='project'  data-index=${i}>
                                <h3> ${project.name} </h3>
                                <figure>
                                        <img class="icon" src=${project.photo} alt="${project.name}">
                                </figure>
                                <a class="link-button" href='./project-page.html' > Learn More </a>
                            </div>`
            const div = document.createElement('div');
            div.innerHTML = projectCard
            div.addEventListener('click', () => saveProjectData(project))
            projectGrid.append(div)
    })

  }

  populateProjects(projects)