'use client'
import React, {useState} from 'react';
import './Create.css';
import Success from '../../overlay/Success/page';

export default function Create() {
    const [musicImage, setMusicImage] = useState('/create/create_image.svg');
    const [showOverlay, setShowOverlay] = useState(false);

    const handleImageClick = () => {
        setMusicImage(prevImage =>
            prevImage === '/create/create_image.svg' ? '/create/alternate_image.svg' : '/create/create_image.svg'
        );
    };

    const handleButtonClick = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <div className='main'>
            <div className='create'>
                <h3>Create Music collectible</h3>

                <div className='music_image' onClick={handleImageClick}>
                    <img src={musicImage} alt='create' height={230} width={500} />
                </div>

                <div className='sale'>
                    <img src='/create/putonsale.svg' alt='create' />
                </div>

                <div className='price'>
                    <img src='/create/sale.svg' alt='create' />
                </div>

                <div className='tax'>
                    <img src='/create/tax.svg' alt='create' />
                </div>

                <div className='name'>
                    <img src='/create/name.svg' alt='create' />
                </div>

                <div className='description'>
                    <img src='/create/desc.svg' alt='create' height={230} width={500} />
                </div>

                <div className='royalty'>
                    <img src='/create/royalty.svg' alt='create' />
                </div>

                <div className='create_button'  onClick={handleButtonClick}>
                    <img src='/create/button.svg' alt='create' />
                </div>
            </div>

            <div className='preview'>
                <h4>Preview</h4>

                <div className='prev_image'>
                    <div className='border'>
                        <div>
                            <img src={'/create/preview_image.svg'} alt='preview' height={400} width={500} />
                        </div>

                        <div>
                            <img src={'/create/preview_desc.svg'} alt='preview' />
                        </div>

                        <div>
                            <img src={'/create/preview_price.svg'} alt='preview' />
                        </div>
                    </div>
                </div>
            </div>

            {showOverlay && (
                <div className='overlay'>
                    <Success onCloseOverlay={handleCloseOverlay} />
                </div>
            )}
        </div>

    );

}