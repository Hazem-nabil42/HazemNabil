//next image
import Image from 'next/image'


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src='https://hazem-nabil42.github.io/HazemNabil/me2.jpeg'
    width={410} 
    height={400} 
    alt='HazemNabil'
    className='translate-z-0 w-full h-full object-cover rounded-full shadow-2xl
    shadow-red-200 opacity-65'
  
    />
  </div>
};

export default Avatar;
