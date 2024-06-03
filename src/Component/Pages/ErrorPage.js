import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Style/Button';

export default function ErrorPage() {

  const Wrapper = styled.section`
      .container{
        padding:2.2rem 0;
        text-align:center;
        h2{
          font-size:2.5rem;
        }
      }
  `;

  return (
    <Wrapper>
      <div className='container'>
        <h2>404</h2>
        <h2>Not Found!</h2>
        <p>
          The page you are looking for does not found.
          Click on button to back to homepage.
        </p>
       <NavLink to="/"> <Button>Go Back to Home</Button></NavLink>
      </div>
    </Wrapper>
  )
}
