import { Project } from "./projects/project"

let currentProject 

export const DOMStuff = () => {

    const DOMData = Project().getData()

    const main = document.getElementById('main-wrapper');
    const projectWrapper = document.getElementById('project-list-wrapper')


    const _createDOMEl = (el, text, id, className, name) => {
        const newEl = document.createElement(el)

        if(el === 'label') {
            newEl.setAttribute('for', name)
        } else if (el === 'input') {
            newEl.setAttribute('name', name)
        } else if (el === 'select') {
            newEl.setAttribute('name', name)

            const options = ['High', 'Medium', 'Low']
            
            options.forEach((el) => {
                const setOption = document.createElement('option')
                setOption.setAttribute('value', el.toLowerCase())
                newEl.appendChild(setOption).text = el
            })
        }

        if (id) newEl.id = id
        if (className) newEl.classList.add(className)
        if (text) newEl.textContent = text

        return newEl
    }

    /* const displayToDoForm = () => {
         _createDOMEl = (el, text, id, className, name) 
        const toDoForm = _createDOMEl('form', '', 'to-do-form')

        const titleInput = _createDOMEl('input', '', 'title-input', 'to-do-form-input', 'to-do-title')
        const titleLabel = _createDOMEl('label', 'Title', 'title-label', 'to-do-form-label', 'to-do-title')

        const dueDateInput = _createDOMEl('input','', 'due-date-input', 'test')
        const dueDateLabel = _createDOMEl('label', 'Due Date', 'due-date-input', 'input-label', 'test')

        const priority = _createDOMEl('select', '', 'select-container', '', 'select-test')
        const priorityLabel = _createDOMEl('label', 'Priority:','priority-label','to-do-form-label', 'select-test')

        toDoForm.appendChild(titleLabel)
        toDoForm.appendChild(titleInput)

        toDoForm.appendChild(dueDateLabel)
        toDoForm.appendChild(dueDateInput)

        toDoForm.appendChild(priorityLabel)
        toDoForm.appendChild(priority)

        main.appendChild(toDoForm)

        return document.getElementById('to-do-form')
    }; 
    */

    const renderProjectList = () => {
        for (const proj in DOMData) {
            const projectTitle = _createDOMEl('h3', DOMData[proj].getProjectName(), 'project' + DOMData[proj].getProjectID(), 'project' )

            console.log(DOMData[proj].getProjectID())

            if(projectWrapper.childNodes.length === 0) {
                projectTitle.classList.add('current')
            }

            projectWrapper.appendChild(projectTitle)
            // console.log(projectTitle, DOMData[proj].getProjectID())
        }
        setCurrentProject()
    }


    const setCurrentProject = () => {
        currentProject = document.getElementsByClassName('current')
        currentProject = currentProject[0]
        // console.log(currentProject)
    }
    // const renderToDoList = (currentProject) => {
    //     for (const toDo in data.currentProject.toDoData) {

    //     }
    // }

    const renderToDoList = () => {
        const currentProjectObject = DOMData[currentProject.id]
        const currToDoList = currentProjectObject.getToDoData()

        for (const toDoItem in currToDoList) {
            console.log(toDoItem)
            const todoDiv = _createDOMEl('div','', currToDoList[toDoItem].getToDoID(), 'to-do-item')
            const title = _createDOMEl('p', currToDoList[toDoItem].getTitle(), 'to-do-' + currToDoList[toDoItem].getToDoID() +'-title', 'to-do-element')
            const dueDate = _createDOMEl('p', currToDoList[toDoItem].getDueDate(), 'to-do-' + currToDoList[toDoItem].getTitle(), currToDoList[toDoItem].getToDoID() +'-dueDate', 'to-do-element')

            todoDiv.appendChild(title)
            todoDiv.appendChild(dueDate)
            currentProject.appendChild(todoDiv)
        }
    }

    const renderCurrProject = () => {

    }
    

    return { main, currentProject, renderProjectList, renderToDoList}
}
