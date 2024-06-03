import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddToCart({product}) {
  const{id,colors,stock} = product
  const [color,setColor] = useState(colors[0]);
  const Wrapper = styled.section`
  
  `;
    return (
    <Wrapper>
        <p>
            Colors: 
            {colors.map((curColor,index)=>{
                return <button key={index} style={{backgroundColor: curColor}}
                className={color === curColor ? "btnStyle active":"btnStyle"}>
                    
                    {curColor}</button>
            })
            }
        </p>
    </Wrapper>
  )
}
