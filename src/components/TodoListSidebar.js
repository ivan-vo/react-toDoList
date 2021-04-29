import React from 'react'

export default function TodoListSidebar(props) {
    console.log(props.todoLists)
    return (
        <aside className='todo-list-sidebar'>
            {
                props.todoLists.map(tasklist => (<button key={tasklist.id}>{tasklist.title}</button>))
            }
        </aside>
    )
}
