import React, { useState } from 'react'
import Factor from '../../assets/Images/One-Factor/factor.png'
import factorBottom from '../../assets/Images/One-Factor/onefactor.png'
import factorRight from '../../assets/Images/One-Factor/onefactor1.png'
import factormedal from '../../assets/Images/One-Factor/onefactor2.png'

function OneFactor() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section className='py-16 lg:py-32.5 max-w-392.5 mx-auto px-6 lg:px-4 relative overflow-hidden'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-32.5 items-center'>
          
          {/* Image wrapper */}
          <div className='w-full max-w-75 md:max-w-100 lg:w-100 shrink-0'> 
              <img src={Factor} alt="Factor" className='w-full h-auto object-contain' />
          </div>
          
          {/* Content wrapper */}
          <div className='max-w-full lg:max-w-193.75 text-center lg:text-left'>
              <h3 className='text-[#1D1D45] text-3xl md:text-4xl lg:text-[45px] font-rowdies font-bold leading-tight lg:leading-15 mb-6'>
                  The number one factor in <span className='text-[#2AAA94]'>relevance drives out resistance.</span>
              </h3>
              <p className='mb-8 text-base md:text-lg text-[#4E596B] leading-relaxed lg:leading-7 font-saira'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="signup py-3 px-6 lg:py-4 lg:px-7.5 font-saira bg-gradient-to-br from-[#083f9b] to-[#7f56d9] text-white rounded-lg hover:opacity-90 transition-opacity">
                  Learn More
              </button>
          </div>

          {/* Real rounded triangle - Optimized positioning */}
          <div className='absolute -bottom-10 -right-10 lg:bottom-3 lg:right-50 -z-50 opacity-0 lg:opacity-100'>
              <svg width="119" height="119" viewBox="0 0 119 119">
                  <defs>
                      <filter id="round">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="rounded" />
                          <feComposite in="SourceGraphic" in2="rounded" operator="atop"/>
                      </filter>
                  </defs>
                  <path 
                      d="M59.325 20 L100 95 L18.65 95 Z" 
                      fill="#BFE3C6"
                      stroke="#BFE3C6"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      filter="url(#round)"
                      transform="rotate(-137.71, 59.325, 59.325)"
                  />
              </svg>
          </div>
        </div>
      </section>
    <section className='pb-10 sm:pb-16 lg:pb-20'>
          <div className='px-4 sm:px-6 lg:px-0'>
            <div className='relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
              <img src={factorBottom} className='w-full' alt="" />
              
              {/* Medal click e video open hobe */}
              <img 
                src={factormedal} 
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32' 
                alt="Play Video"
                onClick={() => setShowVideo(true)}
              />
              
              {/* factorRight image - factorBottom er bottom-right corner e */}
              <img 
                src={factorRight} 
                className='hidden lg:block absolute bottom-0 right-0 w-48 xl:w-56' 
                alt="" 
              />
            </div>
          </div>
      </section>

{/* Video Modal */}
{showVideo && (
  <div 
    className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4'
    onClick={() => setShowVideo(false)}
  >
    <div 
      className='relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button 
        className='absolute -top-8 sm:-top-10 md:-top-12 right-0 text-white text-2xl sm:text-3xl md:text-4xl font-bold hover:text-red-500 transition-colors'
        onClick={() => setShowVideo(false)}
      >
        ✕
      </button>
      
      {/* YouTube Video */}
      <div className='relative pb-[56.25%] rounded-lg overflow-hidden'>
        <iframe 
          className='absolute top-0 left-0 w-full h-full shadow-2xl'
          src="https://www.youtube.com/embed/xnNmEe5QHq4?si=tE6G69-ghIQMng1R&autoplay=1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>
    </div>
  </div>
)}
    </>
  )
}

export default OneFactor