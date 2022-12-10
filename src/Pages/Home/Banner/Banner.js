import React from 'react';
import sakir from '../../../Asset/Cover/sakir.png'

const Banner = () => {
    return (
        <div className='hero-content flex-col-reverse lg:flex-row justify-around items-center'>
            <div>
                <h1 className='text-4xl lg:text-6xl font-bold text-white'>
                    Hi! I'm<br />
                    Sakir Hossain <br />
                    Faruque
                </h1>
                <p className='my-10 text-xl'>Professional Web Developer and <br />
                Content Writer
                </p>
            </div>
            <div >
                <img src={sakir} alt="sakir" className='sm:h-48 lg:h-full' />
            </div>

        </div>
    );
};

export default Banner;