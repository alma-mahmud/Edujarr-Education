import React from 'react'
import DigtalMarketing from '../../assets/Images/Top-Categories/categories1.png'
import WebDevelopment from '../../assets/Images/Top-Categories/categories2.png'
import ArtHumanities from '../../assets/Images/Top-Categories/categories3.png'
import PersonalDevelopment from '../../assets/Images/Top-Categories/categories4.png'
import ITSoftware from '../../assets/Images/Top-Categories/categories5.png'
import GraphicDesign from '../../assets/Images/Top-Categories/categories6.png'

function TopCategories() {
  const categories = [
    {
      id: 1,
      title: 'Digital Marketing',
      courses: 25,
      icon: DigtalMarketing,
    },
    {
      id: 2,
      title: 'Web Development',
      courses: 16,
      icon: WebDevelopment,
    },
    {
      id: 3,
      title: 'Art & Humanities',
      courses: 76,
      icon: ArtHumanities,
    },
    {
      id: 4,
      title: 'Personal Development',
      courses: 22,
      icon: PersonalDevelopment,
    },
    {
      id: 5,
      title: 'IT and Software',
      courses: 110,
      icon: ITSoftware,
    },
    {
      id: 6,
      title: 'Graphic Design',
      courses: 85,
      icon: GraphicDesign,
    },
  ];

  return (
    <>
      <section className='bg-gradient-to-br from-[#D9ECFF] from-0% to-[#7F56D9] pt-20'>
        <div className='text-center'>
          <h3 className='text-3xl sm:text-4xl md:text-[45px] text-[#323232] font-rowdies font-bold leading-7.5 sm:leading-14 md:leading-15 text-center pb-4 sm:pb-6 md:pb-7 px-4'>
            Top <span className='text-[#2AAA94]'>Categories</span>
          </h3>
          <p className='text-[#4E596B] text-[25px] font-saira font-medium leading-6.75 pb-20'>
            12,000+ unique online course list designs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-6 pb-6">
                {
                categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-white rounded-[20px] pt-[37px] px-[30px] pb-[47px] hover:scale-105 transition-transform duration-300 text-center"
                    style={{
                      filter: 'drop-shadow(5px 4px 4px rgba(217, 236, 255, 0.5))',
                    }}>
                    <div className="mb-4">
                      <img src={category.icon} alt={category.title} className="w-12 h-12 mx-auto object-cover" />
                    </div>
                    <h3 className="text-[25px] text-[#324361] font-saira font-semibold leading-[35px] mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm">{category.courses} Courses</p>
                  </div>
                ))
              }
          </div>
      </section>
    </>
  )
}

export default TopCategories