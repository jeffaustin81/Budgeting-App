import React from 'react'
import { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="rentInput">Rent</label>
          <input type="number" className="form-control" id="rentInput" placeholder="Rent" />
        </div>
        <div className="form-group">
          <label htmlFor="utilitiesInput">Utilities</label>
          <input type="number" className="form-control" id="utilitiesInput" placeholder="Utilities" />
        </div>
      </form>
    )
  }
}
