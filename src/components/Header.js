import React from 'react'
import pic from "./pic.jpg"
// import styled from 'styled-components';
// img: "img/product-1.png",

export default function Header() {
  return (
    <React.Fragment>
   <img className='main-pic' src={pic} alt="Logo" />;
    </React.Fragment>
  )
}



