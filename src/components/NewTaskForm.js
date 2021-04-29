import React from 'react'

export default function NewTaskForm(props) {
    function onSubmitHandler(event) {
        event.preventDefault(); 
        console.log("submit form");
        props.onSubmit(createTask());
    }
    function createTask() {
        return {id:7,title: 'play fotball', done: true, description:'', dueDate:new Date('2021-12-23')};
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="id" placeholder="id" />
            <input type="text" name="title" placeholder="title" />
            <input type="date" name="dueDate" placeholder="2021, 2, 20" />
            <input type="text" name="description" placeholder="Description" />
            <button type="submit">Add new task</button>
        </form>
    )
}
