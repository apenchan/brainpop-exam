import React from 'react';
import ClassListBox from './ClassListBox';

class ClassList extends React.Component{
  displayClass(){
    return this.props.classes.map((classSubjects, index)=> <ClassListBox key={index} {...classSubjects} />)
  }
  render(){
    return (

        <select>
        {this.displayClass()}
        </select>

    )
  }
}

export default ClassList;