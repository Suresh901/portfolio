"use client"
import Image from "next/image"
import { Link } from "react-scroll"
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
    return (
        <section id='home'>
            <div className="flex flex-col items-center justify-center text-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:w-1/2">
                    <Image src='/image.jpg' alt='' width={400} height={400} className="rounded-full shadow-2xl" />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> Hi, I&#39;m Suresh!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-semibold text-teal-600">
                            Front End Developer
                        </span>
                        .{" "}Working towards creating responsive design.
                    </p>
                    <a href='Suresh_CV.pdf' download>
                        <button className="text-neutral-100 font-semibold px-5 py-[0.6rem] bg-teal-600 rounded shadow hover:bg-teal-700 mr-5">
                            Download CV
                        </button>
                    </a>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-[0.7rem] bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection