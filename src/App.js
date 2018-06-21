import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {About} from './pages/about';
import Home from './pages/home';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
                <Link to="/about">
                  <Button>About</Button>
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="App" style={{ padding: 20 }}>
            <Grid container spacing={40}>
            </Grid>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
