import React from 'react';
import './App.css';
import List from "../list/list.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import vacancyPage from "../vacancyPage/vacancyPage";


class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={List} />
                        <Route exact path="/page" component={vacancyPage} />
                    </div>
                </Router>
            </div>
        );
      }
};

export default App;
