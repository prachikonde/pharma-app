
import HomeComponent from './components/Home';
import AboutComponent from './components/About';
// import ProductDetailsComponent from './components/ProductDetails';
import ProductListComponent from './components/ProductList';
import CartComponent from './components/Cart';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
          <Route exact path="/Home" element = {<HomeComponent />} />
          <Route exact path="/about" element = {<AboutComponent />}/>
          {/* <Route exact path="/product-details/:id" element={<ProductDetailsComponent />} /> */}
          <Route exact path="/productlist" element={<ProductListComponent />} />
          <Route exact path="/cart" element={<CartComponent />} />
       </Routes>
    </Router>
  );
}

export default App;
