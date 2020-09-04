import React, { Component } from "react"

class ClickityClick extends Component{
    constructor(){
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: "blue"
        }
    }

    handleClick = () => {
        // console.log(this) // is the component.
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }

    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick