import React from 'react';
import './Slider.css'
import {Link} from 'react-router-dom'
import mortalkombat from '../../images/mortal-kombat.jpg';
import godzilla from '../../images/godzilla.jpg';
import Conjuring from '../../images/Conjuring.jpg';
import black_widow from '../../images/black_widow.jpg';
import F9 from '../../images/F9.jpg';
import A_Quiet_Place from '../../images/A_Quiet_Place.jpg';
import shershaan from '../../images/shershaan.jpg';
import toofan from '../Page2/MovieImages/toofan-c.jpg'
import bell_bottom from '../../images/bell_bottom.jpg';
import radhe from '../../images/radhe.jpg';
import b83 from '../../images/b83.jpg';
import b5 from '../../images/b5.jpeg';
import kgf from '../../images/kgf.jpg';
import toofan_back from '../Page2/MovieImages/toofan-back.jpg'


const Slider = () => {
    return(
        <div>
            <div className="heading-container mt-5">
                <h1><span>H</span>OLLY<span>W</span>OOD</h1>
            </div>
            <div className="container">
                <div className="slider">
                <img src={mortalkombat} />
                <img src={godzilla} />
                <img src={Conjuring}/>
                <img src={black_widow}/>
                <img src={F9}/>
                <img src={A_Quiet_Place}/>
                </div>
            </div>
            <div className="heading-container mt-5">
                <h1><span>B</span>OLLY<span>W</span>OOD</h1>
            </div>
            <div className="container">
                <div className="slider">
                <Link to={{
                        pathname: '/moviedetails',
                        state: {
                            image:toofan,
                    cover:toofan_back ,
                    name:'Toofan' ,
                    title:'Action, Biography, War',
                    cast:{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/farhan-akhtar-671-05-10-2016-11-07-44.jpg', name:'Farhan Akhtar', role:''},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/paresh-rawal-1644-13-09-2017-03-44-45.jpg', name:'Paresh Rawal', role:''},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/isha-talwar-14774-24-03-2017-14-08-54.jpg', name:'Isha Talwar', role:''},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/mrunal-thakur-1044080-18-12-2019-02-06-58.jpg', name:'Marunal Thakur', role:''},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-raaz-2465-04-07-2018-12-40-58.jpg', name:'Vijay Raaz', role:''},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajendra-chawla-12039-25-06-2020-01-59-48.jpg', name:'Rajendra Chawla', role:''}
                        },
                    duration: '2hr 39m',
                    date: '21 May, 2021',
                    about: 'Toofan tells the story of a boxer and the struggles he faces on his journey to get to the national level competition.',
                    trailers:{trailer1:{link:'https://www.youtube.com/embed/2RJqgz7WHTg'},
                               trailer2:{link:'https://www.youtube.com/embed/FFTnfiRMIC8'},
                               trailer3:{link:'https://www.youtube.com/embed/FFTnfiRMIC8'}
                            },
                    ratings:'4.5',
                    tomato:'15%'
                        }
                    }}>
                <img alt="" src={shershaan}/></Link>
                <img alt="" src={bell_bottom}/>
                <img alt="" src={radhe}/>
                <img alt="" src={b83}/>
                <img alt="" src={b5}/>
                <img alt="" src={kgf}/>
                </div>
            </div>
        </div>
    )
}

export default Slider;