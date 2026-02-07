import React from 'react'
import banner from '../../assets/Images/OurCourse/banner7.png'
import icon1 from '../../assets/Images/OurCourse/Icon1.png'
import icon2 from '../../assets/Images/OurCourse/Icon2.png'
import icon3 from '../../assets/Images/OurCourse/Icon3.png'

function OurCourses() {
  const courses = [
    {
      id: 1,
      icon: icon1,
      title: '01. Learn',
      description: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'
    },
    {
      id: 2,
      icon: icon2,
      title: '02. Graduate',
      description: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'
    },
    {
      id: 3,
      icon: icon3,
      title: '03. Work',
      description: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'
    }
  ]

  return (
    <>
      <section className='bg-linear-to-br  from-[#084FC7] to-[#7F56D9] pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-36 relative overflow-hidden'>
        <img className=' rotate-90 absolute left-[-100px] ' src={banner} alt="" />
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Section */}
          <div className='flex flex-col justify-center items-center pb-12 sm:pb-16 md:pb-20'>
            <h3 className='text-3xl sm:text-4xl md:text-[45px] text-white font-rowdies font-bold leading-tight sm:leading-14 md:leading-15 text-center pb-4 sm:pb-6 md:pb-7 px-4'>
              Why <span className='text-[#4BE5CA]'>learn</span> with our courses?
            </h3>
            <p className='text-base sm:text-lg md:text-xl lg:text-[25px] text-white/90 leading-relaxed sm:leading-7 md:leading-8 lg:leading-8.75 font-normal font-saira text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...
            </p>
          </div>

          {/* Courses Grid */}
          <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 sm:gap-10 md:gap-12 lg:gap-8 max-w-7xl mx-auto'>
            {courses.map((course, index) => (
              <React.Fragment key={course.id}>
                {/* Course Card */}
                <div className='flex flex-col items-center text-center w-full sm:max-w-sm md:max-w-md lg:max-w-[341.75px] px-4 lg:px-0'>
                  <div className='mb-4 sm:mb-5 md:mb-6'>
                    <img 
                      src={course.icon} 
                      alt={`${course.title} icon`} 
                      className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-auto lg:h-auto object-contain' 
                    />
                  </div>
                  <h3 className='text-white text-xl sm:text-2xl md:text-[25px] font-bold leading-7 sm:leading-8 font-rowdies mb-2 sm:mb-3'>
                    {course.title}
                  </h3>
                  <p className='text-white/90 text-sm sm:text-base md:text-lg lg:text-[18px] font-normal leading-6 sm:leading-6.75 font-saira'>
                    {course.description}
                  </p>
                </div>

                {/* Dashed Line (not after last item, only on large screens) */}
                {index < courses.length - 1 && (
                  <div 
                    className='hidden lg:block w-0.5 h-60.5 shrink-0' 
                    style={{
                      background: `repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0px, rgba(255, 255, 255, 0.6) 4px, transparent 4px, transparent 8px)`
                    }}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCourses