import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SetUpTransaction.css';
import tokenService from '../../utils/tokenService';
import {Button} from 'react-materialize';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class SetUpTransaction extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectDay: undefined,
        };
    }

    handleDayClick(day) {
        this.setState({ selectedDay: day });
    }

    render() {

    
    return (
        <div>
               <h3> Create Transaction </h3>
                (calendar)
                <DayPicker onDayClick={this.handleDayClick} />
                {this.state.selectedDay ? (
                    <p> Your Transaction will occur on {this.state.selectedDay.toLocaleDateString()}</p>
                ) : (
                    <p> Please Select A Day</p>
                )
            }
        </div>
    )}
}

export default SetUpTransaction;