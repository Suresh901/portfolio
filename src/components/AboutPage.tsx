"use client"
import SliderComp from '@/components/Slider'
import Image from 'next/image'


const AboutPage = () => {
    return (
        <section id="about">
            <div className='my-12 pb-12 md:pt-16'>
                <h1 className='text-center font-bold text-4xl'>
                    About me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className="md:flex md:items-center md:justify-center space-x-4">
                    <div className="md:w-2/3">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Suresh and I am a{" "}
                            <span className="font-bold">{"highly ambitious"}</span>,
                            <span className="font-bold">{" self-motivated"}</span> {" "}
                            Frontend Developer.
                        </p>
                        <br />
                        <p>
                            I graduated from ISMT college which  with Unihas affilation versity of Sunderland
                            with a BS in Computer System Engineering and have been working in the
                            field ever since.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that keep me busy.
                            From reading, playing sports, traveling, to watching YouTube videos,
                            I am always seeking new experiences and love to keep myself
                            engaged and learning new things.
                        </p>
                        <br />
                    </div>
                    <div className='flex justify-center'>
                        <Image src="/about.avif" alt="" width={300} height={300} className='rounded-full shadow-md' />
                    </div>
                </div>
                <div className='pt-10'>
                    <h1 className='text-center font-bold text-4xl'>
                        Skills
                        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                    </h1>
                    <SliderComp />
                </div>
            </div>
        </section>
    )
}

export default AboutPage