//next image
import Image from 'next/image'

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion'

//variants
import { fadeIn } from '../variants'
const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 
    via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full container mx-auto'>
        {/* title */}
        <motion.h1 
            variants={fadeIn('down', 0.4)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'>
          Transforming Ideas <br /> Into {' '} 
          <span className='text-accent'>Digital Reality</span>
        </motion.h1>
         {/* subtitle  */}
         <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '>
            Welcome! I’m a dedicated AI and Data Scientist engineer at E-JUST. on the web development field I have three years of hands-on experience as a Fullstack MERN developer, I bring a unique blend of analytical and development expertise to every project. My passion lies in leveraging data-driven insights and AI solutions to create impactful, user-centric applications. Explore my journey, projects, and insights as I continue to push the boundaries of technology and innovation.
          </motion.p>
          {/* Btn */}
          <div className='flex justify-center xl:hidden relative '>
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex '
            >
            <ProjectsBtn />
          </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      {/* bg-img */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
      xl:bg-no-repeat
      w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </div>
      {/* Particles */}
      <ParticlesContainer />
      {/* avatar img */}
      <motion.div 
        className='w-[410px] h-[400px] max-w-[637px] max-h-[578px] absolute
        -bottom-32 lg:bottom-[0px] lg:right-[15%] '
        variants={fadeIn('up', 0.5)} 
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut'}}
        >
        <Avatar />
      </motion.div>
    </div>  
  </div>
  );
};

export default Home;
