import React from 'react'
import styled from 'styled-components';
import { useProductContext } from '../../Context/ProductContext'
//import loading from '../../img/loading.gif'
import FProduct from './FProduct';

export default function FeaturedProduct() {
    const {isLoading, featuredProducts} =useProductContext();
    console.log(featuredProducts,"featured")
    if(isLoading){
        return <div>..loading</div>
        //<img src={loading} alt="loading"/> 
    }

    const Wrapper = styled.section`
    .container{
        margin-top: 5rem;
        .intro-data{
            h2{
            font-size:2rem;
        }
        .common-heading{
          color:red;
        }
      }
    }
     figure{
      position:relative;
      img{
        width: 18rem;
        height: 10em;
        transition: all 0.3s ease;
        
        &:hover{
          opacity:0.8;
          transform: scale(1.03,1.03);
          background-color:black;
        }
      }
     }
     .grid{

        display:flex;
        justify-content:space-between;
        .text-decor{
          text-decoration:none;
        }
          .caption{
            position:absolute;
            top:10%;
            right:10%;
            background-color:white;
            border-radius:10px;
            padding: 4px 8px;
            color:black;
            font-size:1.2rem;
            font-weight:bold;        
      }
      .card-data{
        color: black;

      }
     }
    
    `;


  return (
    <Wrapper>
      <div className='container'>
        <div className='intro-data'>
          <h2>Check Now!</h2>
        </div>
        <div className='common-heading'>
          Our Featured Products
        </div>
        <div className='grid grid-three-column'>
          {
            featuredProducts.map((curele)=>{
              return  <FProduct key={curele.id} {...curele}/>;
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}
