import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { RiFacebookBoxFill,RiInstagramFill,RiTwitterFill } from "react-icons/ri";

export default function Footer() {
    const Wrapper = styled.section`

    margin-top:5rem;

        color:white;
        background-color:#43424f;
        
        .absolute{
            background-color: ${({theme})=> theme.colors.bg};
            color: black;
            position: absolute;
            left: 0;
            right: 0;
            height: 4rem;
            width:50rem;
            margin: -40px auto;
            border-radius: 10px;
            text-align:center;
            display:flex;
            align-items: center;
            justify-content: center;
            gap:20rem;

            .button{
                margin-top:0;
            }
            
        }
        .content{
            padding-top:3rem;

            h3{
                color: whitesmoke;
                font-size:1.2rem;
                margin-bottom: 1rem;
            }
            p{
                font-size:1rem;
                color: ${({theme})=>theme.colors.bg};
            }

            .footer-subscribe{
                input[type=email]{
                    border:none;
                    border-radius:2px;
                    padding:5px;
                    font-size:1rem;
                    margin-bottom: 0.7rem;
                }
                input[type=submit]{
                    border: none;
                    background-color: #839bb9;
                    border-radius: 5px;
                    padding: 5px 10px;
                    color:white;
                    transition: all 0.2s ease-in;

                    &:hover{
                        background-color:#3768a6;
                    }
                        
                }
            }
            .social{
                .footer-social-icon{
                    display:flex;
                    gap:0.5rem;

                    .icon{
                        color: ${({theme})=>theme.colors.bg}
                        width:1.8rem;
                        height:1.8rem;
                        transition:all 0.2s ease;

                        &:hover{
                            color: ${({theme})=>theme.colors.hover};
                        }
                    }
                }
            }

            .footer-contact{
                a{
                    text-decoration: none;
                    color: ${({theme})=>theme.colors.bg}
                    transition: all 0.3s ease;

                    &:hover{
                        color: ${({theme})=>theme.colors.hover};
                    }
                }
            }
        }

        .footer-bottom-section{
            display:flex;
            gap:2rem;
            justify-content:center;
            align-items: center;
            font-size:2rem;
            color:whitesmoke;
            background-color:black;
            height: 1.5rem;
        }
    `;

  return (
    <Wrapper>
        <footer className='contact-short'>
            <div className='container grid grid-two-column absolute'>
                <div>
                    <h3>Ready to Started!</h3>
                    <h3>Talk with us</h3>
                </div>
                    <NavLink to="/contact">
                    <Button className='button'>Get Started</Button>
                    </NavLink>
                
            </div>
            <div className='container grid grid-four-column content'>
                <div className='footer-about'>
                    <h3>My Store</h3>
                    <p>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing,</p>
                </div>
                <div className='footer-subscribe'>
                    <h3>Subscribe for Updated</h3>
                    <form action="#">
                        <input type="email" placeholder="email"/>
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
                <div className='social'>
                    <h3>Follow US</h3>
                    <div className='footer-social-icon'>
                        <div>
                            <RiFacebookBoxFill className='icon'/>
                        </div>
                        <div>
                            <a href='#' target="_blank"><RiInstagramFill className="icon"/></a>
                        </div>
                        
                        <div>
                            <a href='#' target="_blank"><RiTwitterFill className="icon"/></a>
                        </div>
                    </div>
                </div>
                <div className='footer-contact'>
                    <h3>Call us</h3>
                    <a href='tel:1234567890'>+45 12345678900</a>
                </div>
            </div>

            {/*bottom footer*/}
            <div className='footer-bottom-section'>
                <p>@ {new Date().getFullYear()} mystore .All right reserved</p>
            <div>
                <p>Privacy Policy | Terms & Condition</p>
                
            </div>
            </div>
        </footer>
    </Wrapper>
  )
}
