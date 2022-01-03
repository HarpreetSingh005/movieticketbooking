import React from 'react';
import logo from '../../images/logo2.png'
import './Footer.css'
import {Link} from "react-router-dom"

const Footer = () => {
    return(
        <div>
            {/* <footer className="bg-secondary p-3 mt-0 footer" >
                <Link to="/"><img src={logo}/></Link>
                <p>Copyright 2020 © Prime Cinema Pvt. Ltd. All Rights Reserved.</p>
            </footer> */}
            <footer>
        <div>
            <Link to='/'><img src={logo} width="300px" style={{float: 'left', marginLeft: 40+'px'}} alt=""/></Link>
        </div>
		<div className="social">
			<a href="#" className="fa fa-twitter fa-2x"></a>
			<a href="#" className="fa fa-youtube-play fa-2x"></a>
			<a href="#" className="fa fa-instagram fa-2x"></a>
			<a href="#" className="fa fa-facebook fa-2x"></a>
		</div>
        <div className="pb-3 mt-2">
            Copyright 2020 © Prime Cinema Pvt. Ltd. All Rights Reserved.
        </div>
        
    </footer>
        </div>
    )
}

export default Footer;