import React, { Component } from 'react';
import axios from 'axios';
import './AdminView.css'

class AdminView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackData: [],
        }
    }

    //In theory, this function should delete all of the data that was put into the form but I did not have time to finish the delete function.
    //I had trouble with defining "state" properly so the error of "could not read property feedbackForm of undefined"
    //continues to occur.
    // handleDeleteFeedback = (event) => {
    //     let feedbackToRemoveId = this.props.feedback._id;
    //     console.log(feedbackToRemoveId);
    //     console.log(this.props.reduxState.feedbackForm);

    //     const matchFeedback = feedback => feedback._id !== feedbackToRemoveId;
    //     let newFeedbackData = this.props.reduxState.feedbackForm.feedbackInput.filter(matchFeedback);

    //     console.log(newFeedbackData);

    //     const updatedFeedback = {
    //         feedback: newFeedbackData,
    //     }
    //     const action = {
    //         type: 'UPDATE_FEEDBACK',
    //         payload: updatedFeedback,
    //     }
    //     this.props.dispatch(action)
    // }

    ////In theory, this function should get all of the data from the db.
    //However, I had trouble with defining "state" properly so the error of "could not read property feedbackForm of undefined"
    //continues to occur elsewhere on the page.
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
                    {/* I had trouble with defining "state" properly so the error of "could not read property feedbackForm of undefined"
                    continues to occur. */}
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
