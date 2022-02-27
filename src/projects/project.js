const Project = ( name, category) => {
    // let projectName = name;
    // let projectCategory = category;

    const getProject = () => name;
    
    const getCategory = () => category;

    const setProject = ( newName ) => { 
        name = newName
    };

    const setCategory = ( newCategory ) => {
        category = newCategory
    };

    return { getProject, getCategory, setProject, setCategory };
};



export { Project }