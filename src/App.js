import React, { useState } from 'react';
import './App.css';
import Gallery from './components/gallery';
import Nav from './components/nav';
import AppBar from '@material-ui/core/AppBar';
import Footer from './components/footer';
import '../src/index.css';

function App() {
  return (
    <>
     <AppBar position="relative">
                    <Nav></Nav>
            </AppBar>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}

export default App;
