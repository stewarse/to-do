import './style.css'
import { compareAsc, format } from 'date-fns'
import { Project } from './projects/project.js'


const project1 = Project('Trip to Europe', 'Travel');

console.log(project1.getProject());

project1.setProject('My Balls')

console.log(project1.getProject());
