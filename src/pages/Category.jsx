import React from 'react'
import CategoryCards from '../components/CategoryCards'
import ServiceCards from '../components/ServiceCards'
import CategoryHero from '../components/Category/CategoryHero'
import HowItWorks from '../components/Category/HowItWorks'
import ProgrammingCategories from '../components/Category/ProgrammingCategories'
import CTABanner from '../components/CTABanner'
import GuidesSection from '../components/Category/GuidesSection'
import CategoriesSection from '../components/Category/CategoriesSection'

export default function Category() {
  return (
    <>

      {/* Hero Section start*/}

      <CategoryHero />

      {/* Category card Section */}

      <CategoryCards />

      {/* Service card Section */}

      <ServiceCards />

      {/* Service card Section */}

      <HowItWorks />

      {/* Service card Section */}

      <ProgrammingCategories />
     
      {/* GuidesSection Section */}
      <GuidesSection />

      {/* ctabanner Section */}
      <CTABanner />

      {/* ctabanner Section */}
      <CategoriesSection />

      
    </>
  )
}
