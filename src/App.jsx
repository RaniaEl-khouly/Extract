import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppProducts from './components/products';
import AppSkincare from './components/skincare';
import AppReviews from './components/reviews';
import AppHaircare from './components/haircare';
import AppProductlist from './components/productlist';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';

import React, { useEffect } from 'react';



function App() {
  useEffect(() => {
    document.cookie = "data_id=abc123; SameSite=None; Secure";
  }, []);

  return (
    <div className='App'>
      <header id='header'>
        <AppHeader/>
      </header>
      <main>
        <AppHero/>
        <AppAbout/>
        <AppProducts/>
        <AppSkincare/>
        <AppReviews/>
        <AppHaircare/>
        <AppProductlist/>
        <AppBlog/>
        <AppContact/>
      </main>
      <footer id='footer'>
       <AppFooter/>
      </footer>
    </div>
  )
}

export default App
