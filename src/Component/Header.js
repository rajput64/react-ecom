import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav'

export default function Header() {
    const MainHeader = styled.header`
            padding: 10px 20px;
            background-color: ${({theme})=> theme.colors.bg};
            justify-content: center;
            display: flex;
            justify-content: space-between;

            .logo{
              text-decoration: none;
              font-weight: 600;
              font-size: 1.3rem;
            }
    `;

  return (
    <MainHeader>
        <NavLink to="/" className="logo">
            LOGO
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
