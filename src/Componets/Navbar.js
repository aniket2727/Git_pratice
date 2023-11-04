


import react from 'react'
import './Navbar.css'



import {Link} from 'react-router-dom'


const Navbar=()=>{
    return(
       <div className='Navbar'>
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/signUp">SignUp</Link> </li>
            <li><Link  to="/signIn">signIn</Link> </li>
        </ul>
       </div>
    )
};



export default Navbar;