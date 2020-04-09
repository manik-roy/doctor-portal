import React from 'react';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';

const Header = (props) => {  
  return (
    <section className="main-home">
      <div className="container">
        <header>
          <Navbar />
          <HeaderBottom  {...props} />
        </header>
      </div>
    </section>
  );
};

export default Header;