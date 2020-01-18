import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func.isRequired
  };
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // 1.  stop the form from submitting
    event.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);

    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
        <form className='fish-edit' onSubmit={this.createFish}>
          <input
              name='name'
              ref={this.nameRef}
              type="text"
              placeholder='Name'
          />
          <input
              name='price'
              type="text"
              placeholder='Price'
              ref={this.priceRef}
          />
          <select name='status' ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name='desc' placeholder='Desc' ref={this.descRef}/>
          <input
              name='image'
              type="text"
              placeholder='Image'
              ref={this.imageRef}
          />
          <button>+ Add Fish</button>
        </form>
    )
  }

}

export default AddFishForm;