import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import footerLogo from '../../assets/Images/Main-logo/footer.png'

function Footer() {
  return (
    <>
    <footer className='bg-linear-to-b from-[#331DA8] to-[#865AEF] pt-25 px-5'>
         <div className='max-w-[1624px] mx-auto px-4'>
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-[140px] justify-between'>
      {/* Logo & Description */}
      <div className="max-w-[477px]">
        <img src={footerLogo} alt="Edujarr Logo" className='mb-7' />
        <p className='text-white text-lg font-saira leading-7'>
          Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Quick Links */}
<div className="min-w-[205px]">
  <h3 className='text-white text-2xl font-rowdies font-bold mb-8'>Quick Links</h3>
  <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
    <a href="#about" className='text-white text-lg font-saira hover:text-gray-200 transition-colors'>
      About
    </a>
    <a href="#blog" className='text-white text-lg font-saira hover:text-gray-200 transition-colors'>
      Blog
    </a>
    <a href="#course" className='text-white text-lg font-saira hover:text-gray-200 transition-colors'>
      Course
    </a>
    <a href="#contact" className='text-white text-lg font-saira hover:text-gray-200 transition-colors'>
      Contact
    </a>
  </div>
</div>



      {/* Contact Us */}
      {/* Contact Us */}
<div className="min-w-[389px]">
  <h3 className='text-white text-2xl font-rowdies font-bold mb-8'>Contact us</h3>
  <div className='space-y-5'>
    {/* Phone & Email in same line */}
    <div className='flex items-center gap-8'>
      {/* Phone */}
      <div className='flex items-center gap-3'>
        <IoCall className='text-white text-xl' />
        <a href="tel:2095550104" className='text-white text-lg font-saira hover:text-gray-200 transition-colors'>
          (209) 555-0104
        </a>
      </div>

      {/* Email */}
      <div className='flex items-center gap-3'>
        <MdEmail className='text-white text-xl' />
        <a href="mailto:michelle.rivera@example.com" className='text-white text-lg font-saira hover:text-gray-200 transition-colors'>
          michelle.rivera@example.com
        </a>
      </div>
    </div>

    {/* Address in next line */}
    <div className='flex items-start gap-3'>
      <MdLocationOn className='text-white text-xl mt-1' />
      <p className='text-white text-lg font-saira leading-7'>
        2715 Ash Dr. San Jose, South Dakota 83475
      </p>
    </div>
  </div>
</div>
    </div>

    {/* Divider */}
    <div className='border-t border-white/20 my-10'></div>

    {/* Copyright & Social Icons */}
    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
      <p className='text-white text-base font-saira'>
        Copyright 2023 | All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className='flex items-center gap-6'>
        <a 
          href="#facebook" 
          className='text-white hover:text-gray-200 transition-colors'
          aria-label="Facebook"
        >
          <FaFacebookF className='text-xl' />
        </a>
        <a 
          href="#twitter" 
          className='text-white hover:text-gray-200 transition-colors'
          aria-label="Twitter"
        >
          <FaTwitter className='text-xl' />
        </a>
        <a 
          href="#instagram" 
          className='text-white hover:text-gray-200 transition-colors'
          aria-label="Instagram"
        >
          <FaInstagram className='text-xl' />
        </a>
        <a 
          href="#behance" 
          className='text-white hover:text-gray-200 transition-colors'
          aria-label="Behance"
        >
          <FaBehance className='text-xl' />
        </a>
        <a 
          href="#dribbble" 
          className='text-white hover:text-gray-200 transition-colors'
          aria-label="Dribbble"
        >
          <FaDribbble className='text-xl' />
        </a>
      </div>
    </div>
  </div>
    </footer>
    </>
  )
}

export default Footer