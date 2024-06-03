import React from 'react'
import FeaturedProduct from './FeaturedProduct';

import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
export default function Home() {
  
const data= {
  name: "My store",
};

  return (
    <>
    <HeroSection data={data.name}/>
    <FeaturedProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
}
