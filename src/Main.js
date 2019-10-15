import React from 'react';
import Sidebar from './Sidebar';
import NoteSection from './NoteSection';
import {Link} from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        const notes=this.props.notes.map((item) => {
            return(
                <div className='item' key={item.id}>
                    <Link to={item.id}>
                        
                    </Link>
                </div>
            )
        })
        return(
            <div className="main-page">
                
            </div>

        ) 
    }
};
