import React from 'react';
import './Mob_preview.css';

export const Mob_preview = () => {
    return (
        <div className='prev_image'>
            <h2>Preview</h2>

            <div className='border'>
                <div className='preview_image'>
                    <img src={'/mob_preview/preview_image.svg'} alt='preview' />
                </div>

                <div className='desc'>
                    <img src={'/mob_preview/desc.svg'} alt='preview' />
                </div>

                <div>
                    <img src={'/create/preview_price.svg'} alt='preview' />
                </div>
            </div>
        </div>
    )
}