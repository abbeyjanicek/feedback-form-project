import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header.js'
import FeelingView from '../FeelingView/FeelingView.js';
import UnderstandingView from '../UnderstandingView/UnderstandingView.js';
import SupportView from '../SupportView/SupportView.js';
import CommentsView from '../CommentsView/CommentsView.js';
import SubmissionSuccessPage from '../SubmissionSuccessPage/SubmissionSuccessPage.js';
import AdminView from '../AdminView/AdminView.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={FeelingView} />
            <Route path="/understanding" component={UnderstandingView} />
            <Route path="/support" component={SupportView} />
            <Route path="/comments" component={CommentsView} />
            <Route path="/submission" component={SubmissionSuccessPage} />
            <Route path="/admin" component={AdminView} />
            <br />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
