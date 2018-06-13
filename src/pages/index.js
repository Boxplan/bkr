import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
// import ScriptHolder from '../components/ScriptHolder'

class HomeIndex extends React.Component {

    constructor(props) {
            super(props);
            this.state ={};
            this.hideDom = this.hideDom.bind(this)
        }



    hideDom(){
      //  document.getElementById("one").style.display ="none";
    }


    render() {
       // const siteTitle = this.props.data.site.siteMetadata.title;
       // const siteDescription = this.props.data.site.siteMetadata.description;
      //  const wWidth = window.innerWidth;
      //  const wHeight = window.innerHeight;

        const schemaOrgJsonLd =
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "@id": "http://www.bkr.com",
            "name": "BKR Convention",
            "image": ["http://www.shibravyicourtyard.com/static/pic22.3739db65.jpg,http://www.shibravyicourtyard.com/static/pic31.bf1f841b.jpg,http://www.shibravyicourtyard.com/static/pic27.aace32c0.jpg,http://www.shibravyicourtyard.com/static/pic21.badd0ad4.jpg"],
            "address": {
            "@type": "PostalAddress",
                "streetAddress": "Wings House, No. 236, 5th Main, 2nd Block, HRBR Layout, Bangalore - 560043",
                "addressLocality": "Kammanahalli,HRBR Layout",
                "addressRegion": "Bangalore",
                "postalCode": "560043",
                "addressCountry": "India"
        },
            "aggregateRating": {
            "@type": "AggregateRating",
                "ratingValue": " 4.5 ",
                "bestRating": "5",
                "reviewCount": " 48 "
        },
            "priceRange": "Rs.18000 - Rs.65000",
            "geo": {
            "@type": "GeoCoordinates",
                "latitude": 13.020812,
                "longitude": 77.636105
        },
            "url": "http://www.bkr.com",
            "telephone": " +918039345194",

            "potentialAction": {
            "@type": "ReserveAction",
                "target": {
                "@type": "EntryPoint",
                    "urlTemplate": "http://www.bkr.com",
                    "inLanguage": "en-US",
                    "actionPlatform": "http://schema.org/DesktopWebPlatform"


            },
            "result": {
                "@type": "Reservation",
                    "name": "Get Quote"
            }
        }
        };


        return (
            <div>
                <Helmet>
                    <title>BKR Convention Centre</title>
                    <meta name="description" content='BKR Convention Centre, T Nagar, Chennai' />
                    <script type="application/ld+json">
                        {JSON.stringify(schemaOrgJsonLd)}
                    </script>
                </Helmet>

                <div id="main" >
                    <section className="tiles">
                        <article style={{backgroundImage:`url()`}}>
                            <header className="major">
                                <h3>BKR Convention Centre</h3>
                                <p>BKR Convention Centre in T.Nagar Chennai ideal for weddings and conventions.</p>
                            </header>
                            <Link to="/venues" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/BKR-Grand-and-Guinness-2.JPG)`}}>
                            <header className="major">
                                <h3>Packages</h3>
                                <p>Package includes food menu option and usage of banquet hall</p>
                            </header>
                            <Link to="/packages" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-BKR-Grand-T-Nagar-bkr-convention-hall-2.jpg)`}}>
                            <header className="major">
                                <h3>Capacity Info</h3>
                                <p>Convention hall can accommodate from 100 to 350 Guests</p>
                            </header>
                            <Link to="/capacity" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url(https://s3.ap-south-1.amazonaws.com/chainsite/bkr/bkr-convention-hall-26.jpg)`}}>
                            <header className="major">
                                <h3>Gallery</h3>
                                <p>Images, Virtual Tour</p>
                            </header>
                            <Link to="/images" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url()`}}>
                            <header className="major">
                                <h3>Recent Events</h3>
                                <p>Weddings, Family Events, Parties</p>
                            </header>
                            <Link to="/recent-events" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage:`url()`}}>

                            <header className="major">
                                <h3>+91 44 11111111</h3>
                                <p>Address | Location</p>
                            </header>
                            <Link to="/contact-us" className="link primary"></Link>
                        </article>

                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`


//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Balan-Farm-Green-Convention-Hall-balan-farm3-1.jpg)`}}>
// <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Horizon-Horizon_Octave_JP_Nagar_3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>