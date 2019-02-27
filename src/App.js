import React, { Component } from 'react';
import './App.css';
import './CSS/colors.css';

import { Main } from './Pages/main.js'
class App extends Component {
  render() {
    return (
      <section id="Full_Application">
        <Main/>
        <div className="dev-tag White-bg">
            DEV
        </div>
      </section>
    );
  }
}

export default App;
