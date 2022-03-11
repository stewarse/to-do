import id from "date-fns/locale/id";
import { Project, getData } from "./projects/project"

export const DOMStuff = () => {

    const DOMData = Project().getData()

    const main = document.getElementById('main-wrapper');
    const projectListWrapper = document.getElementById('project-list-wrapper')
    const currentProjectWrapper = document.getElementById('current-project-wrapper')


    const _createDOMEl = (el, text, id, className, attr) => {
        const newEl = document.createElement(el)

        if(el === 'label') {
            newEl.setAttribute('for', attr)
        } else if (el === 'input') {
            newEl.setAttribute('name', attr)
        } else if (el === 'select') {
            newEl.setAttribute('name', attr)

            const options = ['High', 'Medium', 'Low']
            
            options.forEach((el) => {
                const setOption = document.createElement('option')
                setOption.setAttribute('value', el.toLowerCase())
                newEl.appendChild(setOption).text = el
            })
        } else if (el === 'button'){
            newEl.setAttribute('role', attr)
        }

        if (id) newEl.id = id
        if (className) newEl.classList.add(...className)
        if (text) newEl.textContent = text

        return newEl
    }

    const renderProjectList = () => {
        console.log(DOMData)
        for (const proj in DOMData) {
            const projectTitle = _createDOMEl('h3', DOMData[proj].getProjectName(), 'project' + DOMData[proj].getProjectID(), ['project'] )

            console.log(DOMData[proj].getProjectID())

            // if(projectListWrapper.childNodes.length === 0) {
            //     projectTitle.classList.add('current')
            // }

            projectListWrapper.appendChild(projectTitle)
            // console.log(projectTitle, DOMData[proj].getProjectID())
        }
        getCurrentProject()
    }

    const getCurrentProject = () => {
        return document.querySelector('.currentProject')
    }

    const _getID = (e) => {
        const elID = e.target.id
        const index = elID.lastIndexOf('-') + 1
        return elID.slice(index ,elID.length)
    }

    const _getProjectId = (e) => {
        return e.target.parentNode.parentNode.id
    }

    const _completeToDoItem = (e) => {
        const toDoId = _getID(e)
        const projectID = _getProjectId(e)
        const toDoItem = DOMData[projectID].getToDoData()[toDoId]
        
        toDoItem.toggleCompletedStatus()

        removeDOMElements(e) 
    }

    const removeDOMElements = (e) => {
        const parent = e.target.parentNode
        while (parent.firstChild) {
            parent.removeChild(parent.lastChild)
        }
        parent.remove()
    }

    const setToDoListeners = () => {
        const checkboxes = document.querySelectorAll('.checkbox')

        //[ ]: Need to update code to change the completed state of the to-do item to be completed and then re-render the to lists
        //[ ]: Update render to-do's to only render not completed items
        checkboxes.forEach((el) => {
            el.addEventListener('click', _completeToDoItem)
        })
    }

    const renderCurrentProject = (e) => {
        clearCurrentProject() 

        let currentProject = _createDOMEl('ul', e.target.textContent, e.target.id, e.target.classList)

        // if(getCurrentProject()){
        //     currentProject = getCurrentProject()
        //     clearCurrentProject(currentProject)
        //     currentProject = setCurrentProject(e)
        // } else {
        //     currentProject = projectListWrapper.firstChild
        //     currentProject.classList.add('current-project')
        // }

        renderToDoList(currentProject)
        
        currentProjectWrapper.appendChild(currentProject)
        setToDoListeners()
    }

    const renderToDoList = (currentProject) => {
        const currentProjectObject = DOMData[currentProject.id]
        console.log (currentProjectObject.getProjectName(), DOMData.project0.getProjectName())
        if (false) {
            
        }
        console.log(currentProjectObject.getToDoData())
        const currToDoList = currentProjectObject.getToDoData()

        for (const toDoItem in currToDoList) {
            if (currToDoList[toDoItem].getCompletedStatus() === false) {
                const toDoID = currToDoList[toDoItem].getToDoID();
                console.log(toDoID)

                const toDoListItem = _createDOMEl('li','', toDoID, ['to-do-item'])

                const completeBtn = _createDOMEl('button','', 'to-do-checkbox-' + toDoID , ['checkbox'] , 'checkbox')

                const title = _createDOMEl('p', currToDoList[toDoItem].getTitle(), 'to-do-' + toDoID  + '-title', ['title', 'to-do-element'])

                const dueDate = _createDOMEl('p', currToDoList[toDoItem].getDueDate(), 'to-do-' + toDoID + '-duedate', ['due-date', 'to-do-element'])

                toDoListItem.appendChild(completeBtn)
                toDoListItem.appendChild(title)
                toDoListItem.appendChild(dueDate)
                currentProject.appendChild(toDoListItem)
            }
        }
    }

    const clearCurrentProject = () => {
        let projectToRemove = ''

        if (currentProjectWrapper.firstChild){
            projectToRemove = currentProjectWrapper.firstChild


            // Remove To-Do Nodes 
            while(projectToRemove.firstChild) {
                projectToRemove.removeChild((projectToRemove.lastChild))
            }

            // Remove Current Project
            currentProjectWrapper.removeChild(projectToRemove)
        }
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

    return { main, renderProjectList, renderToDoList, renderCurrentProject}
}
