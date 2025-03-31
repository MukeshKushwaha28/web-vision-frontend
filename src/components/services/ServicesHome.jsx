import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesSection from './ServicesSection'
import TabsUI from './TabsUI'
import FAQSection from './FAQSection'
import TestimonialCarousel from '../Home/testimonials'
export const ServicesHome = () => {
  return (
    <div>
        <ServicesHero/>
        <ServicesSection/>
        <TabsUI/>
        <TestimonialCarousel/>
        <FAQSection/>
    </div>
  )
}
