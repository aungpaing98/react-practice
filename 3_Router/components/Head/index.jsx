import React, { Component } from 'react'

import classes from './Head.module.css'

export default class Head extends Component {
    render() {
        return (
            <div className={classes.header}>
                <h1>React Router Components</h1> 
            </div>
        )
    }
}
