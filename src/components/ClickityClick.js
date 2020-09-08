// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor(props) {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme:'blue',
      color: props.color
    };
  }
 
  handleClick = () => {
        this.setState({
            hasBeenClicked: true,
            color: '#9FB'
        },()=> console.log(this.state.hasBeenClicked));
        
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick} style={{backgroundColor: this.state.color}}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 

