import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import Impact from '@/components/home-page/Impact'
import Principles from '@/components/home-page/Principles'
import DonateCTA from '@/components/home-page/DonateCTA'
import GetInvolved from '@/components/home-page/GetInvolved'
import ContactStrip from '@/components/home-page/ContactStrip'

const HomePage = () => {
  return (
    <main id="main">
      <Hero />
      <Mission />
      <Impact />
      <Principles />
      <DonateCTA />
      <GetInvolved />
      <ContactStrip />
    </main>
  )
}

export default HomePage
