import React from 'react';
import resume from '../../Asset/resume/resume.jpg'

const Resume = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('sakirsresume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'sakirsresume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <button className='btn btn-primary my-5' onClick={onButtonClick}>Download Resume</button>
            <img src={resume} alt="" className='sm:h-48 sm:lg-w-full lg:w-2/3 my-5 lg:h-full' />
        </div>
    );
};

export default Resume;