import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { GiPayMoney } from 'react-icons/gi';
import { FaShieldAlt } from 'react-icons/fa';

export default function Services() {
    const Wrapper = styled.section`
    .service-margin{
        margin-top:5rem;
    }
        .services-1,
        .services-3,
        .services-col-1,
        .services-col-2{
            background-color:#dce4f4;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items:center;
            text-align:center;
            transition: all 0.3s ease;


            &:hover{
                background-color:#839bb9;
                color: whitesmoke; 
                .icon{
                    color:white;
                }
            }

            .icon{
                color: ${({theme})=> theme.colors.icon};
                height: 2.2rem;
                width: 2.2rem;
                text-align:center;
            }
        }

        .services-1,
        .services-3{
            height:9rem;
        }
        .services-2{
            height:9rem;
            display:flex;
            flex-direction: column;
            gap: 0.9rem;
        }
        .services-col-1,
        .services-col-2{
            height: 15rem;
        }
    `;

  return (
    <Wrapper>
        <div className='container service-margin'>
            <div className='grid grid-three-column'>
                <div className='services-1'>
                    <div>
                        <TbTruckDelivery className="icon"/>
                        <h3>Super Fast Delivery</h3>
                    </div>
                </div>
                <div className='services-2'>
                    <div className='services-col-1'>
                        <FaShieldAlt className="icon"/>
                        <h3>Non-Contact Shipping</h3>
                    </div>
                    <div className='services-col-2'>
                        <GiPayMoney className="icon"/>
                        <h3>Money Back Guaranteed</h3>
                    </div>
                </div>
                <div className='services-3'>
                    <div>
                        <RiSecurePaymentLine className="icon"/>
                        <h3>Super Secured Payment</h3>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
