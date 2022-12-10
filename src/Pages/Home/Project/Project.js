import React from 'react';

const Project = ({ project }) => {
    const { title, img, desc, site } = project
    return (
        <div>
            <div className="card card-compact bg-slate-800 shadow-md shadow-blue-400 h-96">
                <figure><img src={img} alt="project" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <a href={site} target="_blank" rel="noopener noreferrer" className='text-blue-600 font-bold'>Visit Site</a>
                    <p>{desc.length> 100? `${desc.slice(0,100)}...`: desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Deatils</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;