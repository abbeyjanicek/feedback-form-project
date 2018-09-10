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
    
    //This function reads the input.
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value,
        });
    }

    //In theory, this function should collect all of the data that was put into the form and send it to the server.
    //However, I had trouble with defining "state" properly so the error of "could not read property feedbackForm of undefined"
    //continues to occur. Nothing gets sent to the server.
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