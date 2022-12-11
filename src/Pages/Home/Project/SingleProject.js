import { list } from 'postcss';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import pros from './projects.json'

const SingleProject = () => {
    const [project, setProject]= useState(undefined)

    const params = useParams()
    const getSingleProject = async (id) => {
        
            const pro = pros.find(item => item.id === id)
            if(!pro ) return 
            
            setProject(pro)
            return pro
      
        
    }

    useLayoutEffect(()=>{
        getSingleProject(params.id)
    },[])

    if(!project){
        return "loading..."
    }

    return (
        <div>
            <p className='text-white text-center text-3xl my-5 font-bold'>{project.title}</p>
            <div className='flex flex-col justify-center items-center'>
                <img src={project.img} alt="cover" className='w-full lg:w-1/2' srcset="" />
                <div className='my-5 flex flex-col lg:flex-row justify-center items-center gap-5'>
                    <img src={project.src1} className='w-full lg:w-1/3' alt="page" />
                    <img src={project.src2} className='w-full lg:w-1/3' alt="page" />
                </div>
            </div>
            <div className='my-10'>
                <a href={project.site} target="_blank" rel="noopener noreferrer" className='text-2xl font-bold text-blue-500'>Project Live Link</a>
                <br />
                <a href={project.client} target="_blank" rel="noopener noreferrer" className='text-2xl font-bold text-blue-500'>Project Client Site Code Link</a>
                <br />
                <a href={project.server} target="_blank" rel="noopener noreferrer" className='text-2xl font-bold text-blue-500'>Project Server Site Code Link</a>
            </div>
            <div>
                <h3 className='text-2xl font-bold my-3 text-slate-400 underline'>Features and Functionalities</h3>
                <ul>
                    {
                        project.features.map(feature => <li key={feature.id} className="text-xl list-disc mx-3">{feature.point}</li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default SingleProject;