import React from 'react';
import { Link } from 'react-router-dom';

const CommonBanner = ({ title, text }) => {
    return (
        <div>
            <div className='About-banner-parent'>
                <div className='About-banner-content'>
                    <div className='banner-text'>
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;
