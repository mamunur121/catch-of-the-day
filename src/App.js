import React from 'react';
import './App.css';
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import Fish from "./components/Fish";
import base from "./base";

import sampleFishes from './sample-fishes';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef){
      this.setState({
        order: JSON.parse(localStorageRef) // string to a object
      });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order)); // convert to a string
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    // key -> which is updated,
    // take a copy of the current fish
    const fishes = {...this.state.fishes};
    // update the state
    fishes[key] = updatedFish;
    // set the new fishes object to state
    this.setState({
      fishes
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
              fishes={this.state.fishes}
              updateFish = {this.updateFish}
          />
        </div>
    );
  }
}

export default App;
