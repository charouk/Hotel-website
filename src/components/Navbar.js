import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar(){
  const [click, setClick] = React.useState(false)
  const handleClick= () => setClick (!click)
  const closeMobileMenu=() => setClick (false)
  

 



  return(
    <>

      <nav className='navbar'>

           
          <div className='login-area'>
            <li>
              <Link to='/Register'>
                <i  className="reg-link">Register</i>
              </Link>
            </li>
            <li>
              <Link to='/Login'>
                <i className="sign-link">Sign In</i>
              </Link>
            </li>
        
          </div>
          <div className='container-navbar'>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? "fas fa-times": "fas fa-bars"}></i>
            </div> 
            <ul className={ click? 'nav-menu active': 'nav-menu'}>
                <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to='/about' onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                <li><Link to='/destination' onClick={closeMobileMenu}>Destination</Link></li>
                <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
              
                
            </ul>
          </div>

          

          



      </nav>

      <header>
        <div className='container flex_space'>
          <div className="logo">
            <img src="images/logo.jpg" alt='logo' style={{width:150}}/>
          </div>
          <div className='contact flex_space'>
            <div className='icons'>
                <i className='fas fa-clock'></i>
            </div>
            <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9:00am to 7:00pm</Link>
            </div>
          </div>
          
          <div className='contact flex_space'>

            <div className='icons'>
                <i className='fas fa-phone-volume'></i>
            </div>
            <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+216 25 285 369</Link>
            </div>
          </div>
          <div className='contact flex_space'>

            <div className='icons'>
                <i className='fas fa-envelope'></i>
            </div>
            <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@gmail@com</Link>
            </div>

          </div>
        </div>
      </header>
   {/*======================== end Header ==========================*/}

    </>
  )


}