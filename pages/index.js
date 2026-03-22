import Computer from '@/src/components/computer/Computer'
import ElectronicsSection from '@/src/components/electronics/ElectronicsSection'
import MainLayout from '@/src/components/heroSection/MainLayout'
import HotDealsSection from '@/src/components/hotDeals/HotDealsSection'
import MobileAndTablets from '@/src/components/mobileAndTablets/MobileAndTablets'
import NewsBestSellerTestimonial from '@/src/components/newsBestSellerTestimonial/NewsBestSellerTestimonial'

import Footer from '@/src/components/reusable/Footer'
import Header from '@/src/components/reusable/Header'

import React from 'react'

const index = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <Header />
      <MainLayout/>
      <HotDealsSection/>
      <ElectronicsSection/>
      <MobileAndTablets/>
      <Computer/>
      <NewsBestSellerTestimonial/>
      <Footer/>
    


    </div>
  )
}

export default index