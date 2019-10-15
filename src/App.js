import React  from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import store from './store';
import Sidebar from './Component/Sidebar';
import Note from './Component/Note';
import Main from './Main';

class App extends React.Component {
  state={
    notes: store.notes,
    folders: store.folders,
    sidebar: []
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

  render() {
    const {notes, folders} = this.state;
    return (
      <div className='app'>
        <header>
          <h1>Noteful</h1>
        </header>
        <Main folders={this.state.folders} notes={this.state.notes} />
        <Sidebar folders={this.state.folders} />
      </div>
    )
  }

};

export default App;
