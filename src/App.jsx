
import Header from './Components/Header.jsx';
import ProductList from './Components/ProductList.jsx';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cartCatalogue from './pages/cartCatalogue'

function App() {
  return (
    <div>
      <Header />
      <ProductList />
    <cartCatalogue />   
    </div>
  );
    }

export default App;
