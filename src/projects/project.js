const Project = ( name, category) => {
    let projectName = name;
    let projectCategory = category;

    const getProject = () => projectName;
    
    const getCategory = () => projectCategory;

    const setProject = ( name ) => { 
        projectName = name
    };

    const setCategory = ( category ) => {
        return category = category
    };

    return { getProject, getCategory, setProject, setCategory }
};



export { Project }