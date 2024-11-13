import styled from "styled-components";

import Back from "../assets/pattern-meu-sige-passagem-80.png";

import Back2 from "../assets/background.png";
import Man from "../assets/my-blue-man.png";

export const Container = styled.div`

`

export const Header = styled.header`
height: 10rem;
width: 100%;

border-bottom: 1px solid #bebebe7e;
background-color: #FFFFFF;
padding: 2rem 4rem 0;

position: fixed;
z-index: 10;
top: 0;

justify-content: space-between;
align-items: center;
display: flex;

box-sizing: border-box;

.top {
 position: absolute;
 left: 0;
 top: 0;

 width: 100%;

 justify-content: center;
 align-items: center;
 display: flex;

 background-color: #8f00fc;
 padding: .5rem;

 span {
  font-size: 1.5rem;
  font-weight: 400;
  color: #FFFFFF;
 }
}

img {
 width: 18rem;
}

.right {
 align-items: center;
 display: flex;
 gap: 2rem;

 span {
  font-size: 1.5rem;
  color: #7300cc;

  align-items: center;
  display: flex;
  gap: .5rem;

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
 }

 button {
  border-radius: 1rem 0 1rem 0;
  background-color: #8f00fc;
  padding: 1rem 2rem;
  outline: none;
  border: none;

  font-size: 1.4rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
    border-radius: 0 1rem 0 1rem;
    filter: brightness(110%);
    cursor: pointer;
  }
 }
}
`

export const Main = styled.main`
height: 100vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

padding: 10rem 6rem 0rem;
position: relative;

&::after {
 content: " ";
 position: absolute;
 z-index: 1;
 left: 0;
 top: 0;

 height: 100%;
 width: 100%;

 background-image: url(${Back});
 background-size: cover;
 opacity: .1;

}

.texts {
 z-index: 2;

 align-items: flex-start;
 flex-direction: column;
 display: flex;
 gap: 2rem;

 h2 {
  font-size: 3.4rem;
  font-weight: 300;
  color: #00008a;

  strong {
   color: #8f00fc;
  }
 }

 span {
  font-size: 2rem;
  font-weight: 300;

  color: #00008a;
 }

 button {
  border-radius: 1rem 0 1rem 0;
  background-color:  #00008a;
  padding: 1rem 2rem;
  outline: none;
  border: none;

  height: 4.8rem;
  width: 23rem;

  position: relative;

  &::before {
   content: 'Agendar Apresentação';
   height: 4.8rem;
   width: 23rem;

   border-radius: 1rem 0 1rem 0;
   transition: .3s ease-in-out;
   background-color: #8f00fc;

   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 1.5rem;
   font-weight: 600;
   color: #FFFFFF;
   
   position: absolute;
   bottom: .5rem;
   right: .5rem;

  } 

  
  &:hover {
   border-radius: 0 1rem 0 1rem;
   filter: brightness(110%);
   cursor: pointer;

   &::before {
    border-radius: 0 1rem 0 1rem;
    filter: brightness(110%);
   }
  }
 }
}

.image {
 height: 50rem;
 width: 60rem;

 background-image: url(${Man});
 background-repeat: no-repeat;
 background-position: bottom;
 z-index: 5;

 margin-bottom: -5rem;
 position: relative;

 .text {
  position: absolute;
  top: 10rem;
  right: 7rem;

  width: 20rem;

  p {
   font-size: 1.6rem;
   font-weight: 400;
   color: #FFFFFF;
  }
 }

}
`

export const Range = styled.div`
height: 15rem;
width: 100%;

background: rgb(0,0,198);
background: linear-gradient(120deg, rgba(0,0,198,1) 0%, rgba(115,0,204,1) 100%);

padding: 2rem 6rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

.text {
height: 100%;
flex: 1;

flex-direction: column;
display: flex;
gap: .5rem;

h3 {
 font-size: 1.5rem;
 font-weight: 600;
 color: #38b6ff;
}

p {
 font-size: 1.5rem;
 font-weight: 400;
 color: #FFFFFF;
}

}
`

