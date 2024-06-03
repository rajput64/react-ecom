import React from 'react'
import styled from 'styled-components'


export default function Trusted() {
const Wrapper =styled.section`
      background-color: #dce4f4;
      margin-top: 5rem;
      height:6rem;
      display:flex;
        align-items:center;
        

      .container{
       
        h3{
        font-size:1.5rem;
        color: ${({theme})=>theme.colors.icon};
        }
      }
`;


  return (
    <Wrapper className='brand-section'>
      <div className='container'>
        <h3>Trusted By 1000+ Companies</h3>
        <div className='brand-section-slider'>
          
          <div className='slide'>

          </div>
          
        </div>
      </div>
      
    </Wrapper>
  )
}
