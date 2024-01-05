import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <section>
            <div className="hero min-h-[80vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={hero} className="hero-img h-[600px] w-[700px]" />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Explore New Cars!</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia odio consequuntur magnam ipsa corrupti tempore voluptatem nesciunt iste voluptatibus, repudiandae delectus quod sunt enim ullam facere sint amet dolore.</p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero