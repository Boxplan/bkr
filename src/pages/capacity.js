import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>BKR Convention Centre</title>
            <meta name="desciption" content="Theater Style - 300px" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Seating Capacity</h1>
                    </header>
                    <p>Theater Style - 300px</p>
                    <p>Floating - 500px</p>



                </div>
            </section>
        </div>

    </div>
)

export default Generic