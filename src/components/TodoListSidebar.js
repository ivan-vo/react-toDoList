import React from 'react'

export default function TodoListSidebar(props) {
    console.log(props.todoLists)

    function setTasks() {
        props.onClick();
    }
    
    return (
        <aside className='todo-list-sidebar'>
            {
                props.todoLists.map(tasklist => (<button onClick={setTasks} key={tasklist.id}>{tasklist.title}</button>))
            }
        </aside>
    )
}
