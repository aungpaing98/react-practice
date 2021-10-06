import React from 'react'
import TodoItem from '../TodoItem'


export default function TodoList(props) {
    return (
        <>
        {props.todos.map(todo=><TodoItem todo={todo} toggleCheckTodo={props.toggleCheckTodo} deleteTodo={props.deleteTodo} key={todo.id} />)}
        </>
    )
}
