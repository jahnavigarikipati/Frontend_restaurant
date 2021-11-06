import React from 'react';

function Footer() {
    return (
        <footer id="footer">
        <div className="text-center"style={{backgroundColor:"rgb(8, 51, 71)",  boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",marginTop:"6%",marginBottom:"-100%",paddingBottom:"1.1%",paddingTop:"1.1%"}}>
                
            <a href="/" className="font-weight-light text-light"><i className="fas fa-phone" style={{color: "white"}}></i> +91 7995795218  </a>
            <a href="/" className="font-weight-light text-light"><i className="fas fa-envelope" style={{color: "white"}}>
               </i> jahnavigarikipati@gmail.com</a>
        </div>
    </footer>
    )
}
export default Footer;
