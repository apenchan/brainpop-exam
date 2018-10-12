import React from 'react';
import StudentsListBox from './StudentsListBox';

class StudentsList extends React.Component{
  renderStudents(){
    return this.props.students.map((params, index)=> <StudentsListBox key={index} {...params}/>)
  }
  render(){
    console.log(this.props)
    return(
     <ul>
       {this.renderStudents()}
     </ul>
    )
  }
}

export default StudentsList;