export const Plataform = styled.div`
min-height: 200vh;
width: 100%;

background-color: #5800cc;
position: relative;
overflow: hidden;

&::after {
 content: " ";
 position: absolute;
 z-index: 1;
 left: 0;
 top: 0;

 height: 100%;
 width: 100%;

 background-image: url(${Back});
 background-size: cover;
 opacity: .1;

}

.Top {
 height: 50rem;
 width: 100%;
 padding: 6rem;

 position: absolute;
 top: -.5rem;

 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 4rem;

 .Background {
  width: 105%;
 
  position: absolute;
  z-index: 3;
  left: -.5rem;
  top: 0;
 }

 h3 {
  font-size: 2.5rem;
  font-weight: 400;
  color: #8f00fc;

  z-index: 4;
 }

 .gestoes {
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  z-index: 4;
  gap: 2rem;

  .gestao {
   height: 100%;
   flex: 1;

   flex-direction: column;
   display: flex;
   gap: 2rem;

   .title {
    align-items: center;
    display: flex;
    gap: 1rem;

    img {
      transform: scale(85%);
    }

    h4 {
      font-size: 2.2rem;
      font-weight: 300;
      color: #5800cc;
    }
   }

   ul {
    flex-direction: column;
    display: flex;
    gap: .5rem;

    li {
      list-style: none;

      align-items: center;
      display: flex;
      gap: .5rem;

      p {
       font-size: 1.6rem;
       color: #5800cc;
      }

      svg {
        height: 1.6rem;
        width: 1.6rem;

        color: #5800cc;
        flex-shrink: 0;
      }
    }
   }
  }
 }
}

.Bottom {
  width: 100%;
  height: 130vh;

  position: absolute;
  padding: 0rem 6rem 10rem;
  bottom: 0rem;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: 4rem;

.left {
    height: fit-content;
    width: 35%;

    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 4rem;

    h2 {
      font-size: 3.4rem;
      font-weight: 400;
      color: #FFFFFF;

      strong {
        color: #38b6ff;
      }
    }

    .apps {
      width: 100%;
      
      justify-content: space-between;
      align-items: center;
      display: flex;
      gap: 2rem;

      z-index: 5;

    .app {
        height: 10rem;
        flex: 1;

        justify-content: center;
        flex-direction: column;
        align-items: center;
        display: flex;

        border-radius: 2rem 0 2rem 0;
        
        strong {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.4rem;
        }

        &:hover {
          border-radius: 0rem 2rem 0rem 2rem;
        }
    }

    .loja {
      border: 1px solid #8f00fc;
      color: #8f00fc;

      filter: brightness(200%);
    }  
    .mobi {
     border: 1px solid #38b6ff;
     color: #38b6ff;
    }
    .lite {
     border: 1px solid #FFFFFF;
     color: #FFFFFF;
    }
  }

}
.right {
height: 80%;
width: 65%;

justify-content: center;
align-items: center;
display: flex;

background-image: url(${Back2});
background-repeat: no-repeat;
background-position: center;
background-size: contain;

position: relative;

.Hexagon {
  transition: .8s ease-in-out;
  margin-top: 15rem;
}

.Hand {
position: absolute;
bottom: -15rem;
}
}
}

&[data-position="lite"]{
  .Bottom {
   .right {
    .Hexagon {
     transform: rotate(255deg);
    }
   }
  }
}

&[data-position="mobi"]{
  .Bottom {
   .right {
    .Hexagon {
     transform: rotate(55deg);
    }
   }
  }
}

&[data-position="loja"]{
  .Bottom {
   .right {
    .Hexagon {
     transform: rotate(157deg);
    }
   }
  }
}
`

