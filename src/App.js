import { useState, useEffect } from 'react';
import React from 'react';
import styles from './App.module.scss';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxTest() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
      checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    inputProps={{
      'aria-label': 'secondary checkbox'
    }}
  />}
  label="Testing Checkbox"
  />
  )
}


// var x = new XMLHttpRequest();
// x.open('GET', 'https://cors-anywhere.herokuapp.com/https://templatemanager.herokuapp.com/agentTypeMapping');
// // I put "XMLHttpRequest" here, but you can use anything you want.
// x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// x.onload = function() {
//     return (x.created);
// };
// x.send();

function App() {
    const [results, setResult] = useState([]);
    const result =
    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://templatemanager.herokuapp.com/agentTypeMapping", {
  headers: {
    Accept: "application/json",
    dn: "jm"
  }
})
        .then((response => {
            return response.json()
        }))
        .then((response => {
            console.log(response)
            return setResult(response)
        }))
    }, [])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Agent Manager</h1>
        </header>
      </div>
      <main className='main'>
        {/* <CheckboxTest /> */}
        {/* <ButtonStyled /> */}
            {/* <TextField
              variant="outlined"
              color="primary"
              type="date"
              /> */}
            <div>
              {results.map((result) => (
                <ul className='card'>
                  <li className='cardItem'>ID: {result.id}</li>
                  <li className='cardItem'>OS: {result.os}</li>
                  <li className='cardItem'>Agent Type: {result.agentType}</li>
                  <li className='cardItem'>Created: {result.created}</li>
                  <li className='cardItem'>Updated: {result.updated}</li>
                  <li className='cardItem'>By: {result.by}</li>
                </ul>
              ))}
            </div>
            
            <Button startIcon={<DeleteIcon /> }
              size="large"
              variant="contained"
              color="secondary">Update</Button>
            <Button startIcon={<DeleteIcon /> }
              size="large"
              variant="contained"
              color="secondary">Delete</Button>
      </main>
    </ThemeProvider>
  );
}

export default App;
