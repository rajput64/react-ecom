import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function PageNavigation({title}) {
const Wrapper = styled.section`

`;
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  )
}
