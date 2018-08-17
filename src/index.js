import React           from 'react';
import Contador        from './App.js';
import { render      } from 'react-dom';
import { Provider    } from 'react-redux';
import { createStore } from 'redux';

const contadorInicial = {
  cuenta: 0
};

function Counter(state = contadorInicial, action) {
  switch(action.type) {
    case 'sumar':
      return {
        cuenta: state.cuenta + 1
      };
    case 'restar':
      return {
        cuenta: state.cuenta - 1
      };
    default:
      return state;
  }
}

const store = createStore(Counter);

const App = () => (
  <Provider store={store}>
    <Contador/>
  </Provider>
);

render(<App />, document.getElementById('root'));
