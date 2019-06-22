import React from 'react';
// Material-UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Notes Components
import NotesForm from './NotesForm';
import NotesList from './NotesList';
import Home from './Home';
import Note from './Note';
// React Router
import { Link, Route } from 'react-router-dom';

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

  saveNote = () => {
    if (this.state.title && this.state.description) {
      this.setState({
        notes: [
          ...this.state.notes,
          { 
            id: Date.now(),
            title: this.state.title, 
            description: this.state.description 
          }
        ],
        title: '',
        description: ''
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Typography align='center' variant='h2' gutterBottom>
          My Notes
        </Typography>

        {/* <Link to='/home'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact'>Contact</Link> */}

        {/* <a href="/home">Home</a> */}

        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <NotesList notes={this.state.notes} />
          </Grid>
          <Grid item xs={8}>
            <Route exact path="/" component={Home} />
            <Route 
              path="/new" 
              render={() => (
                <NotesForm 
                  title={this.state.title}
                  description={this.state.description}
                  updateField={this.updateField}
                  saveNote={this.saveNote}
                />      
              )}
            />
            <Route 
              path="/view/:id"
              render={props => <Note {...props} notes={this.state.notes} />} 
            />
          </Grid>
        </Grid>
        <Fab color="primary" component={Link} to="/new">
          <AddIcon />
        </Fab>
      </React.Fragment>
    )
  }
}

export default App;

// Componentes importantes en react router
// -BrowserRouter
// -Link (sin rediriguir a diferencia de la etiqueta a cambiando la url pero queda estatico en la aplicacion)
// -Route