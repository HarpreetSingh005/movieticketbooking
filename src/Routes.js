import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from './App';
import Page2 from './Components/Page2/Page2'
import Page3 from './Components/BookTicket/BookTicket'
import MovieDetails from './Components/MovieDetailsPage/MovieDetails'
import Payment from './Components/Payment/Payment'
import ThankYou from './Components/ThankYou/ThankYou'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/movies" exact component={Page2} />
                <Route path="/moviedetails" exact component={MovieDetails} />
                <Route path="/bookingdetails" exact component={Page3} />
                <Route path="/payment/:name/:total/:nooftickets/:ticketprice/:ticketname" exact component={Payment} />
                <Route path="/thankyou/:total" exact component={ThankYou} />

            </Switch>
        </BrowserRouter>
    )
}
 
export default Routes;