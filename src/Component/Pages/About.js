import React, {useContext} from 'react'
import { AppContext } from '../../Context/ProductContext';
import HeroSection from './HeroSection'

export default function About() {

 

  const data= {
    name: "My store about page",
  };
  return (
    <>
    
      <HeroSection data={data.name}/>
    </>
  )
}
