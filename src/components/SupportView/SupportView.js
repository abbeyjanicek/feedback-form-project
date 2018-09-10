import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportView extends Component {
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

    //This function adds the input of "support" to the array. However, the input continues to come up "undefined" 
    //rather than what is entered. The logger shows the correct input but it is undefined in the array.
    handleNext = (event) => {
        console.log(this.state);
        const action = { type: 'ADD_SUPPORT', payload: this.state.input }
        this.props.dispatch(action);
        //This navigates to the next page of the form.
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div className="feedbackContainer">
            <h3>How well are you being supported?</h3>
            <h4>Use a scale of 1-5, where 1 is the lowest and 5 is the highest.</h4>
            <div>
            <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="enter 1, 2, 3, 4 or 5 here" />
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