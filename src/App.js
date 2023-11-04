
import './App.css';//css file 

import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import SignIn from './Componets/SignIn';
import SignUp from './Componets/SignUp';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom' // this code for routing




function App() {
  return (
    
      <BrowserRouter>
      <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
        <ToastContainer/>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
