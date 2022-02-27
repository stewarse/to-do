import './style.css'
import { compareAsc, format } from 'date-fns'
import { Project } from './projects/project.js'
import { DOMStuff } from './DOMStuff.js'
import { ToDo } from './to-do/to-do.js'


const project1 = Project('Trip to Europe', 'Travel');

console.log("Project:", project1.getProject());

project1.setProject('Trip to Asia')

console.log("Updated Project:", project1.getProject());

const toDo1 = ToDo('Pet a Dog', '10-17-1985', 'high')

toDo1.toggleCompletedStatus()
console.log("To Do:", toDo1.getTitle(), toDo1.getCompletedStatus());