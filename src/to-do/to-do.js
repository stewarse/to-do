const ToDo = ( title, dueDate, priority, id, isCompleted = false ) => {
    //ID will be = to the project ID + count of current todo's on that project 
    // Will need to pull in Project ID to tie them together

    const getTitle = () => title;

    const setTitle = (newTitle) => {
        title = newTitle
    };

    const getDueDate = () =>  dueDate;

    const setDueDate = (newDueDate) => {
        dueDate = newDueDate
    };

    const getCompletedStatus = () => isCompleted;

    const toggleCompletedStatus = () => isCompleted ? isCompleted = false : isCompleted = true;

    const getPriority = () => priority;

    const setPriority = (newPriority) => {
        priority = newPriority
    };

    const getToDoID = () => id

    const deleteToDo = () => {
        // use DOMStuff to for event to find 

    }

    return { getTitle, setTitle, getDueDate, setDueDate, getCompletedStatus, toggleCompletedStatus, getPriority, setPriority, getToDoID };
}

export { ToDo }