import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,

            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Grime</h2>

                <AnimatedTitle title="Disc<b>o</b>ver the World's <br /> l<b>a</b>rgest shared adventure" containerClass="mt-5 !text-black text-center" />

                <div className='about-subtext'>
                    <p>
                        The Game of Games begins-your life, now an epic MMORPG
                    </p>
                    <p>
                        Grime unites every player from countless games and platform 
                    </p>
                </div>
            </div>

            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img 
                        src="img/about.webp" 
                        alt="Background"
                        className='absolute top-0 left-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default About