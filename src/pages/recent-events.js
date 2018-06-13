import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>BKR Convention Centre</title>
            <meta name="desciption" content="Recent events" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Recent Events</h1>
                    </header>
                    <p>To be implemented after going live</p>

                </div>
            </section>
        </div>

    </div>
)

export default Generic