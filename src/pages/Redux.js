import React, { Component } from 'react'
import store from '../store'

export default class Redux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unsubscribe: null
    }
  }

  componentDidMount() {
    this.setState({ unsubscribe: store.subscribe(() => this.forceUpdate()) })
  }

  componentWillUnmount() {
    this.state.unsubscribe()
  }

  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  minus = () => {
    store.dispatch({
      type: 'MINUS'
    })
  }

  asyAdd = () => {
    store.dispatch(dispatch => {
      setTimeout(() => dispatch({ type: 'ADD' }), 1000)
    })
  }

  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: 'MINUS'
      })
    )
  }

  render() {
    return (
      <div>
        <h3>Redux</h3>

        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }
}
