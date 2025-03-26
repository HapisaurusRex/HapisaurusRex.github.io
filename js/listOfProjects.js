import { projects } from "../data.js";

const projectGrid = document.querySelector("#project-gallery");

const saveProjectData = (data) => {
  localStorage.setItem("project-data", JSON.stringify(data));
};


  const populateProjects = (projects) => {

    projects.forEach((project, i) =>{
      const projectCard =   `<h3> ${project.name} </h3>
                                <figure>
                                        <img class="icon" src=${project.photo} alt="${project.name}">
                                </figure>
                                <a class="nav-button" href='./project-page.html' > Learn More </a>`
            const div = document.createElement('div');
            div.classList.add('col-md-4')
            div.setAttribute('data-index', i)
            div.innerHTML = projectCard
            div.addEventListener('click', () => saveProjectData(project))
            projectGrid.append(div)
    })

  }

  populateProjects(projects)

