"use client";
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/magicButton'
import { cn, Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/textGenerate'
import { socialMedia } from '@/data';
import Img from "next/image";


const Hero = () => {
  return (
    
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-80">Hi! I&apos;m Mohammed</h2>  
        <TextGenerateEffect className=" text-center text-[40px] md:text-5xl lg:text-6xl" words="Full stack Developer"/> 
        <p className=' text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
        A passionate Full Stack Developer specializing in building high-performance web applications with React.js, Next.js, Node.js, Express.js, Nest.jS and Wordpress
          </p>   

          <a href='Resume 2.pdf'>
            <MagicButton title="View Resume" icon={<FaLocationArrow/>}/>
            </a>  
             <div className="flex items-center gap-4 mt-6 md:mt-0">
                      {socialMedia.map((info) => (
                        <a
                          key={info.id}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 mt-10 flex justify-center items-center bg-white/10 rounded-xl border border-white/20 transition-all duration-300 hover:bg-purple-600 hover:scale-110 shadow-md"
                        >
                          <Img src={info.img} alt={info.name} width={24} height={24} />
                        </a>
                      ))}
                    </div>
        </div>
      </div>
    </div>
  )
}

export default Hero