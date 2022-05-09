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
        <div style={{ margin: 'auto' }}>
            <Lottie
                options={defaultOptions}
                height={'45%'}
                width={'45%'}
            />
        </div>
    )
}