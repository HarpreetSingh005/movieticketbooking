import {useState} from 'react'
import Header from '../../CoreComponents/Header/Header'
import Footer from '../../CoreComponents/Footer/Footer'
import './BookTicket.css'
import cycle from '../../images/cycle.svg'
import bike from '../../images/bike.png'
import bus from '../../images/bus.png'
import car from '../../images/car.png'
import van from '../../images/van.svg'

const BookTicket = (props) => {
    const [vehicle, setVehicle] = useState(cycle);
    const [noOfTickets, setNoOfTickets] = useState(1);
    const [ticketPrice, setTicketPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [ticketname, setTicketName] = useState('');
    const myChangeHandler = (event) => {
        setNoOfTickets(event.target.value);
        setTotal(event.target.value*ticketPrice);
        if(event.target.value == 1){
            setVehicle(cycle)
        }
        else if(event.target.value == 2){
            setVehicle(bike)
        }
        else if(event.target.value <6){
            setVehicle(car)
        }
        else if(event.target.value <11){
            setVehicle(van)
        }
        else if(event.target.value >= 11){
            setVehicle(bus)
        }
    }
    const {name} = props.location.state;
    const ticketprice = (event) => {
        setTicketPrice(event.target.value);
        setTotal(noOfTickets*event.target.value);
    }
    const onBlurhandler = (event) =>{
        if(event.target.value==999){
            setTicketName('Platinum');
        }
        if(event.target.value==799){
            setTicketName('Gold');
        }
        if(event.target.value==499){
            setTicketName('Bronze');
        }
    }
    
        
        const submittheform = (e) =>{
            e.preventDefault();
            props.history.push('/payment'+`/${name}`+`/${total}`+`/${noOfTickets}`+`/${ticketPrice}`+`/${ticketname}`)
        }
        return(
            <div className='bookticket' >
                <Header />
                <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, backgroundSize:'cover', padding: '50px 0px'}}>
                <form style={{width: 28+'%', margin: '0px auto'}} onSubmit={submittheform}>
                    <h1>BOOKING DETAILS</h1> 
                    <hr/>
                    <div class="name">
                        <label for="name">FULL NAME</label><br/>
                        <input type="text" id="name" name="name" required/><br/>
                    </div>
                    <div class="number">
                        <label for="number">PHONE NUMBER</label><br/>
                        <input type="text" id="number" name="card-number" maxlength="10" required />
                    </div>
                    <div class="email">
                        <label for="email">EMAIL</label><br/>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div class="movie">
                        <label for="movie">MOVIE</label><br/>
                        <input type="text" id="movie" value={name} disabled/>
                    </div>
                    <div class="booking-date">
                        <label for="booking">DATE</label><br/>
                        <input type="date" id="booking" name="booking-date" required/>
                    </div>
                    <div class="seat-category">
                    <label for="seat">SEAT CATEGORY</label><br/>
                    <select name="seat" id="seat" onChange={ticketprice} onBlur={onBlurhandler} required>
                        <option value=''>select</option>
                        <option value="999" style={{backgroundColor: '#E5E4E2'}}>PLATINUM - ₹ 999</option>
                        <option value="799" style={{backgroundColor: 'rgb(255, 227, 70)'}}>GOLD - ₹ 799</option>
                        <option value="499" style={{backgroundColor: 'burlywood'}}>BRONZE - ₹ 499</option>
                    </select>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div class="no-of-tickets">
                            <label for="tickets">NUMBER OF TICKETS</label><br/>
                            <input type="number" id="tickets" name="no-of-tickets" min="1" max="100" placeholder='1' onChange={myChangeHandler} required/>
                        </div>
                        <div style={{marginLeft: 25+'px'}}>
                            <img id="vehicles" style={{width: 100+'px',height:100+'px'}} src={vehicle} alt="can't load"/>
                        </div>
                    </div>
                    <div class="total">
                        <label for="total">TOTAL:</label>
                        <input type="text" name="total" id="total" value={`${'Rs '+total}`} style={{color: 'black', fontSize: 20+'px', fontFamily: 'Arial, Helvetica, sans-serif'}} readonly/>
                    </div>
                    
                        <button type="submit" class="book-btn">BOOK NOW</button>
                    
                </form>
                </div>
                <Footer />
            </div>
        )
}

export default BookTicket;