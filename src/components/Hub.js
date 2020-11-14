import React, {Component} from 'react';
import Draggable from './Draggable'
import Planner from './Planner'
import HubRoot from './HubRoot'
class Hub extends Component {
    constructor(props) {
        super(props);
        this.setElement = this.setElement.bind(this)
        this.state = {
            element: "root"
        }
    }

    setElement(element) {
        this.setState({
            element: element
        });
    }

    render() {
        return (
            <div className="app-element">
                {this.state.element == "root" && <HubRoot setElement={this.setElement}/>}
                {this.state.element == "planner" && <Planner setElement={this.setElement}/>}
            </div>
        )
    }
}

export default Hub;
