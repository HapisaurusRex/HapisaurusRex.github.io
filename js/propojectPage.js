// ========== Utility Functions ==========

// Helper to safely set text content
function setText(selector, text) {
    const el = document.querySelector(selector)
    if (el) el.textContent = text
}

// Helper to generate HTML for an array of items (e.g., paragraphs or list items)
function renderListHTML(array, tag = 'p') {
    return array.map(item => `<${tag}>${item}</${tag}>`).join('')
}

// Helper to set innerHTML from an array of items
function renderList(selector, array, tag = 'p') {
    const el = document.querySelector(selector)
    if (el) el.innerHTML = renderListHTML(array, tag)
}

// ========== Main Population Function ==========

function populateProjectPage(project) {
    // Set heading (project title)
    setText('.headliner-heading', project.name)

    // Render description paragraphs
    renderList('.subtitle', project.description, 'p')

    // Set cover image source and alt
    const cover = document.querySelector('.cover')
    if (cover) {
        cover.src = project.icon === '' ? project.photo : project.icon
        cover.alt = project.name
    }

    // Set figure caption
    setText('figcaption', project.figCaption)

    // Set general objectives and list of specific objectives
    setText('.objectives-general', project.objectivesGeneral)
    renderList('.objectives-list', project.objectives, 'li')

    // Set general challenges and list of specific challenges
    setText('.challenges-general', project.challengesGeneral)
    renderList('.challenges-list', project.challenges, 'li')

    // Set general results and list of specific results
    renderList('.results-general', project.resultsGeneral, 'p')
    renderList('.results-list', project.results, 'li')

    // Configure link button if both text and link are available
    const link = document.querySelector('.link-button')
    if (link) {
        if (project.linkText && project.documentLink) {
            link.textContent = project.linkText
            link.href = project.documentLink
        } else {
            link.style.display = 'none'
        }
    }

    // Configure embedded video frame if a video link is provided
    const videoFrame = document.querySelector('iframe')
    if (videoFrame) {
        if (project.videoLink) {
            videoFrame.src = project.videoLink
        } else {
            videoFrame.style.display = 'none'
        }
    }
}

// ========== Entry Point ==========

// Fetch project data from localStorage and initialize page
const project = JSON.parse(localStorage.getItem('project-data'))
if (project) {
    populateProjectPage(project)
}
