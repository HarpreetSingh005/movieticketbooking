import {useEffect} from 'react'
import './MovieDetails.css'
import tomatoimage from './Images/tomato.png'
import imdb from './Images/IMDB.png'
import star from './Images/star.svg'
import CastComponent from './CastComponent'
import Footer from '../../CoreComponents/Footer/Footer'
import {Link} from "react-router-dom"

const MovieDetails =(props) =>{
    const {image, name, title, cover, cast, duration, date, about, trailers, ratings, tomato} = props.location.state;
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div style={{backgroundColor: 'white'}}>
            {/* <Header /> */}
        <div style={{fontFamily:'Segoe UI'}}>
            <div className="top" style={{backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${cover})`}}>
		
        <img src={image} alt="" className=""/>
        <div className="mname">
            <h2>{name}</h2>
            English, Hindi, Tamil, Telugu<br/><br/>
            • {duration} • {title}  <br/>
            • {date}<br/><br/>
            <Link to={{
                pathname:'/bookingdetails',
                state:{
                    name: name
                }
            }}>
            <button className="p-2 btn-success" href="#">&nbsp;Book Now&nbsp;</button>
            </Link>
        </div>
</div>

<div className="mb-5" style={{marginLeft: 120+'px'}}>
    <div class="mt-5" style={{width: 900+'px'}}>
        <h2>About the movie</h2>
        <p style={{color:'black'}}>{about}</p>
    </div>
    
    <br/><br/>
    
    <div>
        <h2>Trailer & Clips</h2><br/>
        
        <iframe className="mr-1" style={{display: 'inline'}} width="300" height="200" src={trailers.trailer1.link} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <iframe className="mx-1" style={{display: 'inline'}} width="300" height="200" src={trailers.trailer2.link} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <iframe className="mx-1" style={{display: 'inline'}} width="300" height="200" src={trailers.trailer3.link} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <br/><br/>
    
    <div className="pb-5">
        <h2>Ratings</h2><br/>
        <img src={tomatoimage} style={{paddingRight: 15+'px'}}/> {tomato} &emsp; Rotten Tomatoes<br/><br/>
        <img src={imdb} style={{paddingRight: 15+'px'}}/> <img src={star}/>{ratings}/10 &emsp; IMDb
    </div>
    
    <div className="" style={{width: 1000+'px'}}>
        <h2>Cast</h2><br/>
        <div className="card-group">
            <CastComponent 
            image ={cast.cast1.image}
            name = {cast.cast1.name}
            role = {cast.cast1.role}
            />
            <CastComponent 
            image ={cast.cast2.image}
            name = {cast.cast2.name}
            role = {cast.cast2.role}
            />
            <CastComponent 
            image ={cast.cast3.image}
            name = {cast.cast3.name}
            role = {cast.cast3.role}
            />
            <CastComponent 
            image ={cast.cast4.image}
            name = {cast.cast4.name}
            role = {cast.cast4.role}
            />
            <CastComponent 
            image ={cast.cast5.image}
            name = {cast.cast5.name}
            role = {cast.cast5.role}
            />
            <CastComponent 
            image ={cast.cast6.image}
            name = {cast.cast6.name}
            role = {cast.cast6.role}
            />
            
        </div>
    </div>
    
</div>
        </div>
        <Footer/></div>
    )
}

export default MovieDetails;