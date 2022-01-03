import React from 'react';
import './Combos.css'
import t3 from '../../images/t3.png'
import pop from '../../images/pop.png'
import coke from '../../images/coke.png'


const Combos = () => {
    return(
        <div style={{marginBottom:50+'px'}}>
            <div className="heading-container" style={{marginTop: 50 + 'px'}}>
                <h1><span>C</span>OM<span>B</span>OS</h1>
            </div>
            <div id="offer">
                <div><img className="offer-image" src={t3} alt=""/></div>
                <div className="plus">+</div>
                <div><img className="offer-image" src={pop} alt=""/></div>
                <div className="plus">+</div>
                <div><img className="offer-image" src={coke} alt=""/></div>
                <div className="equal">=</div>
                <div className="rupee"><span>₹</span> 999</div>
            </div>
            <div id="offer">
                <div><img className="offer-image" src={t3} alt=""/></div>
                <div className="plus">+</div>
                
                <div><img className="offer-image" src={coke} alt=""/></div>
                <div className="equal">=</div>
                <div className="rupee"><span>₹</span> 699</div>
            </div>
            <div id="offer">
                <div><img className="offer-image" src={t3} alt=""/></div>
                <div className="plus">+</div>
                <div><img className="offer-image" src={t3} alt=""/></div>
                <div className="plus">+</div>
                <div><img className="offer-image" src={pop} alt=""/></div>
                <div className="equal">=</div>
                <div className="rupee"><span>₹</span> 999</div>
            </div>
        </div>
    )
}

export default Combos;