import React, { Component } from 'react'

import classes from './App.module.css'
import Head from './components/Head'
import Content from './components/Content'


export default class App extends Component {
    render() {
        return (
            <div className={classes.mainContainer}>
                <Head />
                <Content />
            </div>
        )
    }
}
