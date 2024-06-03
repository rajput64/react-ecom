import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/ProductContext';
import styled from 'styled-components';
import PageNavigation from './Singlepage/PageNavigation';
import MyImage from './Singlepage/MyImage';
import FormatPrice from '../Helpers/FormatPrice';
import Stars from './Singlepage/Stars';
import AddToCart from './AddToCart';


export default function SingleProduct() {

  const {getSingleProduct,isSingleLoading, singleproduct}=useProductContext();

  //console.log(singleproduct)
  const API = "https://api.pujakaitem.com/api/products";
  const {id} = useParams();
  //console.log(id);
  const {ia:alias,name,image,stock,company,price,category,stocks,description,stars,reviews} = singleproduct;
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);
  },[])

  const Wrapper = styled.section`
  
  `;
  if(isSingleLoading){
    return <div>....loading</div>
  }
  return (
    <Wrapper>
        <PageNavigation title={name}></PageNavigation>
        
        <div className='container'>
        <div className='grid grid-two-column'>
          <div className='product_image'>
            <MyImage imgs={image}/>
          </div>
          
          <div className='product-data'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            
            <p className='product-data-price'>
              MRP:
              <del>
                <FormatPrice price={price+25000}/>
              </del>
            </p>
            <p className='product-data-real-price'>
              Deal of the day: <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">

            </div>
            <div className="product-data-info">
              <p>Available: {stock>0 ? "In Stock": "Not In Stock"}</p>
              <p>Id: {id}</p>
              <p>Brand: {company}</p>
              <hr/>

              {stock > 0 && <AddToCart product={singleproduct}/>}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
