import React from 'react'
import Factor from '../../assets/Images/One-Factor/factor.png'

function OneFactor() {
  return (
    <>
      <section className='py-16 lg:py-32.5 max-w-392.5 mx-auto px-6 lg:px-4 relative overflow-hidden'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-32.5 items-center'>
          
          {/* Image wrapper */}
          <div className='w-full max-w-[300px] md:max-w-[400px] lg:w-100 shrink-0'> 
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
          <div className='absolute -bottom-10 -right-10 lg:bottom-3 lg:right-50 -z-50 opacity-50 lg:opacity-100'>
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
    </>
  )
}

export default OneFactor