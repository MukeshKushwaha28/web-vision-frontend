import React from 'react'

import AnimatedImages from './AnimatedImages'
import { AboutHero } from './AboutHero'
import { KnowUs } from './KnowUs'
import ServicesSection from '../Home/ServicesSection'
import CustomMarquee from '../Home/Marquee'
import TeamCards from '../Home/TeamCards'

export const AboutUs = () => {
  return (
    <div>



      <AboutHero title="About Us"/>
      <KnowUs />
      <ServicesSection />

      <CustomMarquee />
      <TeamCards />

    </div>
  )
}
