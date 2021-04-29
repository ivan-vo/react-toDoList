import React from 'react'

function dateToString(date) {
    if (date !== '') {
        date = date.toString().split(' ');
        return `[${date[0]} : ${date[1]} : ${date[2]}]`;
    }
    else{
        return '';
    }
    
}


export default function Task(props) {
    const title = props.task.title;
    
    return (
        <div className='item'>
            <p>{title} - {dateToString(props.task.dueDate)}</p>
            <p className='description'>{props.task.description}</p>
            <button className="button-delete">Delete</button>
        </div>
    )
}
