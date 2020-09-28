import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import { Button } from '../../components/UI/Buttons/Button';
import './Navbar.css';

const Navbar = () =>{
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const menuToggleHandler = () => {
        setClick(!click);
    }
    const mobileMenuCloseHandler = () => {
        setClick(false);
    }

    const showButton =()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/"  className="navbar-logo">
                        TravelNZ <i className="fas fa-suitcase-rolling"></i>
                    </Link>
                    <div className="menu-icon" onClick = {menuToggleHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" exact className="nav-links" onClick ={mobileMenuCloseHandler}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Products" exact className="nav-links"  onClick ={mobileMenuCloseHandler}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" exact className="nav-links"  onClick ={mobileMenuCloseHandler}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/signup" exact className="nav-links-mobile"  onClick ={mobileMenuCloseHandler}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle="btn--outline">Signup</Button>} */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;