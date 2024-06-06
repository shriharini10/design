import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className={'footer'}>
        <div className={'top_section'}>
          <div className={'brand_logo'}>
            <div className={'brand'}>
              <img src={"/logo.svg"} alt={"brand logo"} height={90} width={279} />

            </div>

            <div className={'logo'}>
              <img src={"/socialmedia_icons.svg"} height={25} width={156} alt={"social media icons"} />
            </div>
          </div>


          <div className={'terms'}>
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Resource center</p>
          </div>
        </div>


        <div className={'bottom_section'}>
          <div className={'copyrights'}>
            <p>© 2020 MP4toNFT. All rights reserved</p>
          </div>

          <div className={'by'}>
            <p>Developed and maintained by ZEVO CORPORATION</p>
          </div>

        </div>


      </div>
    );
}