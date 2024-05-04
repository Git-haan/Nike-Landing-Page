import { useState } from 'react'

import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { bigShoe1 } from "../assets/images"

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState (bigShoe1)
    return (
        <section 
            id="home" 
            className="w-full p-2 flex sm:flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
            
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
                <h1 className="font-klein text-8xl">
                    <span className="md:whitespace-nowrap pr-10">
                        A NEW ERA OF 
                    </span>
                    <br />
                    <span className="inline-block mt-3 font-bold">NIKE</span>
                    <span> SHOES</span>
                </h1>
                <p className="text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Embrace the Extraordinary: Explore Unrivaled Style in Nike's Latest Arrivals.
                </p>
                <a href='https://www.nike.com/'>
                    <Button
                        label="SHOP NOW"
                        iconURL={ arrowRight }>
                    </Button>
                </a>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div>
                            <p className="text-4xl font-klein font-black">{stat.value}</p>
                            <p className="leading-7 text-slate-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='max-lg:hidden'>
                <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40">
                    <img
                        src={ bigShoeImg }
                        alt="shoe collection"
                        width={610}
                        height={500}
                        className="object-contain relative z-10"
                    />

                    <div className="flex-col sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6">
                        {shoes.map((shoe) => (
                            <div key={shoe}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImage= {(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero