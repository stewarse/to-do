import './style.css'
import { compareAsc, format } from 'date-fns'
import { Project, getData } from './projects/project.js'
import { DOMStuff } from './DOMStuff.js'
import { ToDo } from './to-do/to-do.js'

let projectID = 0
let toDoID = 0

// window.addEventListener('load', (e) => {
//     if(!getData().project0) getData().project0 = Project('Welcome', 'Travel', projectID++)

//     //DOMStuff().renderCurrentProject(e)
// })




console.log(getData())

getData().project0 = Project('Welcome', 'default', projectID++)

getData().project1 = Project('Trip to Mexico', 'travel', projectID++ );

getData().project1.setProject('Trip to Europe')

getData().project2 = Project('Find a Job', 'work', projectID++ )

console.log(getData().project1.getProjectID())
console.log(getData().project2.getProjectID())


//data.project1.createToDo()

DOMStuff().renderProjectList();


//console.log(Object.keys(data).length)

// console.log(getData().project1.getProjectID(), getData())//.project2.getProjectID())

getData().project2.addToDo('A To-Do 0', '10-2-22', 'low')
getData().project2.addToDo('A To-Do 1', '7-2-22', 'medium')
getData().project1.addToDo('You\'re Mom goes to College', '8-2-22', 'medium')
getData().project2.addToDo('A To-Do 2', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 3', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 4', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 5', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 6', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 7', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 8', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 9', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 10', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 11', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 12', '7-2-22', 'medium')
getData().project2.addToDo('A To-Do 13', '7-2-22', 'medium')


console.log(getData().project1.getToDoData())
console.log(getData().project2.getToDoData())


// DOMStuff().renderToDoList();


// console.log(getData().project1.getToDoData().toDo0.getTitle())
console.log(getData().project1)
console.log(getData().project2.getProjectName())


const projects = document.querySelectorAll('.project')
projects.forEach((proj) => {
    proj.addEventListener('click', DOMStuff().renderCurrentProject)
})

// getData().project1.getToDoData()
// getData().project2.getToDoData()