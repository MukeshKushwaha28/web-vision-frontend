import React from 'react'
import { AboutHero } from '../aboutUs/AboutHero'
import { Adress } from './Adress'
import { ContactForm } from './ContactForm'
export const ContactHome = () => {
  return (
    <div>

        <AboutHero title="Contact Us"/>
        <Adress/>
        <ContactForm/>
    </div>
  )
}
