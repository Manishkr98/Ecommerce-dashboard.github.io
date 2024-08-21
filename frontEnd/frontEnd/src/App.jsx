
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import PrivateComponents from './Components/PrivateComponents/PrivateComponents';
import Login from'./Components/Login/Login'
import AddProduct from './Components/AddProduct/AddProduct';
import ProductList from './Components/ProductList/ProductList';
import UpdateProductfun from './Components/UpdateProduct/UpdateProduct'

function App() {
  
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>

       <Route  element={<PrivateComponents />}>
        <Route path='' element={<ProductList/>}/>
        <Route path='/Add' element={<AddProduct/>}/>
        <Route path='/Update/:id' element={<UpdateProductfun/>}/>
        <Route path='/Logout' element={<h2>Welcome to the User Logout page.</h2>}/>
        <Route path='/Profile' element={<h2>Welcome to the User Profile Home page.</h2>}/>
        </Route>
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
