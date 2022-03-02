import { data } from "./projects/project"

export const DOMStuff = () => {

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

    const renderProject = () => {
        for (const proj in data) {
            const projectTitle = _createDOMEl('p', data[proj].getProjectName(), 'project-' + data[proj].getProjectID(), 'project' )
            projectWrapper.appendChild(projectTitle)
            console.log(projectTitle, data[proj].getProjectID())
        }
    }
    

    return { main, renderProject }
}
