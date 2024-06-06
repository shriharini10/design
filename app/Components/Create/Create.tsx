import React from 'react'
import './Create.css'

export const Create = () => {
    return (
        <div className='main'>
            <div className='create'>
                <h3>Create Music collectible</h3>

                <div className='music_image'>
                    <img src='/create/create_image.svg' alt='create' height={230} width={500} />
                </div>

                <div className='sale'>
                    <img src='/create/putonsale.svg' alt='create' />
                </div>

                <div className='price'>
                    <img src='/create/sale.svg' alt='create' />
                </div>

                <div className='tax'>
                    <img src='/create/tax.svg' alt='create'  />
                </div>

                <div className='name'>
                    <img src='/create/name.svg' alt='create' />
                </div>

                <div className='description'>
                    <img src='/create/desc.svg' alt='create' height={230} width={500} />
                </div>

                <div className='royalty'>
                    <img src='/create/royalty.svg' alt='create'  />
                </div>

                <div className='create_button'>
                    <img src='/create/button.svg' alt='create' />
                </div>
            </div>

            <div className='preview'>
                <h4>Preview</h4>

                <div className='prev_image'>
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

    );

}