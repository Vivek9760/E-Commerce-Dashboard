import './App.css';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Components/signup'
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login.js';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div>
      <div className='upper-body'>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route element={<PrivateComponent />}>
      <Route path='/' element={<ProductList/>} />
      <Route path='/add' element={<AddProduct />} />
      <Route path='/update/:id' element={<UpdateProduct />} />
      {/* <Route path='/logout' element={<h1>Logout Component</h1>} /> */}
      <Route path='/profile' element={<h1>Profile Component</h1>} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
