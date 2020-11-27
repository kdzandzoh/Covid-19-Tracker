import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Grid, Button} from '@material-ui/core';
import { About, Profile, Home, Error, Log, Chart, Cards, Select } from './components'
import React from 'react'
import { fetchData } from './api';

class App extends React.Component {

    state = {
      data: {},
      country: '',
    }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleChange = async (c) => {
    const fetch = await fetchData(c);
    this.setState({country: c, data: fetch});
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <Grid container direction="row" justify="center" alignItems="center">
                <Button variant="contained" color="primary">
                    <Link to="/" style={{textDecoration: 'none', color:'white'}}>Home</Link>
                </Button>
                <Button variant="contained" color="primary">
                    <Link to="/about" style={{textDecoration: 'none', color:'white'}}>About</Link>
                </Button>
                <Button variant="contained" color="primary">
                    <Link to="/profile" style={{textDecoration: 'none', color:'white'}}>Profile</Link>
                </Button>
                <Log/>
            </Grid>
          </div>

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
              <Cards data={this.state.data}/>
              <Select handleChange={this.handleChange}/>
              <Chart data={this.state.data} country={this.state.country}/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Error />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

/*
<Cards data={this.state.data}/>
              <Choose handleCountryChange={this.handleCountryChange()}/>
              <Chart />
*/