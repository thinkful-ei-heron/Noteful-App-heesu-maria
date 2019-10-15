import React  from 'react';
import {Route, Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import store from './store';
import Sidebar from './Component/Sidebar';
import DynamicFolder from './Component/DynamicFolder';
import Note from './Component/Note';
import Main from './Main';

class App extends React.Component {
  state={
    notes: [],
    folders: []
  }

  componentDidMount() {
    setTimeout(() => this.ListeningStateChangedEvent(store), 600);
  };

  renderNavRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
      {['/', '/folder/:folderId'].map(path => (
          <Route
              exact
              key={path}
              path={path}
              render={routeProps => (
                  <NoteListNav
                      folders={folders}
                      notes={notes}
                      {...routeProps}
                  />
              )}
        </>
    ))}

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>        
        {'/', '/folder/:folderID'}.map(path => (
          <Route
          exact
      ))

    )
      </> 

  };

  folderClicked = (id) => {
    let newArray = this.state.notes.filter(notes => notes.folderId === id);
    this.setState({
      noteSection: newArray,
    })
  }

  render() {
    const {notes, folders} = this.state;
    return (
      <div className='app'>
        <Sidebar folders={this.state.folders} folderClicked={this.folderClicked}/>
        <header>
          <h1>Noteful</h1>
        </header>

        <Main folders={this.state.folders} notes={this.state.notes} />
      </div>
    )
  }
};

export default App;
