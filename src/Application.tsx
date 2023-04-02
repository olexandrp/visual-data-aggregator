import * as React from 'react'
import './Application.css'
import Grid from '@mui/material/Grid'
import ApplicationBar from './components/ApplicationBar/ApplicationBar'
import Canvas from './components/Canvas/Canvas'
import Settings from './components/Settings/Settings'

class Application extends React.Component {
  render () {
    return (
      <Grid container direction='column'>
        <Grid item>
          <ApplicationBar />
        </Grid>
        <Grid item container xs direction='row'>
          <Grid item xs>
            <Canvas />
          </Grid>
          <Grid item xs={3}>
            <Settings />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Application
