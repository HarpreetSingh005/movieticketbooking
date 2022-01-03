import React, {Component} from 'react';
import './App.css';
import movie_book from './images/movie_book.jpg'
import Header from './CoreComponents/Header/Header';
import Footer from './CoreComponents/Footer/Footer';
import Slider from './Components/Slider/Slider'
import Combos from './Components/Combos/Combos'

class App extends Component {
  render(){
    return (
    <div className="App" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${movie_book})`, backgroundSize: 'cover'}}>
      <Header />
      <Slider />
      <Combos />
      <Footer style={{marginTop:50+'px'}}/>
    </div>
  )
 }
}

export default App;
