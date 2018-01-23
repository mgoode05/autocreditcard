import React, {Component} from 'react';
import './HomePage.css';
import {Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transaction: 'blank'
        }

    }

    render() {
        return (
            <div>
                <h2> AutoDebit AutoRefund</h2>

                    Insert Mission Statement
                    (cute black Family Matters photo)


            </div>
        )
    }
}

export default HomePage;