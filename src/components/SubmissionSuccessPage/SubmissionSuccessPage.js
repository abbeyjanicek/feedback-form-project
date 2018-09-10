import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmissionSuccessPage extends Component {
    
    //When component mounts, gather info in redux, axios POST data to db.
    //componentDidMount() {
        //let data = this.props.feedback

    // axios({
    //     method: 'POST',
    //     url: '/',
    //     data: this.props.reduxState.feedbackForm,
    // }).then((response) => {
    //     console.log('Back from POST: ', response.data);
    //     this.props.history.push('/submission');
    // }).catch((error) => {
    //     console.log(error);
    //     alert('Unable to POST to db.')
    // })
    //}

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

//const mapReduxStoreToProps = (state) => ({
    //return {
        //feedback: state.feedbackForm
    //}
//})

export default connect(mapReduxStoreToProps)(SubmissionSuccessPage);