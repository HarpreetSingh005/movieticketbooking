import './Page2.css'
import {Link} from "react-router-dom"

const Component = (props) => {
    return (
        <div>
            <div className="card border border-0" style={{width: 300+'px'}}>
                <img className="card-img-top image" alt={props.name} src={props.image} style={{width: 100+'%'}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5><hr/>
                    <p className="card-text text-secondary">{props.title}</p>
                    <Link to={{
                        pathname: '/moviedetails',
                        state: {
                            image :props.image,
                            name: props.name,
                            cover: props.cover,
                            duration:props.duration,
                            title: props.title,
                            date:props.date,
                            about:props.about,
                            trailers:props.trailers,
                            ratings:props.ratings,
                            cast:props.cast,
                            tomato:props.tomato
                        }
                    }}><div className="btn button">View More</div></Link>
                </div>
            </div>
        </div>
    )
 }

export default Component;
