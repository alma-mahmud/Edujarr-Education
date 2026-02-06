import React from 'react'
import Factor from '../../assets/Images/One-Factor/factor.png'

function OneFactor() {
  return (
    <>
    <section className='py-32.5 max-w-[1569px] mx-auto px-4'>
    <div className='flex gap-32.5 items-center'>
        {/* Image wrapper - Figma design অনুযায়ী width দিন */}
        <div className='flex-shrink-0 w-[400px]'> {/* আপনার Figma-র exact width দিন */}
            <img src={Factor} alt="" className='w-full h-auto' />
        </div>
        
        {/* Content wrapper */}
        <div className='max-w-[775px]'>
            <h3 className='text-[#1D1D45] text-[45px] font-rowdies font-bold leading-15 mb-6'>
                The number one factor in <span className='text-[#2AAA94]'>relevance drives out resistance.</span>
            </h3>
            <p className='mb-8 text-[18px] text-[#4E596B] leading-7 font-saira'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="signup py-5 px-9 font-saira bg-gradient-to-br from-[#083f9b] to-[#7f56d9] text-white rounded-lg">
                Learn More
            </button>
        </div>
    </div>
</section>
    </>
  )
}

export default OneFactor