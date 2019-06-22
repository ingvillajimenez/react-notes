import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      notes: []
    };
  }

  updateField = field => e => {
    this.setState({
      [field]: e.target.value 
    });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Typography align='center' variant='h2' gutterBottom>
          My Notes
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={8}>
            <Grid item xs={12}>
              <TextField 
                type='text'
                placeholder='Title for this note...'
                margin='normal'
                fullWidth
                value={this.state.title}
                onChange={(e) => {this.updateField('title')(e)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                placeholder='Start taking notes...'
                margin='normal'
                multiline
                rows='4'
                fullWidth
                value={this.state.description}
                onChange={this.updateField('description')}
              />
            </Grid>
            <Fab color='secondary'>
              <Icon>edit_icon</Icon>
            </Fab>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default App;