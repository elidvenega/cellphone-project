import React from 'react'
import main from "./main.jpg"
// img: "img/product-1.png",

const Header = () => {
  return (
    <React.Fragment>
   <img className='main-pic' src={main} alt="Logo" />;
    </React.Fragment>
  )
}

export default Header
