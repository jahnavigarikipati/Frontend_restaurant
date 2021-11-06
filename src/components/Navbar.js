import React from 'react';
import {Link} from "react-router-dom";


function Navbar() {
    return (
        
            
     <nav className="navbar navbar-expand-sm"style={{backgroundColor:"rgb(8, 51, 71)",  boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}} >
        <div className="container my-12%">
            
            <img src="" alt="Logo" className="img-fluid rounded-circle " style={{width:"5%",}}/>
            <a href="/" className="navbar-brand font-weight-bold text-light"><h4>JAM
            </h4></a>
            <Link to="/cart" className="ml-auto mx-12%"> <i className="fas fa-shopping-cart" style={{color: "whitesmoke",}}></i> </Link>
           
            
            <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapseNav1"
            >
                <span className="fas fa-bars text-light"></span>
            </button>

            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link text-light font-weight-light mx-12%">
                        HOME
                    </Link>
                </div>                
            </div>

            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">
                    <Link to="/menu" className="nav-item nav-link text-light font-weight-light mx-12%">
                        MENU
                    </Link>
                </div>                
            </div>
            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">                             
                     <Link to="/previousorders"className="nav-item nav-link text-light font-weight-light mx-12%"> 
                         PREVIOUS ORDERS     
                     </Link>
                
            </div>
            </div>
        </div>                
    
     </nav>
    
    )
}
export default Navbar;
