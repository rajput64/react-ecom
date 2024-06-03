import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from "../Style/Button"
export default function HeroSection({data}) {

    const Wrapper = styled.section`
        
                img{
                    min-width:25rem;
                    height: 20rem;
                }
                .grid{
                    margin-top:3rem;
                }
                .hero-section-data{
                    margin-top:3rem;
                    width: 100%;
                    h1{
                        font-size: 2.2rem;
                        font-weight:900;
                    }
                    p{
                        font-weight:550;
                        font-size: 1.2rem;
                    }
                    button{

                    }
                }
      
    `;
   
 

  return (
    <Wrapper>
    <div className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to</p>
                <h1>{data}</h1>
                <p>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts.</p>
                <NavLink to="/" >
                    <Button>Shop Now</Button>
                </NavLink>
            </div>
            <div className='hero-section-image'>
                <figure>
                    <img src="https://www.wallpapers4u.org/wp-content/uploads/shop_shopping_people_stock_57077_1920x1080.jpg" alt="hero-section-image"/>
                </figure> 
            </div>
        </div>
      </div>
    </Wrapper>
      
    
  )
}
