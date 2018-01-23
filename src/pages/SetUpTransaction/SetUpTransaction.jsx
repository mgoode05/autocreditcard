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
        // this.handleDayClick = this.handleDayClickOut.bind(this);
        // this.handleDayClick = this.handleDayClickIn.bind(this);
        this.state = {
            selectDayOut: undefined,
            selectedDayIn: undefined
        };
    }

    handleDayClickOut(day, {selected, disabled}) {
        if (disabled) {
            return;
        }
        if (selected) {
            this.setState({ selectedDayOut: undefined});
            return; 
        }
        this.setState({ selectedDayOut: day});
    };

    handleDayClickIn(day, {selected, disabled}) {
        if (disabled) {
            return;
        }
        if (selected) {
            this.setState({ selectedDayIn: undefined});
            return; 
        }
        this.setState({ selectedDayIn: day});
    }

    render() {

    
    return (
        <div>
               <h3> Create Transaction </h3>
                
                <DayPicker 
                    onDayClick={this.handleDayClickOut} 
                    selectedDays={this.state.selectedDayOut}
                    dsiabledDays={{ daysOfWeek: [0] }}
                    />
                        {this.state.selectedDayOut ? (
                        <p> Your Transaction will occur on {this.state.selectedDayOut.toLocaleDateString()}</p>
                             ) : (
                        <p> Please Select A Day</p>
                            )
                        }
                        <br />
                        <DayPicker 
                    onDayClick={this.handleDayClickIn} 
                    selectedDays={this.state.selectedDayIn}
                    dsiabledDays={{ daysOfWeek: [0] }}
                    />
                        {this.state.selectedDayIn ? (
                        <p> Your Transaction will occur on {this.state.selectedDayIn.toLocaleDateString()}</p>
                             ) : (
                        <p> Please Select A Day</p>
                            )
                        }
        </div>
    )}
}

export default SetUpTransaction;