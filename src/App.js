import React, { Component } from 'react';
import { connect }          from 'react-redux';

import './index.css'

class Contador extends Component {
  sumar = () => {
    this.props.dispatch({ type: 'sumar' });
  }

  restar = () => {
    this.props.dispatch({ type: 'restar' });
  }

  render() {
    return (
      <div className="container my-5">
        <h3 className="text-center">Contador con REDUX</h3>
        <div className="row">
          <div className="col col-md-4 offset-md-5 my-3">
            <button onClick={this.sumar} className="btn btn-outline-success"><i className="fa fa-plus"></i><span> </span>Suma</button>
            <span> </span>
            <button onClick={this.restar} className="btn btn-outline-danger"><i className="fa fa-minus"></i><span> </span>Resta</button>
            <h4 className="my-3 mx-4">Contador: {this.props.cuenta}</h4>
          </div>
        </div>
      </div>
    )
  }
}

function stateProps(state) {
  return {
    cuenta: state.cuenta
  };
}

export default connect(stateProps)(Contador);
