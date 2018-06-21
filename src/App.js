import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Button>Australia</Button>
            <Button>United States</Button>
          </Toolbar>
        </AppBar>
        <div className="App" style={{ padding: 20 }}>
          <Grid container spacing={40}>
          </Grid>
        </div>
     </Fragment>
    );
  }
}

export default App;
