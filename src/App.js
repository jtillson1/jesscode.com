import React, { useState } from 'react';
import './App.css';
import Gallery from './components/gallery';
import Nav from './components/nav';
import AppBar from '@material-ui/core/AppBar';
function App() {
  return (
    <>
     <AppBar position="relative">
                    <Nav></Nav>
            </AppBar>
      <Gallery></Gallery>
    </>
  );
}

export default App;
