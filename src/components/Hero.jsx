import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <section>
            <div className="hero min-h-[80vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={hero} className="hero-img h-[600px] w-[700px]" />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id exercitationem, quo soluta ad in porro eos rerum necessitatibus, aliquam, modi eligendi ut minus voluptatibus deserunt sit dolorum ipsam quod?
                        Totam obcaecati nobis, iste praesentium ipsa quod vero accusantium adipisci optio ea eum sed, commodi voluptatem quasi at nisi quis, nesciunt facere deserunt? Tempore dolorum magni illum accusamus laboriosam mollitia.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero