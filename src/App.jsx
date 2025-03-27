import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/:productID" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
