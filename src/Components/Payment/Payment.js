import React from 'react'
import  './Payment.css'
import Header from '../../CoreComponents/Header/Header.js'
import Footer from '../../CoreComponents/Footer/Footer.js'

export default function PaymentComponent(props) {
    const {name, total, nooftickets, ticketprice, ticketname} = props.match.params;
    const submitpayment = (e) => {
        e.preventDefault();
        props.history.push('/thankyou/'+`${total}`);
    }

    return (
        <div>
            <Header />
            <div id='wrapper'>
                <div className='payment'>
                    <div className='payment_product' style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.9) 95%),url('https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNpbmVtYSUyMGZhbWlseXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`}}>
                        <div>
                            <h2 style={{color:'white'}}>{name}</h2>
                            <div className='ticketdetail'>
                                <h2>{ticketname} -</h2>
                                <div className='price'>
                                ₹{ticketprice}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment_bill' >
                        <h3>Receipt summary</h3>
                        <ul>
                            <li>
                                <span>{ticketprice} X {nooftickets} tickets</span>
                                <span>₹{total}.00</span>
                            </li>
                            <li>
                                <span>Discount</span>
                                <span>₹50.00</span>
                            </li>
                            <li>
                                <span>Subtotal</span>
                                <span>₹{`${`${total}`-50}`}.00</span>
                            </li>
                            <li>
                                <span>Tax</span>
                                <span>₹50.00</span>
                            </li>
                            <li>
                                <span style={{fontSize: 20 +'px'}}>Total</span>
                                <span style={{fontSize: 20 +'px'}}>₹{total}.00</span>
                            </li>
                        </ul>
                        <hr/>
                        <h3>Payment Information</h3>
                        <form className="payment_form" onSubmit={submitpayment}>
                            <div className="form_input">
                                <input style={{width: 100+'%'}} type='text' placeholder='Card Number' required/>
                            </div>
                            <div className='form_input'>
                                <select required>
                                    <option value=''>Month</option>
                                    <option value='jan'>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>Aug</option>
                                    <option>Sep</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option>Dec</option>
                                </select>
                                <select required>
                                    <option value=''>Year</option>
                                    <option value='21'>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                </select>
                                <input type='password' placeholder='CVV' required/>
                            </div>
                            <button type='submit'>Order Now</button>
                        </form>
                    </div>
                </div>
            </div>
            
        {/* <div className="d-flex justify-content-center align-items-center my-3">
        <form className="row g-3 col-4 mx-3 my-3" onSubmit={submitpayment}>
            <h1>PAYMENT</h1>
            
            <div className="col-12">
                <label className="form-label">Card Number</label>
                <input type="number" className="form-control" placeholder="####-####-####-####" maxLength="16" required/>
            </div>
            <div className="col-12">
                <label className="form-label">Card Holder's Name</label>
                <input type="text" className="form-control" value={name} required/>
            </div>
            
            <div className="col-md-6">
                <label className="form-label">Expiration</label>
                <div className="col-md-12 d-flex">    
                    <div className="col-md-5">
                        <input type="number" className="form-control col-md-2" min="1" max="12" placeholder="MM" required/>
                     </div>
                     <div className="col-md-5 mx-2">
                        <input type="number" className="form-control col-md-2" min="2021" max="2100" placeholder="YYYY" required/>
                     </div>
                </div>
            </div>
            
            <div className="col-md-3">
                <label className="form-label">CVV/CVC</label>
                <input type="password" className="form-control" maxLength="3" placeholder="###" required/>
            </div>
            <div className="col-12" style={{marginBottom: -35+'px'}}>
                <label className="form-label">Total amount to pay</label>
                <input className="form-control" value={`${'Rs '+total}`} disabled/>
            </div>
            
            <button id="payButton" type="submit" className="btn my-5">PAY NOW</button>
            
        </form>
        </div> */}

        <Footer />
        </div>
    )
}
