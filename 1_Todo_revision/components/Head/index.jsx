import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import classes from './Head.module.css'

export default class Head extends Component {

    handleAddTodo = () => {
        const {value} = this.inputTodo;
        if (value!==""){
            const newTodoObj = {id : nanoid(), todo:value, done:false}
            this.props.addNewTodo(newTodoObj)
        }
        this.inputTodo.value = ""
    }

    render() {
        return (
            <div className={classes.header}>
                <h1>Todo List</h1>
                <div className={classes.input_field}>
                    <input type="text" placeholder="  Type in to enter new Todo" ref={c=>this.inputTodo=c}/>
                    <button onClick={this.handleAddTodo}>Add</button>
                </div>
            </div>
        )
    }
}
