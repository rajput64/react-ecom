import React from 'react'
import styled from 'styled-components';

export default function Contact() {
  const Wrapper = styled.section`

    .contact-inputs{
      display:flex;
      flex-direction:column;
      gap: 1.5rem;
      width:30rem;
      margin:auto;
      
      input[type='submit']{
        cursor:pointer;
        background-color:#6089bd;
        border:none;
        width:15rem;
        height:2rem;
        font-size:1.2rem;
        border-radius: 4px;
      }
    }
  `;


  return (
    <Wrapper>
      <h1>Contact Page</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9628.011125794508!2d77.18655788631402!3d28.5769272846878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce28041e265eb%3A0xc243cd66d586a451!2sSarojini%20Nagar%20Market%2C%20Sarojini%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110023!5e0!3m2!1sen!2sin!4v1675505109727!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
      <div className='container'>
        <div className='contact-form'>
          <form action="" method="post" className='contact-inputs'>
            <input type="text" 
              placeholder='Enter username'
              name='username'
              required
              autoComplete='off'
             
            />

            <input type='email'
              placeholder="Enter your email"
              required
              
            />
            <textarea name="message"
              cols="30"
              rows="10"
              required
              autoComplete='off'
              placeholder='Enter message'
              />
              <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
