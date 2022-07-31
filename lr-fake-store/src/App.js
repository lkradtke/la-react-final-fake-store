import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import CheckoutPage from './CheckoutPage';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
