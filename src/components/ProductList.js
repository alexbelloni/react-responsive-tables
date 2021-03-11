import React, { Component } from 'react'
import '../styles/ProductList.css';

export default class ProductList extends Component {

  render() {
    const columnNamesArr = Object.keys(this.props.columns);
    const visibleColumns = columnNamesArr.filter(name=>this.props.columns[name]);
    
    return (
      <div className="product-list">
        <header>
          <strong>default - Product List ({this.props.products.length} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              {visibleColumns.map((name,index)=><th key={index}>{name}</th>)}
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((p,index)=>(
           <tr key={index}>
             {visibleColumns.map((name,index)=><td key={index}>{p[name]}</td>)}
           </tr>
           ))}
          </tbody>
        </table>
      </div>
    )
  }
}
