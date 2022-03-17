import id from "date-fns/locale/id";
import { Project, getData } from './projects/project.js'
import addIconOutline from './assets/add_circle_outline_black_24dp.svg'

export const DOMStuff = () => {

    const domData = getData()

    const main = document.getElementById('main-wrapper');
    const projectListWrapper = document.getElementById('project-list-wrapper')
    const currentProjectWrapper = document.getElementById('current-project-wrapper')


    const _createDomEl = (el, text, id, className, attr) => {
        const newEl = document.createElement(el)

        switch (el) {
            case 'label' :

            case 'input' : 
                newEl.setAttribute(attr[0], attr[1])
                break;
            case 'select' : 
                newEl.setAttribute('name', attr)

                const options = ['High', 'Medium', 'Low']
                
                options.forEach((el) => {
                    const setOption = document.createElement('option')
                    setOption.setAttribute('value', el.toLowerCase())
                    newEl.appendChild(setOption).text = el
                });
                break;
            case 'button' : 
                newEl.setAttribute('role', attr);
                break;
            case 'img' : 
                newEl.setAttribute('src', attr[1]);
                break;
        }

        // if(el === 'label') {
        //     newEl.setAttribute('for', attr)
        // } else if (el === 'input') {
        //     newEl.setAttribute('name', attr)
        // } else if (el === 'select') {
        //     newEl.setAttribute('name', attr)

        //     const options = ['High', 'Medium', 'Low']
            
        //     options.forEach((el) => {
        //         const setOption = document.createElement('option')
        //         setOption.setAttribute('value', el.toLowerCase())
        //         newEl.appendChild(setOption).text = el
        //     })
        // } else if (el === 'button'){
        //     newEl.setAttribute('role', attr)
        // } else

        if (id) newEl.id = id
        if (className) newEl.classList.add(...className)
        if (text) newEl.textContent = text

        return newEl
    }

    const _clearFromDOM = (parent) => {
        while(parent.firstChild) {
            parent.removeChild(parent.lastChild)
        }
        if (!parent.classList.contains('core')) {
            parent.remove()
        }
    }

    const renderProjectList = () => {
        _clearFromDOM(projectListWrapper)
        for (const proj in domData) {
            const projectTitle = _createDomEl('h3', domData[proj].getProjectName(), 'project' + domData[proj].getProjectID(), ['project'] )

            projectListWrapper.appendChild(projectTitle)

        }

        const outlinedAddIcon = new Image();
        outlinedAddIcon.src = addIconOutline

        const addProjectBtn = _createDomEl('div', '', 'add-new-project-container', ['add-button-container'])
        const addProjectText = _createDomEl('span', 'Add Project', 'add-new-project', ['add-button'])
        const addProjectIcon = _createDomEl('img','', 'add-project-icon', ['add-button'], ['src', addIconOutline])

        addProjectBtn.appendChild(addProjectIcon)
        addProjectBtn.appendChild(addProjectText)

        projectListWrapper.appendChild(addProjectBtn)
        //projectListWrapper.appendChild(outlinedAddIcon)

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
        const toDoItem = domData[projectID].getToDoData()[toDoId]
        
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

        checkboxes.forEach((el) => {
            el.addEventListener('click', _completeToDoItem)
        })
    }

    const renderCurrentProject = (e) => {
        clearCurrentProject() 

        let currentProject = _createDomEl('ul', e.target.textContent, e.target.id, e.target.classList)

        renderToDoList(currentProject)
        
        currentProjectWrapper.appendChild(currentProject)
        setToDoListeners()
    }

    const renderToDoList = (currentProject) => {
        const currentProjectObject = domData[currentProject.id]
        console.log (currentProjectObject.getProjectName(), domData.project0.getProjectName())
        if (false) {
            
        }
        console.log(currentProjectObject.getToDoData())
        const currToDoList = currentProjectObject.getToDoData()

        for (const toDoItem in currToDoList) {
            if (currToDoList[toDoItem].getCompletedStatus() === false) {
                const toDoID = currToDoList[toDoItem].getToDoID();
                console.log(toDoID)

                const toDoListItem = _createDomEl('li','', toDoID, ['to-do-item'])

                const completeBtn = _createDomEl('button','', 'to-do-checkbox-' + toDoID , ['checkbox'] , 'checkbox')

                const title = _createDomEl('p', currToDoList[toDoItem].getTitle(), 'to-do-' + toDoID  + '-title', ['title', 'to-do-element'])

                const dueDate = _createDomEl('p', currToDoList[toDoItem].getDueDate(), 'to-do-' + toDoID + '-duedate', ['due-date', 'to-do-element'])

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

    const addToDom = (parent, ...child) => {
        child.forEach((el) => {
            parent.appendChild(el)
        })
        // for ( let i = 0; i < child.length; i++) {
        //     parent.appendChild(child)   
        // } 
    }

    const eventHandler = (e) => {

        e.preventDefault()

        console.log(e)
        let parent = e.target.parentElement
        
        if(e.target.id === 'add-project-btn') {
            const title = document.getElementById('title-input')
            const category = document.getElementById('category-input')
            const id = Object.keys(getData()).length

            getData()['project' + id] = Project(title.value, category.value, id )
            _clearFromDOM(parent)
            renderProjectList()
            
        } else if (e.target.id === 'cancel-btn') {
            _clearFromDOM(parent)
        }
        // use new project as current project?

        // allow user to input to-do?

    }

    const displayNewProjectForm = () => {

        const addProjectForm = _createDomEl('form', '', 'add-project-form', ['form'])

        const formTitle =_createDomEl('h2', 'Add Project', 'add-project-form-title', ['form-title'])

        const titleContainer = _createDomEl('div','', 'title-container', ['form-container', 'title'])
        const titleInput = _createDomEl('input', '', 'title-input', ['project-title-input', 'input', 'title', 'form-element'], ['name', 'title-input'])
        const titleLabel = _createDomEl('label', 'Project Title', 'title-label', ['project-title-label', 'label', 'title', 'form-element'], ['for', 'title-input'])

        const categoryContainer = _createDomEl('div', '', 'category-container', ['form-container', 'category'])
        const categoryInput = _createDomEl('input', '', 'category-input', ['project-category-input', 'input', 'form-element'], ['name', 'category-input'])
        const categoryLabel = _createDomEl('label', 'Category','category-label', ['project-category-label', 'label', 'form-element'],['for', 'category-input'])

        const addBtn = _createDomEl('button', 'Add Project', 'add-project-btn', ['button', 'form-element'])
        const cancelBtn = _createDomEl('button', 'X', 'cancel-btn', ['button', 'form-element'])

        addToDom(titleContainer, titleLabel, titleInput)

        addToDom(categoryContainer, categoryLabel, categoryInput)

        addToDom(addProjectForm, formTitle, titleContainer, categoryContainer, addBtn, cancelBtn)

        addToDom( main, addProjectForm)

        console.log(addProjectForm)
        addProjectForm.addEventListener('click', eventHandler)
    }


    
        /* const displayToDoForm = () => {
         _createDomEl = (el, text, id, className, name) 
        const toDoForm = _createDomEl('form', '', 'to-do-form')

        const titleInput = _createDomEl('input', '', 'title-input', 'to-do-form-input', 'to-do-title')
        const titleLabel = _createDomEl('label', 'Title', 'title-label', 'to-do-form-label', 'to-do-title')

        const dueDateInput = _createDomEl('input','', 'due-date-input', 'test')
        const dueDateLabel = _createDomEl('label', 'Due Date', 'due-date-input', 'input-label', 'test')

        const priority = _createDomEl('select', '', 'select-container', '', 'select-test')
        const priorityLabel = _createDomEl('label', 'Priority:','priority-label','to-do-form-label', 'select-test')

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

    return { main, renderProjectList, renderToDoList, renderCurrentProject, displayNewProjectForm}
}
