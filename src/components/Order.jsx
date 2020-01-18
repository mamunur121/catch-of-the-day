import React from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {formatPrice} from "../helpers";

class Order extends React.Component {

  renderOrder = key => {
    const fish = this.props.fishes[key]; // getting the value of array
    const count = this.props.order[key]; // getting the value of array
    const isAvailable = fish && fish.status === "available";
    // Make sure the fish is loaded before we continue!
    if (!fish) return null;
    if (!isAvailable) {
      return (
          <CSSTransition classNames="order" key={key} timeout={{enter: 500, exit: 500}}>
            <li key={key}>
              Sorry {fish ? fish.name : "fish"} is no longer available
            </li>
          </CSSTransition>
      );
    }
    return (
        <CSSTransition classNames="order" key={key} timeout={500}>
          <li key={key}>
            <TransitionGroup component='span' className='count'>
              <CSSTransition timeout={500} classNames='count' key={count}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>

             lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={()=>this.props.deleteToOrder(key)} style={{color: 'white', backgroundColor: 'red'}}>
              &times;
            </button>
          </li>
        </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order); // getting the keys
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key]; // object key -> value
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
        <div className="order-wrap">
          <h2>Order</h2>
          <TransitionGroup component='ul' className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>
          <div className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
    );
  }

}

export default Order;