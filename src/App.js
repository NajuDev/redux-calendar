import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Store } from './store/store';

import './App.css';

import CalendarComponent from './containers/calendar.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider
          store={Store}
        >
          <CalendarComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
