import React from 'react'
import Navber from './components/Navber/Navber'
import Banner from './components/Banner/Banner'
import FeaturedCourse from './components/FeaturedCourse/FeaturedCourse'
import OurCourses from './components/OurCourses/OurCourses'
import TopCategories from './components/TopCategories/TopCategories'
import OneFactor from './components/OneFactor/OneFactor'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <FeaturedCourse></FeaturedCourse>
    <OurCourses></OurCourses>
    <TopCategories></TopCategories>
    <OneFactor></OneFactor>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default App