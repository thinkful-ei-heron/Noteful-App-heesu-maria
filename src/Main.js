import React from 'react';
import Sidebar from './Sidebar';
import NoteSection from './NoteSection';

export default function Main(props) {
    render() {
        return (
            <div>
                <NoteSection notes={props.notes}
            </div>
        )
    }
};
