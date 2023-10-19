import React from 'react';
import Header from '../Items/HeaderFooter/Header';
import Footer from '../Items/HeaderFooter/Footer';

function Layout({children, hide}) {
  return (
    <div>
      <Header hidden={hide}/>
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;