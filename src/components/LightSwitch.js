import React from 'react';
 
class LightSwitch extends React.Component {
  constructor() {
    super();
 
    // Initial state is defined
    this.state = {
      toggled: false,
      color: 'pink'
    };
  }
 
  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled,
        color: !previousState.color
      }
    })
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick} style={{backgroundColor: this.state.color ? 'pink': 'yellow'}}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
 
export default LightSwitch;