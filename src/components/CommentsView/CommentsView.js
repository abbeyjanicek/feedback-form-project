import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CommentsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleSubmit = (event) => {
        console.log();
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState.feedbackForm
        }).then((response) => {
                console.log('Back from POST: ', response.data);
                const action = {type: 'ADD_FEEDBACK'}
                this.props.dispatch(action);
                this.props.history.push('/submission');
            }).catch((error) => {
                console.log(error);
                alert('Unable to POST to db.')
            })
    }

    render() {
        return (
            <div className="feedbackContainer">
            <h3>Would you like to leave any comments?</h3>
            <div>
                <input placeholder="enter your comments here."></input>
                <button className='nextBtn' onClick={this.handleSubmit}>SUBMIT</button>
            </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStoreToProps)(CommentsView);