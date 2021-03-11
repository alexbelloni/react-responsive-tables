import React, { Component } from 'react'
import '../styles/FilterForm.css';

export default class FilterForm extends Component {

  onPriceInputChange = (e) => {
    this.props.onPriceInputChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <div className="FilterForm">
        <label htmlFor="name">Filter:</label>
        <div className="inputs">
          <input
            type="number"
            name="priceFrom"
            placeholder="Price from..."
            value={this.props.priceFrom}
            onChange={e => this.onPriceInputChange(e, "priceFrom")} />
          <input
            type="number"
            name="priceTo"
            placeholder="Price to..."
            value={this.props.priceTo}
            onChange={e => this.onPriceInputChange(e, "priceTo")} />

        </div>
      </div>
    )
  }
}
