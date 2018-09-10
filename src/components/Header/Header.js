import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Daily Feedback</h1>
                <h4><i>Please fill out the feedback form.</i></h4>
            </header>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Header);

