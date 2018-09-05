import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="App">
      <BrowserRouter>
          <Switch> {/*只匹配一次*/}
            <Route exact path="/" component={Home}/> {/*路径为/时匹配首页*/}
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
