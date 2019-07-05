import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    text: ""
  }

  componentDidMount () {
    //Get api / 
    //Set state with returned value or error msg
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React o no
          </a>
          <p>{this.state.text}</p>
        </header>
      </div>
    );
  }
}

export default App;
