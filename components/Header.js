// next icons
import Image from 'next/image'

//next link
import Link from 'next/link'

//components 
import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16
  xl:px-0 xl:h-[90px] ">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between 
      items-center gap-y-6 py-8'>
        {/* logo */}
        <Link href={'/'}>
        {/* <Image
          src={'/logo.svg'}
          width={220}
          height={48}
          alt=''
          priority={true}
          
          /> */}
          <div className='text-xl md:text-4xl tracking-wider animate-pulse transform hover:scale-75 transition-all duration-300'>
          <h1>Hazem <span className='text-accent'>Nabil</span>  <span className='text-blue-300'>.</span> </h1>
          </div>
        </Link>
        {/* scocials */}
        <Socials />
      </div>
    </div>
  </header>
};

export default Header;
