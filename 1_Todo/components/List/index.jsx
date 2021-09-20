import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './List.module.css'
import Item from '../Item';

export default class List extends Component {
    static propTypes = {
        updateTodo : PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }
    render() {
        const {todos, updateTodo, deleteTodo} = this.props
        return (
            <div className={classes.lists}>
            <ul>
                {
                    todos.map((todo, index)=><Item key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} {...todo}/>)
                }
            </ul>
        </div>
        )
    }
}
