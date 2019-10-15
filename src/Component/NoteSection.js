import React from 'react';

export default function NoteSection(props) {
    let newArray = props.notes.map(notes => {
        return (
            <li key={notes.id}>
                <button>
                    <h2>{notes.name}</h2>
                    {Date(notes.modified)}
                </button>

                <button className='removeButton'>
                    {/* Remove */}
                </button>
            </li>
        )
    })

    return (
        <ul>
            {newArray}
        </ul>
    )
};
