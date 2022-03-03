import './style.css'
import { compareAsc, format } from 'date-fns'
import { Project, getData } from './projects/project.js'
import { DOMStuff } from './DOMStuff.js'
import { ToDo } from './to-do/to-do.js'

let projectID = 0
let toDoID = 0

//window.onload = DOMStuff().renderProjectList()

console.log(getData())



getData().project0 = Project('Trip to Mexico', 'Travel', projectID++ );

getData().project0.setProject('Trip to Europe')

getData().project1 = Project('Find a Job', 'work', projectID++ )

console.log(getData().project0.getProjectID())
console.log(getData().project1.getProjectID())


//data.project1.createToDo()

DOMStuff().renderProjectList();


//console.log(Object.keys(data).length)

// console.log(getData().project1.getProjectID(), getData())//.project2.getProjectID())

getData().project1.addToDo('Testing To-Do\'s', '10-2-22', 'low')
getData().project1.addToDo('Another To-Do', '7-2-22', 'medium')
getData().project0.addToDo('You\'re Mom goes to College', '8-2-22', 'medium')


DOMStuff().renderToDoList();


// console.log(getData().project1.getToDoData().toDo0.getTitle())
// console.log(getData().project1)
// console.log(getData().project2.getProjectName())

//getData().project1.getToDoData()
//getData().project2.getToDoData()