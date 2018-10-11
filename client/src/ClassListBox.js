import React from 'react';

class ClassListBox extends React.Component{
  render(){
    console.log("I am props", this.props)
    return (
      <option>{this.props.name}</option>
    )
  }
}

export default ClassListBox;