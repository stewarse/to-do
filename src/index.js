import './style.css'
import { compareAsc, format } from 'date-fns'
import { Project, data } from './projects/project.js'
import { DOMStuff } from './DOMStuff.js'
import { ToDo } from './to-do/to-do.js'

let projectID = 0
let toDoID = 0

console.log(data)

data.project1 = Project('Trip to Mexico', 'Travel', projectID++ );

data.project1.setProject('Trip to Europe')

data.project2 = Project('Find a Job', 'work', projectID++ )

data.project1.createToDo()

DOMStuff().renderProject()

console.log(data.project1.getProjectID(), data.project2.getProjectID())
