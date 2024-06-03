import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
const new={
   colors:{
       icon: "6f71dd",
   }
}

   *{
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.05rem;
   }
   .container{
      
      max-width: 60rem;
      margin: 1rem auto;
   }
   .grid{
      display: grid;
      gap: 3rem;
   }
   .grid-two-column{
      grid-template-columns: repeat(2, 1fr);

      
      .hero-section-data{
         
      }
   }
   .grid-three-column{
      grid-template-columns: repeat(3, 1fr);
      gap:1rem;
   }
   .grid-four-column
   {
      grid-template-columns: repeat(4, 1fr);
      gap:1.5rem;
   }
`;
