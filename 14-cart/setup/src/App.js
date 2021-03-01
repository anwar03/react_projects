import React, { useState } from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './Context';

function App() {

  return (
    <>
    <Navbar />
    <CartContainer />
    </>
  );
}

export default App;
