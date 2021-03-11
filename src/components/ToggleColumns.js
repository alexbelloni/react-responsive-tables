import React, { Component } from 'react'
import '../styles/ToggleColumns.css';

export default class ToggleColumns extends Component {
  onCheckboxClick = (e) => {
    this.props.onCheckboxClick(e.target.name, e.target.checked);
  }

  render() {
    return (
      <>
        <p>Columns</p>
        <div className="toggle-columns">

          {
            Object.keys(this.props.columns).map((column, index) => {
              return (
                <div key={index} className="checkbox-pair">
                  <input name={column} type="checkbox"
                    checked={this.props.columns[column]} onChange={e => this.onCheckboxClick(e)} />
                  <label>
                    {column}
                  </label>
                </div>)
            })
          }
        </div>
      </>
    );
  }
}
