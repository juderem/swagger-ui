import { useState, useEffect } from 'react';
import React from 'react';
import styles from './App.module.scss';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
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
          <CheckboxTest />
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="primary"
            type="date"
            />
          <h1>HELLO</h1>
          <h2>Results</h2>
          <Button startIcon={<SaveIcon /> }
            size="large"
            variant="contained"
            color="secondary">Click Here</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
