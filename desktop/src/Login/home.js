import React from 'react'
import './home.css'
import  Depo  from './depo.jpeg'
import  Depo1 from './depo1.jpeg'
import  Market from './market.jpg'
import { useRef } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { ReactOwlCarousel } from 'react-owl-carousel'

const Home = () => {

    const ref = useRef()

    const imgObjArr = [
        {
            img: Depo,
            title: 'Depo',
            index: 0,
        },
        {
            img: Depo1,
            title: 'Depo1',
            index: 1,
        },
        {
            img: Market,
            title: 'Market',
            index: 2,
        }
    ]

    return (
        <>
            <div className='home-container'>
                <div className='header'>
                    <h1>
                        Welcome to Sikko
                    </h1>
                </div>
                <div className='about'>
                    <h3>
                        Our purpose is to help you find the best products for your needs.
                    </h3>
                    {/* <div className='images'>
                        <FaArrowRight width={'50px'}/>
                        <ReactOwlCarousel
                            ref={ref}
                            items={3}
                            style={{ width: '100vw' }}
                        >
                            {imgObjArr.map((imgObj) => {
                                return (
                                    <div key={imgObj.index} className='image-container'>
                                        <img src={imgObj.img} alt={imgObj.title} />
                                    </div>
                                    )
                                }
                            )}
                        </ReactOwlCarousel>
                        <FaArrowLeft />
                    </div> */}
                    <h3>
                        We have a wide range of products to choose from.
                    </h3>
                </div>
            </div>
        </>
    )
}
export default Home