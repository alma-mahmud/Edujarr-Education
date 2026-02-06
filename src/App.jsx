import React from 'react'
import Navber from './components/Navber/Navber'
import Banner from './components/Banner/Banner'
import FeaturedCourse from './components/FeaturedCourse/FeaturedCourse'
import OurCourses from './components/ourCourses/ourCourses'
import TopCategories from './components/TopCategories/TopCategories'
import OneFactor from './components/OneFactor/OneFactor'

function App() {
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <FeaturedCourse></FeaturedCourse>
    <OurCourses></OurCourses>
    <TopCategories></TopCategories>
    <OneFactor></OneFactor>
    </>
  )
}

export default App