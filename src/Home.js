import React from 'react'
import Banner from './images/banner.jpg'
import './css/home.css'
import Product from './Product'
import Image1 from './images/digital-stage-box.jpg'
import Image2 from './images/samsungtv.jpg'
import Image3 from './images/alexa.jpg'
import Image4 from './images/mixerjpg.jpg'
import Image5 from './images/sellpg.jpg'

function Home() {
    return (
        <div className="home">
            <img className="home_img" src={Banner} alt="Banner" />
            <div className="home_row">
                <Product id="222453"
                    title="SELL LIKE CRAZY: How to Get As Many Clients, Customers and Sales As You Can Possibly Handle-Sabri Suby"
                    price={72000}
                    rating={4}
                    image={Image5}
                />
                <Product id="222454"
                    title="MURENKING Stand Mixer MK36 500W 6-Speed 5-Quart Stainless Steel Bowl"
                    price={12000}
                    rating={4}
                    image={Image4}
                />
            </div>
            <div className="home_row">
                <Product id="222455"
                    title="Amazon Echo (2nd generation)"
                    price={10000}
                    rating={3}
                    image={Image3}
                />
                <Product id="222456"
                    title="Behringer:Digital 16-channel Stage Box"
                    price={72000}
                    rating={4}
                    image={Image1}
                />

                <Product id="222457"
                    title="Behringer:Digital 16-channel Stage Box"
                    price={72000}
                    rating={4}
                    image={Image1}
                />
            </div>
            <div className="home_row">
                <Product id="222458"
                    title='Samsung Tv - 49" K6300 6 Series Curved FHD Smart TV'
                    price={85000}
                    rating={4}
                    image={Image2}
                />
            </div>
            <div className="home_row">
            <Product id="222459"
                    title="Behringer:Digital 16-channel Stage Box"
                    price={72000}
                    rating={4}
                    image={Image1}
                />
                                <Product id="222460"
                    title="Behringer:Digital 16-channel Stage Box"
                    price={72000}
                    rating={4}
                    image={Image1}
                />
            </div>

        </div>

    )
}

export default Home
