import React from 'react'
import DigtalMarketing from '../../assets/Images/Top-Categories/categories1.png'
import WebDevelopment from '../../assets/Images/Top-Categories/categories2.png'
import ArtHumanities from '../../assets/Images/Top-Categories/categories3.png'
import PersonalDevelopment from '../../assets/Images/Top-Categories/categories4.png'
import ITSoftware from '../../assets/Images/Top-Categories/categories5.png'
import GraphicDesign from '../../assets/Images/Top-Categories/categories6.png'

function TopCategories() {
  return (
    <>
    <section className='bg-linear-to-br from-[#D9ECFF] from-0% to-[#7F56D9] pt-20'>
        <div className='text-center'>
            <h3 className='text-3xl sm:text-4xl md:text-[45px] text-[#323232] font-rowdies font-bold leading-7.5 sm:leading-14 md:leading-15 text-center pb-4 sm:pb-6 md:pb-7 px-4'>Top <span className='text-[#2AAA94]'>Categories</span></h3>
            <p className='text-[#4E596B] text-[25px] font-saira font-medium leading-6.75 pb-20'>12,000+ unique online course list designs</p>
        </div>
        <div></div>
    </section>
    </>
  )
}

export default TopCategories