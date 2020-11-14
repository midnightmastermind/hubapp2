import React, {Component} from 'react';
import logo from './main.svg';
import Hub from './components/Hub.js'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.startHub = this.startHub.bind(this);
        this.state = {
            start: false
        };
    }

    startHub() {
        this.setState({
            start: true
        });
    }
    render() {
        return (
            <div className="App demo">
              <div id="large-header" className="App-header large-header">
                {this.state.start ? <Hub /> :
                    <a onClick={() => this.startHub()} className="main-header">
                        <div className="App-logo" alt="logo"></div>
                        <h1 className="main-title"><span className="thin">Explore</span> THE HUB</h1>
                    </a>
                }
              </div>
            </div>
        );
    }
}

export default App;
