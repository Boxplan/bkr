import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>BKR Convention Centre</title>
            <meta name="description" content="Our Convention Centre is located in T.Nagar and ideally placed for banquets and events that draw guests from
                        all over Chennai. Ideal for Weddings and and large social events like birthday parties, naming ceremony, farewell events, we also host a number of corporate events and conventions." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>BKR Convention Centre</h1>
                    </header>
                    <p>Our Convention Centre is located in T.Nagar and ideally placed for banquets and events that draw guests from
                        all over Chennai. Ideal for Weddings and and large social events like birthday parties, naming ceremony, farewell events
                        , we also host a number of corporate events and conventions.</p>

                </div>
            </section>
        </div>

    </div>
)

export default Generic