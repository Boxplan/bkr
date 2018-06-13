import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

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
                    <h1>Packages</h1>
                    </header>
                    <p>Rs. 450 + Tax | Veg Buffet Package | Package includes veg menu buffet spread and usage of banquet hall</p>

                    <p>Rs. 550 + Tax | Non-Veg Buffet Package | Package includes non-veg menu buffet spread and usage of banquet hall</p>


                </div>
            </section>
        </div>

    </div>
)

export default Generic