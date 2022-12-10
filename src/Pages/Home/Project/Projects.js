import React,{useState, useEffect} from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('projects.json')
        .then(req=> req.json())
        .then(data=> setProjects(data))
    },[])
    return (
        <div>
             <div className='mt-16 text-center'>
                <h3 className='text-xl font-bold text-cyan-800 uppercase text-center'>My Projects</h3>
                <h2 className='text-3xl text-center'>All My Full Stack Project</h2>
            </div>
            <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-7'>
                {
                  projects.length &&
                   projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;