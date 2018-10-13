import React from 'react';
import StudentsListBox from './StudentsListBox';
import Filtered from './Filtered';

class StudentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortLastNames: false,
      lastNames: [],
      isShown: false,
      filteredStudents: []
    }
  }
  renderStudents() {
    return this.props.students.map((params, index) => <StudentsListBox key={index} {...params} />)
  }

  filterStudents = (e) => {
    let filteredList = this.props.students
    console.log("I am the filtered", filteredList)
    filteredList = filteredList.filter(function(student){
      return student.last_name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      filteredStudents: filteredList
    })
  }
  //NEED TO COME BACK TO===================================
  //I need to sort here
  //   sortStudents = () => {
  //     let newArray = [...this.props.students]
  //     let sortLastNames = this.state.sortLastNames;
  //     let lastName;
  //     let lastNames = this.state.lastNames
  //     for (var i = 0; i < newArray.length; i++) {
  //       lastName = newArray[i].last_name
  //       lastNames.push(lastName)
  //       lastNames.sort()
  //       let newArray = 
  //       console.log(lastNames.sort())
  //     }
  //     // return lastNames.map((params, index) => <StudentsListBox key={index} {...params} />)
  //   }
  //   compareObjects= (a,b) => {
  //     let newArray= [...this.props.students]
  //     console.log(newArray)
  //     return b.lastName.localeCompare(a.lastName) ||
  //     b.firstName.localeCompare(a.firstName) || 0
  // }
  //   handleSort = () => {
  //     this.setState({
  //       sortLastNames: true
  //     })
  //   }
  //============================================================
  render() {
    console.log(this.state.filteredStudents)
    return (
      <div>
        <div><input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterStudents} /></div>
        {/* //   {this.props.students ? <button type="button" onClick={this.handleSort}>Sort by Last Name</button> : ""} */}
        <ul>
          {this.state.sortLastNames == true ? this.sortStudents() : this.renderStudents()}
        </ul>
        <Filtered filteredStudents={this.state.filteredStudents} filterStudents={this.filterStudents}/>
      </div>
    )
  }
}

export default StudentsList;