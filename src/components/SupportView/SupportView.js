import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SupportView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleNext = (event) => {
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div className="feedbackContainer">
            <h3>How well are you being supported?</h3>
            <h4>Use a scale of 1-5, where 1 is the lowest and 5 is the highest.</h4>
            <div>
                <input placeholder="enter 1, 2, 3, 4 or 5 here"></input>
                <button className='nextBtn' onClick={this.handleNext}>NEXT</button>
            </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStoreToProps)(SupportView);