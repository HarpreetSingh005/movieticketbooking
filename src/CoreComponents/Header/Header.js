import React, {useState} from 'react';
import logo from '../../images/logo2.png'
import {Link} from "react-router-dom"
import Autocomplete from 'react-autocomplete'
import search from '../../images/search.svg'
import './Header.css'

const Header = () => {
    const [value, setValue] = useState();
    const menuStyle = {
        borderRadius: '15px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '4px 15px',
        fontSize: '1.3rem',
        position: 'relative',
        overflow: 'auto',
        maxHeight: '50%',
        height: '40px',
        width: '500px'
      };
    return(
        <div>
            <header >
            <Link to="/"><img style={{paddingLeft: 130+'px', width:500+'px', marginRight:330+'px'}} src={logo}/></Link>
            {/* <div>Prime Cinema</div> */}


            <Autocomplete
            getItemValue={(item) => item.label}
            items={[
                { label: 'Delhi' },
                { label: 'Mumbai' },
                { label: 'Rajpura' },
                { label: 'Lucknow' },
                { label: 'Chennai' },
                { label: 'Goa' },
                { label: 'Chandigarh' },
                { label: 'Bangalore' }
            ]}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white', height: 22+'px', paddingLeft:20+'px'}}>
                {item.label}
                </div>
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSelect={(val) => setValue(val)}
            inputProps={{style: menuStyle}}
            
            />
                <Link to={{
                    pathname: '/movies',
                    state:{
                        city: value
                    }
                }}><img src={search} style={{marginLeft:15+'px'}} alt=""/></Link> 




            </header>
        </div>
    )
}

export default Header;