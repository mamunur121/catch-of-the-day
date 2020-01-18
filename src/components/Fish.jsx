import React from "react";
import PropTypes from 'prop-types';

import {formatPrice} from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    }),
    addToOrder: PropTypes.func.isRequired,

  };
  render() {
    const {name, image, desc, price, status} = this.props.details;
    const isAvailable = status === 'available';
    return (
        <li className='menu-fish'>
          <img src={image} alt={name}/>
          <h3 className='fish-name'>
            {name}
            <span className='price'>
              {formatPrice(price)}
            </span>
          </h3>
          <p>{desc}</p>
          <button
              style={{marginRight: 5}}
              disabled={!isAvailable}
              onClick={()=>this.props.addToOrder(this.props.index)}
          >
            {isAvailable ? 'Add to Order' : "Sold Out"}
          </button>

        </li>
    )
  }

}

export default Fish;