export const Software = styled.div`
height: 90vh;
width: 100%;

padding: 6rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 4rem;

position: relative;

.left {
  flex-direction: column;
  display: flex;
  gap: 3rem;

  h2 {
    font-size: 3.3rem;
    font-weight: 400;
    color: #5800cc;
  }
  .texts {
   align-items: center;
   display: flex;
   gap: 1rem;

   p {
    font-size: 1.4rem;
    color: #6d6d6d;
   }
  }
  button {
  border-radius: 1rem 0 1rem 0;
  background-color:  #00008a;
  padding: 1rem 2rem;
  outline: none;
  border: none;

  height: 4.8rem;
  width: 23rem;

  position: relative;

  &::before {
   content: 'Agendar Apresentação';
   height: 4.8rem;
   width: 23rem;

   border-radius: 1rem 0 1rem 0;
   transition: .3s ease-in-out;
   background-color: #8f00fc;

   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 1.5rem;
   font-weight: 600;
   color: #FFFFFF;
   
   position: absolute;
   bottom: .5rem;
   right: .5rem;

  } 

  
  &:hover {
   border-radius: 0 1rem 0 1rem;
   filter: brightness(110%);
   cursor: pointer;

   &::before {
    border-radius: 0 1rem 0 1rem;
    filter: brightness(110%);
   }
  }
 }
}

.right {
z-index: 2;
}

&::after{
  content: " ";
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;

  height: 100%;
  width: 40%;

  background: rgb(115,0,204);
  background: linear-gradient(270deg, rgba(115,0,204,1) 0%, rgba(241,241,241,0.4430147058823529) 100%);
}
`

export const Tools = styled.div`
height: 100vh;
width: 100%;

background-color: #FFFFFF;
padding: 6rem;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 5rem;

h3 {
 font-size: 2.7rem;
 font-weight: 400;
 color: #5800cc;
}

.grid {
 height: fit-content;
 width: 100%;

 grid-template-columns: repeat(6, 1fr);
 display: grid;
 gap: 3rem;

 .card {
  height: 10rem;
  width: 100%;

  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #5800cc;

    text-align: center;
  }
 }
}

button {
  border-radius: 1rem 0 1rem 0;
  background-color:  #00008a;
  padding: 1rem 2rem;
  margin-top: 2rem;
  outline: none;
  border: none;

  height: 4.8rem;
  width: 23rem;

  position: relative;

  &::before {
   content: 'Agendar Apresentação';
   height: 4.8rem;
   width: 23rem;

   border-radius: 1rem 0 1rem 0;
   transition: .3s ease-in-out;
   background-color: #8f00fc;

   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 1.5rem;
   font-weight: 600;
   color: #FFFFFF;
   
   position: absolute;
   bottom: .5rem;
   right: .5rem;

  } 

  
  &:hover {
   border-radius: 0 1rem 0 1rem;
   filter: brightness(110%);
   cursor: pointer;

   &::before {
    border-radius: 0 1rem 0 1rem;
    filter: brightness(110%);
   }
  }
}
`

export const Ads = styled.div`
height: 55vh;
width: 100%;

background-color: #00008a; 
padding: 0 0 0 6rem;

justify-content: space-between;
align-items: center;
display: flex;
gap: 10rem;

.text {
flex-direction: column;
display: flex;
gap: 2rem;

h2 {
 font-size: 2.3rem;
 font-weight: 400;
 color: #FFFFFF;
}

button {
  border-radius: 1rem 0 1rem 0;
  background-color:  #0000c6;
  padding: 1rem 2rem;
  margin-top: 2rem;
  outline: none;
  border: none;

  height: 4.8rem;
  width: 23rem;

  position: relative;

  &::before {
   content: 'Agendar Apresentação';
   height: 4.8rem;
   width: 23rem;

   border-radius: 1rem 0 1rem 0;
   transition: .3s ease-in-out;
   background-color: #8f00fc;

   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 1.5rem;
   font-weight: 600;
   color: #FFFFFF;
   
   position: absolute;
   bottom: .5rem;
   right: .5rem;

  } 

  
  &:hover {
   border-radius: 0 1rem 0 1rem;
   filter: brightness(110%);
   cursor: pointer;

   &::before {
    border-radius: 0 1rem 0 1rem;
    filter: brightness(110%);
   }
  }
}
}

.right {
 height: 100%;
 flex: 1;

 background-color: #8f00fc;
 padding: 0 0 0 6rem;

 align-items: center;
 position: relative;
 display: flex;

 &::after {
 content: " ";
 position: absolute;
 z-index: 1;
 left: 0;
 top: 0;

 height: 100%;
 width: 100%;

 background-image: url(${Back});
 background-size: cover;
 opacity: .1;

}

 img {
  position: absolute;
  right: 6rem;
  bottom: 0;

  height: 90%;
  z-index: 2;
 }

 ul {
  z-index: 3;
  li {
    list-style: none;
    z-index: 2;

    padding: .5rem 0;
    align-items: center;
    display: flex;
    gap: 1rem;

    svg {
      height: 1.5rem;
      width: 1.5rem;

      color: #FFFFFF;
      flex-shrink: 0;
    }
 
    p {
      font-size: 1.5rem;
      color: #FFFFFF;
    }
  }
 }
}
`

