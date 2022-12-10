import React from 'react';
import resume from '../../Asset/resume/resume.jpg'

const Resume = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={resume} alt="" className='sm:h-48 sm:lg-w-full lg:w-2/3 my-10 lg:h-full' />
        </div>
    );
};

export default Resume;