import React  from 'react';
import {Route, Link} from 'react-router-dom';
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
      {['/', '/folder/:folderId'].map(path => (
          <Route
              exact
              key={path}
              path={path}
              render={routeProps => {
                  const {folderId} = routeProps.match.params;
                  const notesForFolder = getNotesForFolder(
                      notes,
                      folderId
                  );
                  return (
                      <NoteListMain
                          {...routeProps}
                          notes={notesForFolder}
                      />
                  );
              }}
          />
      ))}
      <Route
          path="/note/:noteId"
          render={routeProps => {
              const {noteId} = routeProps.match.params;
              const note = findNote(notes, noteId);
              return <NotePageMain {...routeProps} note={note} />;
          }}
      />
  </>
    )
  }


  render() {
    return (
        <div className="App">
            <nav className="App__nav">{this.renderNavRoutes()}</nav>
            <header className="App__header">
                <h1>
                    <Link to="/">Noteful</Link>{' '}
                    <FontAwesomeIcon icon="check-double" />
                </h1>
            </header>
            <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
    );
}
}

export default App;
