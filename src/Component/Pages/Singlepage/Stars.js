import React from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';
export default function Stars({stars,reviews}) {
    //generating number from 1 to 5 and adding 0.5 in it
    const ratingstar = Array.from({length:5},(elem,index)=>{

        let number = index + 0.5
        return(
            <span key={index}>
                {
                stars >= index+1 ?<FaStar/>: stars>= number ? <FaStarHalfAlt/> : <FaRegStar/> 
            }
            </span>
        )
    });

    const Wrapper = styled.section`
    
    `;
  return (
    <Wrapper>
      <div className='icon-style'>
        {ratingstar}
        <p>{reviews} cutomer reviews</p>
      </div>
    </Wrapper>
  )
}
