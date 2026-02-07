import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import footerLogo from '../../assets/Images/Main-logo/footer.png'

function Footer() {
  return (
    <>
    <footer className='bg-gradient-to-b from-[#331DA8] to-[#865AEF] pt-16 sm:pt-20 lg:pt-25 px-4 sm:px-6 lg:px-8'>
  <div className='max-w-[1624px] mx-auto'>
    <div className='flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-20 xl:gap-[140px] justify-between'>
      
      {/* Logo & Description */}
      <div className="w-full lg:max-w-[477px]">
        <img src={footerLogo} alt="Edujarr Logo" className='mb-5 sm:mb-6 lg:mb-7 w-32 sm:w-36 lg:w-auto' />
        <p className='text-white text-base sm:text-lg font-saira leading-6 sm:leading-7'>
          Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Quick Links */}
      <div className="w-full sm:w-auto sm:min-w-[205px]">
        <h3 className='text-white text-xl sm:text-2xl font-rowdies font-bold mb-5 sm:mb-6 lg:mb-8'>
          Quick Links
        </h3>
        <div className='grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4'>
          <a href="#about" className='text-white text-base sm:text-lg font-saira hover:text-gray-200 transition-colors'>
            About
          </a>
          <a href="#blog" className='text-white text-base sm:text-lg font-saira hover:text-gray-200 transition-colors'>
            Blog
          </a>
          <a href="#course" className='text-white text-base sm:text-lg font-saira hover:text-gray-200 transition-colors'>
            Course
          </a>
          <a href="#contact" className='text-white text-base sm:text-lg font-saira hover:text-gray-200 transition-colors'>
            Contact
          </a>
        </div>
      </div>

      {/* Contact Us */}
      <div className="w-full lg:min-w-[389px]">
        <h3 className='text-white text-xl sm:text-2xl font-rowdies font-bold mb-5 sm:mb-6 lg:mb-8'>
          Contact us
        </h3>
        <div className='space-y-4 sm:space-y-5'>
          
          {/* Phone & Email */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8'>
            {/* Phone */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <IoCall className='text-white text-lg sm:text-xl flex-shrink-0' />
              <a 
                href="tel:2095550104" 
                className='text-white text-sm sm:text-base lg:text-lg font-saira hover:text-gray-200 transition-colors break-all sm:break-normal'
              >
                (209) 555-0104
              </a>
            </div>

            {/* Email */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <MdEmail className='text-white text-lg sm:text-xl flex-shrink-0' />
              <a 
                href="mailto:michelle.rivera@example.com" 
                className='text-white text-sm sm:text-base lg:text-lg font-saira hover:text-gray-200 transition-colors break-all sm:break-normal'
              >
                michelle.rivera@example.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className='flex items-start gap-2 sm:gap-3'>
            <MdLocationOn className='text-white text-lg sm:text-xl mt-1 flex-shrink-0' />
            <p className='text-white text-sm sm:text-base lg:text-lg font-saira leading-6 sm:leading-7'>
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className='border-t border-white/20 my-6 sm:my-8 lg:my-10'></div>

    {/* Copyright & Social Icons */}
    <div className='flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pb-6 sm:pb-8 lg:pb-10'>
      <p className='text-white text-sm sm:text-base font-saira text-center md:text-left'>
        Copyright 2023 | All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className='flex items-center gap-4 sm:gap-5 lg:gap-6'>
        <a 
          href="#facebook" 
          className='text-white hover:text-gray-200 hover:scale-110 transition-all duration-200'
          aria-label="Facebook"
        >
          <FaFacebookF className='text-lg sm:text-xl' />
        </a>
        <a 
          href="#twitter" 
          className='text-white hover:text-gray-200 hover:scale-110 transition-all duration-200'
          aria-label="Twitter"
        >
          <FaTwitter className='text-lg sm:text-xl' />
        </a>
        <a 
          href="#instagram" 
          className='text-white hover:text-gray-200 hover:scale-110 transition-all duration-200'
          aria-label="Instagram"
        >
          <FaInstagram className='text-lg sm:text-xl' />
        </a>
        <a 
          href="#behance" 
          className='text-white hover:text-gray-200 hover:scale-110 transition-all duration-200'
          aria-label="Behance"
        >
          <FaBehance className='text-lg sm:text-xl' />
        </a>
        <a 
          href="#dribbble" 
          className='text-white hover:text-gray-200 hover:scale-110 transition-all duration-200'
          aria-label="Dribbble"
        >
          <FaDribbble className='text-lg sm:text-xl' />
        </a>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer