import React, { Component } from 'react'


/* We need to append our app to the DOM */
export default class App extends Component {
    



    render(){
        return(
        <h1>Hi, I'm {this.props.name}</h1>
        )
    }

}