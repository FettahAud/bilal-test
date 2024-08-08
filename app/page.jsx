'use client'

import Header from './components/header'
import Hero from './components/hero'
import Clients from './components/clients'
import ThreeDSection from './components/threeDSection'
import CardsSection from './components/cardsSection'
import SocialSection from './components/socialSection'
import Footer from './components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <ThreeDSection />
      <CardsSection />
      <SocialSection />
      <Footer />
    </>
  )
}
