import { DOMStuff } from '../DOMStuff.js';
import { ToDo } from '../to-do/to-do.js'

const data = {}

const Project = ( name, category, id ) => {
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
    const createToDo = ( title, dueDate, priority ) => {
        const newToDo = ToDo(title, dueDate, priority)
        const id = getProjectID()

        // data.

        //let x = DOMStuff().displayToDoForm()
        //console.log(x)
        // newTodo = ToDo( title.value, date.value, priority.value )
    };

    const renderProject = () => {
        
        DOMStuff().main.appendChild(DOMStuff()._createDOMEl('h3', this.title,))
    }

    // const addToDo = () => {
    //     ToDo().displayToDoForm(id)
    // }

    // const uniqueID = () => {
    //     if ( typeof this.__uniqueId == 'undefined') {
    //         this.__uniqueid = ++ id
    //     }
    //     return this.__uniqueid
    // }


    return { getProjectName, getCategory, setProject, setCategory, createToDo, getProjectID, renderProject };
};



export { Project, data }