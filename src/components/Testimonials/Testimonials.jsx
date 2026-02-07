import React from 'react'
import testimonials1 from '../../assets/Images/Testimonials/testimonials1.png'
import testimonials2 from '../../assets/Images/Testimonials/testimonials2.png'
import testimonials3 from '../../assets/Images/Testimonials/testimonials3.png'
import testimonials4 from '../../assets/Images/Testimonials/testimonials4.png'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";


function Testimonials() {
    const testimonialsData = [
  {
    id: 1,
    image: testimonials1,
    name: "Ronald Richards",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4
  },
  {
    id: 2,
    image: testimonials2,
    name: "Wade Warren",
    text: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse",
    rating: 4
  },
  {
    id: 3,
    image: testimonials3,
    name: "Jacob Jones",
    text: "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit",
    rating: 4
  }
];
  return (
    <>
    <section className=' pb-10 px-5 lg:pb-30 bg-linear-to-b from-white to-[rgba(214,202,244,0.43)]'>
        <div>
            <div className='text-center'>
                <h3 className='text-[#2AAA94] text-[30px] lg:text-[45px] font-rowdies leading-13.75 font-bold'>Testimonials</h3>
                <p className='text-[#4E596B] text-[18px] lg:text-[25px] font-saira font-medium leading-10 pb-10 lg:pb-22.75'>What our student say about us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-[1624px] mx-auto'>
  {testimonialsData.map((testimonial, index) => (
    <div 
      key={testimonial.id} 
      className='bg-white rounded-3xl p-6 lg:p-8 w-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp'
      style={{ 
        filter: 'drop-shadow(0px 4px 35px rgba(255, 255, 255, 0.1))',
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className='flex items-center gap-4 mb-4'>
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover transition-transform duration-300 hover:scale-110'
        />
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800'>
          {testimonial.name}
        </h3>
      </div>
      
      <p className='text-gray-600 text-sm sm:text-base mb-4 leading-relaxed'>
        {testimonial.text}
      </p>
      
      <div className='flex gap-1'>
        {[...Array(5)].map((_, i) => (
          i < testimonial.rating ? (
            <IoIosStar key={i} className='text-yellow-400 text-lg sm:text-xl' />
          ) : (
            <IoIosStarOutline key={i} className='text-yellow-400 text-lg sm:text-xl' />
          )
        ))}
      </div>
    </div>
  ))}
</div>
        </div>
    </section>
    </>
  )
}

export default Testimonials