const ToDo = ( title, dueDate, priority, isCompleted = false ) => {
    //ID will be = to the number of toDo's 
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

    return { getTitle, setTitle, getDueDate, setDueDate, getCompletedStatus, toggleCompletedStatus, getPriority, setPriority };
}

export { ToDo }