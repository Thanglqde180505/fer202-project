import React from 'react'
import Hero from '../components/Hero'
import ProductFeature from '../components/Product/ProductFeature'
import ProductGroup from '../components/Product/ProductGroup'
import ProductFeatureMan from '../components/ProductFeatureMan'
import SystemStore from '../components/SystemStore'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductFeature/>
      <ProductFeatureMan />
      <ProductGroup />
      <SystemStore />
    </>
  )
}

export default Home
