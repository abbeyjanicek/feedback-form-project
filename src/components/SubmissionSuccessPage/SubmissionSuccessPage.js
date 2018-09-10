import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SubmissionSuccessPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleNext = (event) => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="feedbackContainer">
            <h1>Thank you for submitting feedback!</h1>
            <div>
                <button className='nextBtn' onClick={this.handleNext}>Leave New Feedback</button>
            </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStoreToProps)(SubmissionSuccessPage);