import React from 'react';
import './Sidebar.css';

export default function SideBar(props) {
    let newArray = props.folders.map(folders => {
        return (
            <li key={folders.id}>
                <button onClick={() => props.folderClicked(folders.id)}></button>
            </li>
        )
    });

    return (
        <ul className='sideBar-ul'>
            {newArray}
        </ul>
    )
};
