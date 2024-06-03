import React, { useState } from 'react'
import styled from 'styled-components'

export default function MyImage({imgs = [{url:""}]}) {
  const[mainImage,setMainImage] = useState(imgs[0]);
  const Wrapper = styled.section`
  display:flex
  fles-direction:row;
  align-items:center;
  gap:10px;
    figure{
      img{
        width:10rem;
      }
    }
    .main-screen{
      img{
        width:20rem;
      }
    }
  `;
  return (
    <Wrapper>
      <div>{
          imgs.map((ele,index)=>{
            return(
              <figure>
                <img src={ele.url} alt={ele.filename} key={index}
                  onMouseOver={()=> setMainImage(ele)}
                />
              
              </figure>
            )
          })
        }
      </div>
      <div className='main-screen'>
        <img src={mainImage.url} alt={imgs[0].filename}/>
      </div>
    </Wrapper>
  )
}
