import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Bookmarks from './features/bookmark/Bookmarks';
import Navbar from './components/Navbar';
import ProductsItemPage from './components/ProductsItemPage';


export interface Product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    count: number
    rate: number
  }
  title: string
}
const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div className="App h-100 bg-light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main products={products} setProducts={setProducts} />}>
          </Route>
          <Route path="/bookmarks" element={<Bookmarks />}>
          </Route>
          <Route path="/:id" element={<ProductsItemPage products={products} />}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
