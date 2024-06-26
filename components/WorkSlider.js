// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb1.jpg',
          href: '#',
        },
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb2.jpg',
          href: '#',
        },
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb3.jpg',
          href: '#',
        },
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb4.jpg',
          href: '#',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb4.jpg',
          href: '#',
        },
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb1.jpg',
          href: '#',
        },
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb2.jpg',
          href: '#',
        },
        {
          title: 'title',
          path: 'https://hazem-nabil42.github.io/HazemNabil/thumb3.jpg',
          href: '#',
        },
      ],
    },
  ],
};

import Link from 'next/link'

// icons
import {
  BsArrowRight,
} from 'react-icons/bs'

// next image 
import Image from 'next/image'


// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules 
import { Autoplay, Pagination, Scrollbar, A11y, FreeMode } from 'swiper'

import 'swiper/swiper-bundle.min.css';

const WorkSlider = () => {
  return (
  <Swiper 
    modules={[Pagination, A11y, FreeMode, Autoplay]}
    spaceBetween={10}
    pagination={{clickable: true}}
    className='h-[280px] sm:h-[480px]'
>
  
  {
    workSlides.slides.map((slide, index) => {
      return ( 
        
      <SwiperSlide key={index}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 
        cursor-pointer'>
          {slide.images.map((image, index) => {
            return (
              <Link key={index} href={`${image.href}`}>
                <div 
                  className='relative rounded-lg overflow-hidden 
                  flex items-center justify-center group' 
                  key={index}
                >
                  {/* image */}
                  <div className='flex items-center justify-center relative
                  overflow-hidden group'>
                    <Image 
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                      
              
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent
                      via-[#e838cc] to-[#4a22bd]
                        opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full 
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part I */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 
                          transition-all duration-300 delay-150'>PROJECT</div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SwiperSlide>
      );
    })
  }
  </Swiper>
  );
};

export default WorkSlider;

