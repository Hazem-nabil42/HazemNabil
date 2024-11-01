
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx"

// Microchip Image
import { CiMicrochip } from "react-icons/ci";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: "create full web application from scratch that achieve customer needs",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creative and modern design for your web application that have never done before',
  },
  {
    icon: <CiMicrochip />,
    title: 'Embedded Systems',
    description: 'I have a good experience in embedded programming with C++ & assembly for high performance. I have worked on many apps like encryption & decryption,LCD, etc...',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'one of the most important services that I deliver for my customers is Web application with respect to the search engine optimization',
  },
  {
    icon: <RxReader />,
    title: 'UI/UX design',
    description: 'Create modern and responsive web application on figma',
  },
];


// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules 
import { Autoplay, Pagination, Scrollbar, A11y, FreeMode } from 'swiper'

import 'swiper/swiper-bundle.min.css';

const ServiceSlider = () => {
  return (
  <Swiper 
    modules={[Pagination, A11y, FreeMode, Autoplay]}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination={{clickable: true}}
    className='h-[240px] sm:h-[340px]'
>
  
  {
    serviceData.map((item, index) => {
      return ( 
      <SwiperSlide key={index}>
        <div className='bg-[rgba(65,47,123,0.15)] h-max
         rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 
         group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
         transition-all duration-300'>
          {/* icon */}
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          {/* title & desc */}
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="p max-w-[350px] leading-normal">{item.description}</p>
          </div>
          {/* arrow */}
          <div className='text-3xl'>
            <RxArrowTopRight className="group-hover:rotate-45
             group-hover:text-accent transition-all duration-300"/>
          </div>
        </div>
      </SwiperSlide>
      );
    })
  }
  </Swiper>
  );
};

export default ServiceSlider;