export const Branches = styled.div`
height: 60vh;
width: 100%;

background-color: #FFFFFF;
padding: 6rem;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 5rem;

h3 {
 font-size: 2.7rem;
 font-weight: 400;
 color: #5800cc;
}

.images {
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 1rem;

  .image {
   flex-direction: column;
   align-items: center;
   display: flex; 
   gap: 1rem;

   img {
    height: 19rem;
    width: 19rem;

    border-radius: 2rem 0 2rem 0;

    &:hover {
     border-radius: 0 2rem 0 2rem;
    }
   }
   span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #5800cc;

    text-align: center;
   }
  }
}
`

export const Form = styled.div`
height: 100vh;
width: 100%;

background-color: #8f00fc;
position: relative;

justify-content: center;
align-items: center;
display: flex;

&::after {
 content: " ";
 position: absolute;
 z-index: 1;
 left: 0;
 top: 0;

 height: 100%;
 width: 100%;

 background-image: url(${Back});
 background-size: cover;
 opacity: .1;

}

.form {
 height: 85%;
 width: 70%;

 z-index: 3;

 background-color: #FFFFFF;
 border-radius: .5rem;
 padding: 4rem 6rem;

 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 5rem;

 h3 {
  font-weight: 400;
  font-size: 3rem;
  color: #8f00fc;

  text-align: center;
 }

 .inputs {
  width: 100%;

  grid-template-columns: repeat(2, 1fr);
  display: grid;
  gap: 2rem;

  input, select {
   height: 5.6rem;
   width: 100%;

   border: 1px solid #5800cc;
   outline: #8f00fc;
   border-radius: .5rem;
   padding: 1rem 2rem;
  }
 }

 button {
  height: 5.6rem;
  width: 30rem;

  background-color: #8f00fc;
  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  border-radius: .5rem;
  border: none;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  } 

  &:disabled {
    filter: brightness(80%);
    cursor: auto;
  }
 }
}
`

export const Footer = styled.footer`
height: 15rem;
width: 100%;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 4rem;

padding: 0 20rem;

.top {
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;

  .icons {
    align-items: center;
    display: flex;
    gap: 4rem;

    .icon {
     align-items: center;
     display: flex;
     gap: 1rem;

     img {
      cursor: pointer;
     }

     a {
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 600;
      color: #8f00fc;

      cursor: pointer;
     }
    }
  }

  .eco {
    align-items: center;
    display: flex;
    gap: 4rem;

   .ecosystem {
   width: fit-content;
   height: 3rem;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;

   
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.5rem;
    width: 4.5rem;

    cursor: pointer;

    border-radius: 50%;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 2.4rem;
     color: #7300cc;
    }


   }
   .cloud {
    background-color: #7300cc;
    
    svg {
      color: #FFFFFF;
    }
   }

   }

   span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #8f00fc;
   }
  }
}

p {
 font-size: 1.6rem;
 font-weight: 400;
 color: #6d6d6d;
}
`