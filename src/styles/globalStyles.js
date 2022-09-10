import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 1.6rem;
  font-family:'Poppins',sans-serif;
  line-height: 1.6;
  letter-spacing:.1rem ;


}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

  // @media screen and (max-width: $bp-large) {
  //   font-size: 50%;
  // }
}

body {
  /* font-family:'Poppins',sans-serif; */
  /* line-height: 1.6; */
   /* color: var(--clr-text); */
     /* min-height: 100vh; */
     background-color:#F1FAEE
}
`;

export default GlobalStyle;
