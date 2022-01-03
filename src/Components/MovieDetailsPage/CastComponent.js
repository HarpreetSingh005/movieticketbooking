import react from 'react'
import './MovieDetails.css'

const CastComponent = (props) => {
    return(
        <div className="card border border-0" style={{width: 150+'px'}}>
                <img className="card-img-top rounded-circle" 
                src={props.image} 
                style={{width: 100+'%'}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text text-secondary">{props.role}</p>
                </div>
        </div>
    )
}

export default CastComponent;