import React from 'react'

export default function TodoListSidebar(props) {

    function setTasks(tasklist) {
        props.onSelect(tasklist);
    }
    const getClass = (id) => {
        if (id === props.selectedList.id) {
            return 'selected-list-button';
        }
        else{
            return '';
        }      
    }
    
    return (
        <aside className='todo-list-sidebar'>
            {
                props.todoLists.map(tasklist => (<button className={getClass(tasklist.id)} onClick={() => setTasks(tasklist)} key={tasklist.title}>{tasklist.title}</button>))
            }
        </aside>
    )
}
