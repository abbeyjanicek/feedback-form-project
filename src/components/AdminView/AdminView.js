import React, { Component } from 'react';
import axios from 'axios';

class AdminView extends Component {

    constructor() {
        super();

        this.state = {
            feedbackData: [],
        }
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
                        {this.state.feedbackData.map((feedback, i) => {
                            return (
                                <tr key={i}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <button>DELETE</button>
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
