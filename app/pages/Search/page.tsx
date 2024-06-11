import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <div className='searchpage'>
            <div className='searchtext'>
                <p>Loading based on your search ....</p>
            </div>

            <div className='row1'>
                <div className='grid1'>
                    <img src={'/Search/search_image.svg'} alt="loading page" height={432} width={300} />
                </div>

                <div className='grid2'>
                    <img src={'/Search/search_image.svg'} alt="loading page" height={432} width={300} />
                </div>

                <div className='grid3'>
                    <img src={'/Search/search_image.svg'} alt="loading page" height={432} width={300} />
                </div>

                <div className='grid4'>
                    <img src={'/Search/search_image.svg'} alt="loading page" height={432} width={300} />
                </div>



            </div>
        </div>

    );
}