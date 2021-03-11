import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import '../styles/ProductListSRT.css';

export default class ProductList extends Component {

  render() {
    const columnNamesArr = Object.keys(this.props.columns);
    const visibleColumns = columnNamesArr.filter(name => this.props.columns[name]);

    return (
      <div className="product-list">
        <header>
          <strong>react-super-responsive-table - Product List ({this.props.products.length} items)</strong>
        </header>
        <Table key={visibleColumns.join('')}>
          <Thead>
            <Tr>
              {visibleColumns.map((name, index) => <Th key={index}>{name}</Th>)}
            </Tr>
          </Thead>
          <Tbody>
            {this.props.products.map((p, index) => (
              <Tr key={index}>
                {visibleColumns.map((name, index) => <Td key={index}>{p[name]}</Td>)}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    )
  }
}
