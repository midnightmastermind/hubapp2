import React, {Component} from 'react';
import Draggable from './Draggable'

class Planner extends Component {
    constructor(props) {
        super(props);

        this.toggleElement = this.toggleElement.bind(this);
        this.state = {
            calendar: false,
            tasks: false,
            notes: false
        }
    }

    toggleElement(element) {
        let toggled = this.state[element]
        this.state[element] = !toggled;
    }
    render() {
        return (
            <div className="app-content hub">
                <Draggable>
                    <div className="folder"><span onClick={() => this.toggleElement("calendar")} className="folder-name">Calendar</span></div>
                </Draggable>
                <Draggable>
                    <div className="folder"><span onClick={() => this.toggleElement("tasks")} className="folder-name">Tasks</span></div>
                </Draggable>
                <Draggable>
                    <div className="folder"><span onClick={() => this.toggleElement("notes")} className="folder-name">Notes</span></div>
                </Draggable>
            </div>
        )
    }
}

export default Planner;
