import React  from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import store from './store';
import Sidebar from './Component/Sidebar';
import DynamicFolder from './Component/DynamicFolder';
import Note from './Component/Note';
import Main from './Main';

class App extends React.Component {
  state={
    notes: store.notes,
    folders: store.folders,
    sidebar: {}
    noteSection: []
  }

  componentDidMount() {
    setTimeout(() => this.ListeningStateChangedEvent(store), 600);
  };

  renderNavRoutes() {
    return (

    )
  };

  renderMainRoutes() {
    return (

    )
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
