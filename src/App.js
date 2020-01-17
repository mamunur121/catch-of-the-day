import React from 'react';
import './App.css';
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //1. take a copy of the existing state
    const fishes = {...this.state.fishes};

    // Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // set the new fishes object to state
    this.setState({
      fishes: fishes
    })
  };
  render() {
    return (
        <div className='catch-of-the-day'>
          <div className='menu'>
            <Header tagline='FRESH SEAFOOD MARKET'/>
          </div>
          <Order />
          <Inventory addFish={this.addFish}/>
        </div>
    );
  }
}

export default App;
