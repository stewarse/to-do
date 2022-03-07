import { Project, getData } from "./projects/project"

export const DOMStuff = () => {

    const DOMData = Project().getData()

    const main = document.getElementById('main-wrapper');
    const projectListWrapper = document.getElementById('project-list-wrapper')
    const currentProjectWrapper = document.getElementById('current-project-wrapper')


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
        console.log(DOMData)
        for (const proj in DOMData) {
            const projectTitle = _createDOMEl('h3', DOMData[proj].getProjectName(), 'project' + DOMData[proj].getProjectID(), 'project' )

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

    const setCurrentProject = (e) => {
        if(e.type === 'click'){
            return _createDOMEl('div', e.target.textContent, e.target.id, `${e.target.classList}, current-project`)
        } else if(e.type === 'load') {
            console.log('I\'m working as expected!')
            return _createDOMEl('div', getData().project0.textContent, 'project' + getData().project0.getProjectID(), 'current-project')
        }
    }



    const renderCurrentProject = (e) => {
        clearCurrentProject() 

        let currentProject = _createDOMEl('div', e.target.textContent, e.target.id, e.target.classList)

        // if(getCurrentProject()){
        //     currentProject = getCurrentProject()
        //     clearCurrentProject(currentProject)
        //     currentProject = setCurrentProject(e)
        // } else {
        //     currentProject = projectListWrapper.firstChild
        //     currentProject.classList.add('current-project')
        // }

        renderToDoList(currentProject)

        //currentProjectDOM = _createDOMEl('div', currentProject.getProjectName(), 'currentProject', )

        currentProjectWrapper.appendChild(currentProject)
        
    }

    const renderToDoList = (currentProject) => {
        const currentProjectObject = DOMData[currentProject.id]
        console.log (currentProjectObject.getProjectName(), DOMData.project0.getProjectName())
        if (false) {
            
        }
        console.log(currentProjectObject.getToDoData())
        const currToDoList = currentProjectObject.getToDoData()

        for (const toDoItem in currToDoList) {
            const todoDiv = _createDOMEl('div','', currToDoList[toDoItem].getToDoID(), 'to-do-item')
            const title = _createDOMEl('p', currToDoList[toDoItem].getTitle(), 'to-do-' + currToDoList[toDoItem].getToDoID() +'-title', 'to-do-element')
            const dueDate = _createDOMEl('p', currToDoList[toDoItem].getDueDate(), 'to-do-' + currToDoList[toDoItem].getTitle(), currToDoList[toDoItem].getToDoID() +'-dueDate', 'to-do-element')

            todoDiv.appendChild(title)
            todoDiv.appendChild(dueDate)
            currentProject.appendChild(todoDiv)
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
    

    return { main, renderProjectList, renderToDoList, renderCurrentProject}
}
