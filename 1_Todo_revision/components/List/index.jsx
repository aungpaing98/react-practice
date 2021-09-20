import React, { Component } from 'react'
import Item from '../Item';

export default class List extends Component {

    render() {
        return (
            <div style={{margin:'1rem 0'}}>
               {this.props.todos.map(todo=>(
                   <Item key={todo.id} {...todo} checkTodo={this.props.checkTodo} deleteTodo={this.props.deleteTodo}/>
               ))}
            </div>
        )
    }
}
