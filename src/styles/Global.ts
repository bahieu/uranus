import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`

${normalize}
 * {
     margin: 0;
     padding: 0;  
    } 
    
    body { 
    font-family: 'Poppins', sans-serif; 
    background-color: #F5F5F7;
   
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
`;

export default GlobalStyles;
