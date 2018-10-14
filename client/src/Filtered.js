import React from 'react';

class Filtered extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      search: ''
    }
  }
  // filterStudents = (e) => {
  //   let filteredList = this.props.students
  //   console.log(e.target.value)
  //   filteredList = filteredList.filter(function (student) {
  //     return student.last_name.toLowerCase().search(
  //       e.target.value.toLowerCase()) !== -1;
  //   })
  //   if (!e.target.value) {
  //     return " "
  //     this.setState({
  //       filtered: false
  //     })
  //     console.log(this.state.filtered)
  //   }
  //   this.setState({
  //     search: e.target.value,
  //     filtered: true,
  //     filteredStudents: filteredList
  //   })
  // }
  render(){
    console.log(this.props)
    // let filteredStudent = this.props.filteredStudents.filter(
    //   (student) =>{
    //     return student.last_name.indexOf(this.props.search) !== -1
    //   }
    // );
    return(
      <div>
        {/* <input type="text" value={this.props.search} placeholder="Search Last Name" onChange={this.props.filterStudents} />  */}
      <ul>
        {this.props.search != "" ? this.props.filteredStudents.map(function(student){
          return <li data-category={student} key={student}>{student.last_name}</li>
        }): ""}
        {/* {this.props.filteredStudents.map(function(student){
          return <li data-category={student} key={student}>{student.last_name}</li>
        })} */}
      </ul>
      </div>
    )
  }
}

export default Filtered;