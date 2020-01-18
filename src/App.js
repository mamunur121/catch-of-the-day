import React from 'react';
import './App.css';
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import Fish from "./components/Fish";

import sampleFishes from './sample-fishes';


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

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    // take a copy of the state
    const order = {...this.state.order};
    // either add the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //call setstate to update our state object
    this.setState({
      order: order
    })

  };
  render() {
    return (
        <div className='catch-of-the-day'>
          <div className='menu'>
            <Header tagline='FRESH SEAFOOD MARKET'/>
            <ul className='fishes'>
              {Object.keys(this.state.fishes).map(fish => (
                  <Fish
                      key={fish}
                      details={this.state.fishes[fish]}
                      index={fish}
                      addToOrder = {this.addToOrder}
                  >
                    {fish}
                  </Fish>
              ))}
            </ul>
          </div>

          <Order
              fishes={this.state.fishes}
              order={this.state.order}
          />
          <Inventory
              addFish={this.addFish}
              loadSampleFishes={this.loadSampleFishes}
          />
        </div>
    );
  }
}

export default App;
