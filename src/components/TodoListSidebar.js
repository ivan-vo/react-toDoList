import React from 'react'

export default function TodoListSidebar(props) {

    function setTasks(tasklist) {
        props.onClick(tasklist);
    }
    
    return (
        <aside className='todo-list-sidebar'>
            {
                props.todoLists.map(tasklist => (<button onClick={() => setTasks(tasklist)} key={tasklist.title}>{tasklist.title}</button>))
            }
        </aside>
    )
}
