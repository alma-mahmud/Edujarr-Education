import React from 'react';
import banner1 from '../../assets/Images/Banner/amazon.png';
import banner2 from '../../assets/Images/Banner/amd.png';
import banner3 from '../../assets/Images/Banner/cisco.png';
import banner4 from '../../assets/Images/Banner/dropcam.png';
import banner5 from '../../assets/Images/Banner/logirech.png';
import banner6 from '../../assets/Images/Banner/spotify.png';
import banner7 from '../../assets/Images/Banner/banner7.png';
import heroimg from '../../assets/Images/Banner/hero.png';
import partnerBg from '../../assets/Images/Banner/partnar.png';
import medal from '../../assets/Images/Banner/medel.png';
import { IoIosStar } from "react-icons/io";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-bl from-[#04016c] to-[#4a16bd] relative z-10 overflow-hidden pt-10 pb-0 lg:pt-0 lg:pb-0">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative">
          
          {/* Hero Left Content */}
          <div className="hero_left w-full lg:w-1/2 flex flex-col gap-y-10 lg:gap-y-16 relative z-10 text-center lg:text-left">
            <div className="hero_text text-white">
              <p className="font-semibold font-saira text-base md:text-lg uppercase mb-4 tracking-[5px]">
                Successful coaches are visionaries
              </p>
              <h1 className="font-rowdies text-4xl md:text-6xl lg:text-[70px] xl:text-[80px] leading-tight lg:leading-[1.1]">
                Good <span className="text-[#81C7A2]">coaching</span> is good teaching & nothing else.
              </h1>
            </div>

            {/* Buttons */}
            <div className="hero_c2a capitalize font-saira font-medium text-base md:text-lg flex flex-wrap justify-center lg:justify-start items-center gap-4 text-white">
              <a href="#" className="py-4 px-8 border border-white rounded-lg duration-300 hover:bg-white hover:text-[#04016c]">
                View Courses
              </a>
              <a href="#" className="py-4 px-8 rounded-lg duration-300 hover:border hover:border-white">
                Get Free Consultation
              </a>
            </div>

            {/* Search Bar */}
            <div className="hero_search w-full flex justify-center lg:justify-start">
              <div className="input w-full md:w-3/4 bg-white rounded-lg py-3 md:py-4 px-6 md:px-9 shadow-md relative">
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="w-full outline-none text-gray-700 pr-24"
                />
                <button className="absolute w-28 md:w-1/3 top-1/2 right-1 -translate-y-1/2 text-white flex justify-center items-center gap-2 bg-gradient-to-br from-[#3023b2] to-[#7f56d9] py-2 md:py-3 rounded-lg text-sm md:text-base">
                  <span className="hidden md:inline font-inter font-semibold">Search</span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            {/* Testimonial (Ronald Richards) */}
            <div className="hero_review hidden xl:flex absolute w-80 left-full top-0 translate-y-1/3 items-center z-10 gap-6 ml-10">
              <div className="icon flex flex-col items-center gap-3 text-[#81C7A2]">
                <div className="w-px h-12 bg-current"></div>
                <div className="round text-[10px] p-2 rounded-full bg-[#81C7A2] text-white">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="w-px h-12 bg-current"></div>
              </div>
              <div className="main flex flex-col gap-y-2 text-white text-left">
                <p className="title font-rowdies text-lg">Ronald Richards</p>
                <h2 className="description font-saira text-sm opacity-90 leading-6">
                  In a coaching role, you ask the questions and rely more on your 
                  staff, who become the experts, to provide the information.
                </h2>
                <div className="rating text-[#81C7A2] flex items-center gap-2">
                  <span className="font-inter font-bold text-xs">4.9</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <IoIosStar key={index} className="text-[12px] text-[#81C7A2]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Image */}
          <div className="hero_right w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end relative z-10">
            <div className="w-4/5 lg:w-3/4 overflow-visible rounded-b-full">
              <img src={heroimg} alt="hero image" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* আর্চ ফ্রেম ইমেজ (banner7) - শুধুমাত্র LG ডিভাইসে দেখা যাবে */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-15 z-30 pointer-events-none opacity-50">
            <img src={banner7} alt="frame" className="max-w-none lg:w-25 xl:w-70" />
          </div>
        </div>

        {/* Decorative Blurs */}
        <div className="hidden md:block hero_blur_right w-64 h-64 bg-[#005fff] rounded-full blur-[150px] absolute top-1/2 right-0 -translate-y-1/2 z-0 opacity-50"></div>
        <div className="hidden md:block hero_blur_left w-48 h-48 bg-[#81c7a230] rounded-full blur-xl absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-0"></div>
      </section>

      {/* Partners Section */}
      <section className="partner relative z-20 py-11 lg:py-24 overflow-hidden">
  
          {/* ব্যাকগ্রাউন্ড ইমেজ লেয়ার */}
          <div className="absolute inset-0 -z-10">
            <img 
              src={partnerBg} 
              alt="background" 
              className="w-full h-full object-cover"
            />
            {/* ইমেজের ওপর নীলচে আবছা ভাব (Overlay) দেওয়ার জন্য নিচের div টি */}
            <div className="absolute inset-0 bg-[#084fc7]/80 mix-blend-multiply"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-32">
              <img className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition duration-300" src={banner1} alt="amazon" />
              <img className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition duration-300" src={banner2} alt="amd" />
              <img className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition duration-300" src={banner3} alt="cisco" />
              <img className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition duration-300" src={banner4} alt="dropcam" />
              <img className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition duration-300" src={banner5} alt="logitech" />
              <img className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition duration-300" src={banner6} alt="spotify" />
            </div>
          </div>
    </section>
    </>
  );
};

export default Banner;