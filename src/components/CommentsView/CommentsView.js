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

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit = () => {
        console.log(this.state);
        console.log();
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState.feedbackForm,
        }).then((response) => {
            console.log('Back from POST: ', response.data);
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
                    <textarea rows="6" cols="50" value={this.state.input} onChange={this.handleChange}>Please enter comments here.</textarea>
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