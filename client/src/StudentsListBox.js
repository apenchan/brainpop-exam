import React from 'react';

class StudentsListBox extends React.Component{
  render(){
    return(
      <div>
      <div>{this.props.first_name} {this.props.last_name}</div>
      </div>
    )
  }
}

export default StudentsListBox;