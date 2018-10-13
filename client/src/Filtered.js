import React from 'react';

class Filtered extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      studentFilter: ''
    }
  }
  // filterStudents = () => {
  //   // let filteredList = this.props.students
  //   console.log("I am the filtered", filteredList)
  //   filteredList = filteredList.filter(function(student){
  //     return student.last_name.toLowerCase().search(
  //       e.target.value.toLowerCase()) !== -1;
  //   })
  //   this.setState({
  //     filteredStudents: filteredList
  //   })
  // }

  // filterEvents(e) {
	// 	var events = this.props.events
	// 	events.forEach(function (event) {
	// 		if (event.address.toLowerCase().startsWith(e.target.value.toLowerCase())) {
	// 			event.isShown = true
	// 		} else {
	// 			event.isShown = false

	// 		}
	// 	})
	// 	this.props.setEvents(events)
	// }
  render(){
    console.log(this.props)
    return(
      <ul>
        {this.props.filteredStudents.map(function(student){
          return <li key={student}>{student.last_name}</li>
        })}
      </ul>
    )
  }
}

export default Filtered;