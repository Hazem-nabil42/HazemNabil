import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

// Microchip Image
import { CiMicrochip, CiLaptop  } from "react-icons/ci";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  PiAddressBook,
} from "react-icons/pi";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={FaHtml5} />,
          <FaCss3 key={FaCss3} />,
          <FaJs key={FaJs} />,
          <FaReact key={FaReact} />,
          <SiNextdotjs key={SiNextdotjs} />,
          <FaWordpress key={FaWordpress} />,
          <FaNodeJs key={FaNodeJs} />,
          <SiFramer key={SiFramer} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={FaFigma}/>, <SiAdobexd key={SiAdobexd} />, <SiAdobephotoshop key={SiAdobephotoshop} />],
      },
      {
        title: 'Presentation skills',
        icons: [<PiAddressBook key={PiAddressBook} />],
      },
      {
        title: 'Computer Architecture & Operating System',
        icons: [<CiMicrochip key={CiMicrochip}/>, <CiLaptop key={CiLaptop}/>],
      },
      {
        title: 'Languages',
        icons: [<FaFigma key={FaFigma} />, <SiAdobexd key={SiAdobexd} />, <SiAdobephotoshop key={SiAdobephotoshop} />],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Entuerprenurship Simulation Camp (Hult Prize)',
        stage: '2022 - 2023',
      },
      {
        title: 'Web Development - Freelancer',
        stage: '2022 - 2024',
      },
      {
        title: 'DEPI | NTI intern for AI and Data science',
        stage: '2024',
      },      {
        title: 'Volunteer on JLPT exams at E-JUST',
        stage: '2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Computer Science - E-JUST University,',
        stage: '2022',
      },
      {
        title: 'AI and Data science Engineer',
        stage: '2024',
      },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2020',
      // },
    ],
  },
];

// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

// counters
import CountUp from 'react-countup'


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return ( 
  <div className='h-full bg-primary/30 py-32 text-center
   xl:text-left '>
    <Circles />
    {/* avatar img */}
    <motion.div 
      className='hidden xl:flex absolute bottom-0 
     -left-[310px] '
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
     >
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col 
     items-center xl:flex-row gap-x-6'>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 
          className='h2 z-50'
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden">
              Captivating <span className='text-accent'>Stories</span> birth
              magnification designs.
        </motion.h2>
        
        <motion.p 
          className='p max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-50'
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden">5 years ago, I began freelancing as a developer. Since then Ihave done
          remote work for agencies, counsulted for startups, and collaborated on
          digital products for business and consumer use. 
        </motion.p>
        {/* counters */}
          <motion.div className='hidden md:flex md:max-w-xl xl:max-2-none mx-auto xl:mx-0
           mb-8'
           variants={fadeIn('right', 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden">

            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={150} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                  max-w-[100px]'>
                  Winning awards
                </div>
              </div>


            </div>
          </motion.div>
      </div>
      {/* info */}
      <motion.div 
        className='flex flex-col w-full xl:max-w-[48%]
        h-[480px]'
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden">

        <div className='flex gap-x-4 xl:gap-x-8 mx-auto 
         xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div 
                key={itemIndex} 
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all duration-300'}

                  cursor-pointer capitalize
                  xl:text-lg relative after:w-8 after:h-[2px]
                  after:bg-white after:absolute after:-bottom-1
                  after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                  >
                  {item.title}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl:py-6
         flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              {/* title */}
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex '>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                {/* icon */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                })}
              </div>
            </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
