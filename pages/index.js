import Computer from '@/src/components/computer/Computer'
import ElectronicsSection from '@/src/components/electronics/ElectronicsSection'
import MainLayout from '@/src/components/heroSection/MainLayout'
import HotDealsSection from '@/src/components/hotDeals/HotDealsSection'
import MobileAndTablets from '@/src/components/mobileAndTablets/MobileAndTablets'
import NewsBestSellerTestimonial from '@/src/components/newsBestSellerTestimonial/NewsBestSellerTestimonial'


import React from 'react'

const index = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <MainLayout/>
      <HotDealsSection/>
      <ElectronicsSection/>
      <MobileAndTablets/>
      <Computer/>
      <NewsBestSellerTestimonial/>
    </div>
  )
}

export default index