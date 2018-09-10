import React, { Component } from 'react';
import axios from 'axios';

class AdminView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackData: [],
        }
    }

    handleDeleteFeedback = (event) => {
        let feedbackToRemoveId = this.props.feedback._id;
        console.log(feedbackToRemoveId);
        console.log(this.props.reduxState.feedbackForm);

        const matchFeedback = feedback => feedback._id !== feedbackToRemoveId;
        let newFeedbackData = this.props.reduxState.feedbackForm.feedbackInput.filter(matchFeedback);

        console.log(newFeedbackData);

        const updatedFeedback = {
            feedback: newFeedbackData,
        }
        const action = {
            type: 'UPDATE_FEEDBACK',
            payload: updatedFeedback,
        }
        this.props.dispatch(action)
    }


    getFeedback() {
        console.log('in getFeedback');

        axios({
            method: 'GET',
            url: '/'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            this.setState({
                feedbackData: response.data
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error getting the feedback');
        })

        console.log(this.state.feedbackData);
    }

    componentDidMount() {
        this.getFeedback();
    };
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.props.reduxState.feedbackForm.map((feedback, i) => {
                            return (
                                <tr key={i}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <button onClick={this.handleDeleteFeedback}>DELETE</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default AdminView;
