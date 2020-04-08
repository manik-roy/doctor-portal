import React from 'react';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  return (
    <section className="main-home">
      <div className="container">
        <header>
          <Navbar />
          <HeaderBottom />
        </header>
      </div>
    </section>
  );
};

export default Header;