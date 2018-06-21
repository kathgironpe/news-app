import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: 20 }}>
        <header className="App-header">
          <Button variant="raised" color="primary">
            Hello World
          </Button>
        </header>
        <Grid container spacing={40}>
        </Grid>
      </div>
    );
  }
}

export default App;
