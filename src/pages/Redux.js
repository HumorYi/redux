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

  login = () => {
    store.dispatch({
      type: 'LOGIN'
    })
  }
  loginOut = () => {
    store.dispatch({
      type: 'LOGINOUT'
    })
  }

  asyLogin = () => {
    store.dispatch(dispatch => {
      setTimeout(() => dispatch({ type: 'LOGIN' }), 1000)
    })
  }

  promiseloginOut = () => {
    store.dispatch(
      Promise.resolve({
        type: 'LOGINOUT'
      })
    )
  }

  render() {
    return (
      <div>
        <h3>Redux</h3>

        {/* <p>{store.getState()}</p> */}
        <p>{store.getState().home}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
        <br/>
        <br/>
        <p>{store.getState().login + ''}</p>
        <button onClick={this.login}>login</button>
        <button onClick={this.loginOut}>loginOut</button>
        <button onClick={this.asyLogin}>asyLogin</button>
        <button onClick={this.promiseloginOut}>promiseloginOut</button>
      </div>
    )
  }
}
