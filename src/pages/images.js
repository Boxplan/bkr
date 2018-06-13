import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import pic20 from '../assets/images/pic20.jpg'
import pic22 from '../assets/images/pic22.jpg'
import pic23 from '../assets/images/pic23.jpg'
import pic24 from '../assets/images/pic24.jpg'
import pic25 from '../assets/images/pic25.jpg'



const Generic = (props) => (
    <div>
        <Helmet>
            <title>BKR Convention Centre</title>
            <meta name="BKR Convention Centre" content="BKR Convention Centre" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Image Gallery</h1>
                    </header>
                    <span className="image main"><img src={pic20} alt="" /></span>
                    <span className="image main"><img src={pic22} alt="" /></span>
                    <span className="image main"><img src={pic23} alt="" /></span>
                    <span className="image main"><img src={pic24} alt="" /></span>
                    <span className="image main"><img src={pic25} alt="" /></span>
                </div>



            </section>
        </div>

    </div>
)

export default Generic