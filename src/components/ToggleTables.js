import React, { Component } from 'react'
import '../styles/ToggleTables.css';

export default class ToggleTables extends Component {
    onRadioClick = (e) => {
        this.props.onRadioClick(e.target.name);
    }

    render() {
        return (
            <>
                <p>Tables</p>
                <div className="toggle-tables">
                    {
                        this.props.tables.names.map((name, index) => {
                            return (
                                <div key={index} className="checkbox-pair">
                                    <input name={name} type="radio"
                                        checked={this.props.tables.selected === name} onChange={e => this.onRadioClick(e)} />
                                    <label>
                                        {name}
                                    </label>
                                </div>)
                        })
                    }
                </div>
            </>
        );
    }
}