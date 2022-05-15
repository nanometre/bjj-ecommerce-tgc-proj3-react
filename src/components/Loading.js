import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/images/loading-bar.json';

// component for loading animation
export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='m-auto d-flex align-items-center h-100'>
            <Lottie
                options={defaultOptions}
                height={'30%'}
                width={'30%'}
            />
        </div>
    )
}