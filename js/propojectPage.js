const project = JSON.parse(localStorage.getItem('project-data'))


const summaryGrid = document.querySelector('.summary-grid')

const heading = document.querySelector('.headliner-heading')
heading.textContent = project.name

const description = document.querySelector('.subtitle')
description.innerHTML = project.description.map(description => {
    return `<p>${description}</p>`
}).join('')

const cover = document.querySelector('.cover')
if(project.icon === ''){
    cover.src = project.photo
}else{
    cover.src = project.icon
}
cover.alt = project.name

const figCaption = document.querySelector('figcaption')
figCaption.textContent = project.figCaption

const objectivesGeneral = document.querySelector('.objectives-general')
objectivesGeneral.textContent = project.objectivesGeneral

const objectivesList = document.querySelector('.objectives-list')
objectivesList.innerHTML = project.objectives.map(objective => {
    return `<li>${objective}</li>`
}).join('')

const challengesGeneral = document.querySelector('.challenges-general')
challengesGeneral.textContent = project.challengesGeneral

const challengesList = document.querySelector('.challenges-list')
challengesList.innerHTML = project.challenges.map(challenge => {
    return `<li>${challenge}</li>`
}).join('')

const resultsGeneral = document.querySelector('.results-general')
resultsGeneral.innerHTML = project.resultsGeneral.map(result => {
    return `<p>${result}</p>`
}).join('')

const resultsList = document.querySelector('.results-list')

resultsList.innerHTML = project.results.map(result => {
    return `<li>${result}</li>`
}).join('')

const link = document.querySelector('.link-button')

if(project.linkText && project.documentLink ){
    link.textContent = project.linkText
    link.href = project.documentLink
}else{
    link.style.display = 'none'

}

const videoFrame = document.querySelector('iframe')

if(project.videoLink){
    videoFrame.src = project.videoLink
}else{
   videoFrame.style.display = 'none'
}

