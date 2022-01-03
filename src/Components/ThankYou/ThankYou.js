import React from 'react'
import  './ThankYou.css';
import {Link} from 'react-router-dom'

export default function ThankYou(props) {
    const {total} = props.match.params;
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center my-5" style={{backgroundImage: `url(${'https://wallpaper.dog/large/20472521.jpg'})`}}>
            <h1>Payment of Rs {total} Successful.</h1> <h3>Thank you for buying the tickets!</h3>
            <div>
            <Link to='/'><button id="payButton" type="submit" className="btn my-5">RETURN TO HOME</button></Link>
            </div>
        </div>
//         <div >
//         <div class="jumbotron text-center">
//   <h1 class="display-3" style={{marginTop: 100+'px'}}>Thank You!</h1>
//   <p class="lead" style={{color: 'black'}}>Payment of Rs {total} Successful.</p>
//   <hr/>
  
//   <p class="lead">
//     <Link to='/' class="btn btn-primary btn-sm" role="button">Continue to homepage</Link>
//   </p>
// </div>
// </div>
    )
}
