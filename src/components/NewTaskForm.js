import React, { useState } from 'react'

export default function NewTaskForm(props) {
    function onSubmitHandler(event) {
        event.preventDefault();
        props.onSubmit(createTask());
    }

    function useTextField(init) {
        const [value, setValue] = useState(init);
        return {
            value,
            onChange: (e) => setValue(e.target.value)
        }
    }

    const id = useTextField('');
    const title = useTextField('');
    const dueDate = useTextField('');
    const description = useTextField('');

    const createTask = () => {
        return { id: id.value, title: title.value, done: false, description: description.value, dueDate: dueDate.value };
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input {...id} type="text" name="id" placeholder="id" />
            <input {...title} type="text" name="title" placeholder="title" />
            <input {...dueDate} type="date" name="dueDate" placeholder="2021, 2, 20" />
            <input {...description} type="text" name="description" placeholder="Description" />
            <button type="submit">Add new task</button>
        </form>
    )
}
