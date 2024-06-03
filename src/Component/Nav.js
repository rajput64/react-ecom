import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsCartFill } from "react-icons/bs";
import { VscMenu, VscClose } from "react-icons/vsc";


export default function Nav() {
    const [menuIcon, setMenuIcon]= useState();

    const Nav = styled.nav`

        .navbar-list{
            display: flex;
            gap: 2.8rem;
            align-items: center;
            
            li{
                list-style-type: none;
            }
           
        }
        .links{
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: 500;
            padding: 10px 15px;

            &:hover{
                color: #cc9e47;
            }
            
            .cart{
                pointer-events: none;
            }
            .cart-total{
                position: absolute;
                top: 5px;
                right: 22px;
                background-color: #cc9e47;
                border-radius: 50%;
                display: grid;
                place-items:center;
                width:20px;
                height: 20px;
                font-size: 1rem;
                font-weight:620;
                color: ${({theme})=> theme.colors.bg};
                
            }
        }

        .mobile{
            cursor: pointer;
            display: none;
            
            .open{
                width: 50px;
                height:25px;
            }
            .close{
                {
                    width: 50px;
                    height:25px;
                }
            }
        }
        
        


        @media (max-width: ${({theme})=> theme.media.mobile}){
            .mobile{
                display: block;
                z-index:9999;

                .close{
                    display: none;
                }
            }
            
            .active .mobile{
                top:0;
                right:0;
                z-index: 9999;

                .open{
                    display: none;
                }
                .close{
                    position:absolute;
                    top:11px;
                    right:20px;
                    z-index: 9999;
                    display: block;
                }
            }


            
           

            .navbar-list{
                width: 100vw;
                height: 100vh;
                position: absolute;
                top:0;
                left:0;
                background: #fff;

                display: flex;
                justify-content: center;
                align-items:center;
                flex-direction:column;

                visibility: hidden;
                opacity:0;
                transform: translateX(100%);

                transition: all 0.1s linear;

                .cart-total{
                    top: 65%;
                    right: 46%;
                }
            }
            .active .navbar-list{
                visibility: visible;
                opacity:1;
                transform: translateX(0);
                z-index: 9;
                
                
                transition: all 0.3s linear;
            }

            
            
        }
    `;

  return (
    <div>
      <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-list'>
                <li>
                <NavLink to="/" className="links">Home</NavLink>
                </li> 
                <li>
                <NavLink to="/about" className="links aaa">About</NavLink>
                </li>
                <li>
                <NavLink to="/products" className="links">Product</NavLink>
                </li>
                <li>
                <NavLink to="/contact" className="links">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="links">
                        <BsCartFill className="cart"/>
                        <span className='cart-total'>10</span>
                    </NavLink>
                </li>
            </ul>


            {/*button for resposive mobile menu */}
            <div className="mobile">
                <VscMenu name="open" onClick={()=> setMenuIcon(true)} className="mobile-menu open"/>
                <VscClose name="close" onClick={()=>setMenuIcon(false)} className="mobile-menu close"/>
            </div>
        </div>
      </Nav>
    </div>
  )
}
