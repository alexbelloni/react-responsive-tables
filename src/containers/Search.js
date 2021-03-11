import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleTables from '../components/ToggleTables';
import ToggleColumns from '../components/ToggleColumns';
import ProductList from '../components/ProductList';
import ProductListSRT from '../components/ProductListSRT';
import FilterForm from '../components/FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: '',
      priceTo: '',
      tables: {
        names: ['default', 'react-super-responsive-table'],
        selected: 'default'
      },
      columns: {
        id: true,
        name: true,
        department: true,
        price: true
      },
      displayedProducts: props.products
    };
  }

  onPriceInputChange = (name, value) => {
    this.setState({ [name]: value }, () => this.filterProducts())
  }

  filterProducts = () => {
    const displayedProducts = this.props.products.filter(p => {
      const { priceFrom, priceTo } = this.state;
      if (priceFrom && priceTo && priceFrom > priceTo) {
        return true;
      }

      if (priceFrom && priceTo) {
        return p.price >= priceFrom && p.price <= priceTo
      } else if (priceFrom) {
        return p.price >= priceFrom
      } else if (priceTo) {
        return p.price <= priceTo
      }
      return true;
    })
    this.setState({ displayedProducts });
  }

  onRadioClick = (selected) => {
    this.setState({ tables: { ...this.state.tables, selected } });
  }

  onCheckboxClick = (name, checked) => {
    const columns = { ...this.state.columns, [name]: checked }
    this.setState({ columns });
  }

  render() {
    return (
      <div className="Products">
        <FilterForm
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
          onPriceInputChange={this.onPriceInputChange} />

        <ToggleTables
          onRadioClick={this.onRadioClick}
          tables={this.state.tables} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />
        {
          this.state.tables.selected === 'react-super-responsive-table' ?
            <ProductListSRT
              products={this.state.displayedProducts}
              columns={this.state.columns} /> :
            <ProductList
              products={this.state.displayedProducts}
              columns={this.state.columns} />
        }

      </div>
    );
  }
}
