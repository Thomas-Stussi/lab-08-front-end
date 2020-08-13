import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h2>Nightmare Chef's Cooking Corner</h2>
            </header>    
                <Router>
                    <body>

                    <div className="sidebar">
                        <ul>
                            <li><Link to='/'>Menu!</Link></li>
                            <li><Link to='/create'>Cook!</Link></li> 
                        </ul>
                        <img src='http://bestcleanfunnyjokes.com/wp-content/uploads/2015/08/italian-chef-who-died-joke.png' alt='Italian Chef' width="100px" />
                    </div>
                    <div>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                    </div>
                    
                    </body>
                    </Router>
            
            </div>
        )
    }
}