import { DOMStuff } from '../DOMStuff.js';
import { ToDo } from '../to-do/to-do.js'

const data = {
    // project0: {name: 'Welcome', projectToDoData: { 
    //     todo1: {title: 'Get to know the system', dueDate: '3-10-2022'}, 
    //     todo2: {title: 'Add a new Project', dueDate: '3-15-2022'}
    //     }, category: 'default'
    // }
}

const Project = ( name, category, id ) => {
    const toDoData = {};

    const getProjectName = () => name;
    
    const getCategory = () => category;

    const setProject = ( newName ) => { 
        name = newName
    };

    const setCategory = ( newCategory ) => {
        category = newCategory
    };

    const getProjectID = () => id;

    //on form submission
    // const createToDo = ( title, dueDate, priority ) => {
    //     const newToDo = ToDo(title, dueDate, priority)
    //     const id = getProjectID()

    // };

    // const renderProject = () => {
        
    //     DOMStuff().main.appendChild(DOMStuff()._createDOMEl('h3', this.title,))
    // }

    const addToDo = (title, dueDate, priority) => {
        id = Object.keys(toDoData).length
        toDoData[id] = ToDo(title, dueDate, priority, id)
    }

    const getToDoData = () => toDoData;

    return { getProjectName, getCategory, setProject, setCategory, getProjectID, addToDo, getData, getToDoData, toDoData /* ,renderProject */  };
};

const getData = () => data



export { Project, getData }