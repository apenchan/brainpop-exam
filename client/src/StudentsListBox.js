import React from 'react';
import GetStudentInfo from './GetStudentInfo';
import axios from 'axios'

class StudentsListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      studentInfo: [],
      popUp: false
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    let showInfo = this.state.showInfo;
    console.log(e.target.value)
    let studentInfo = `https://qa.brainpop.com/devtest/api/students/` + e.target.value
    this.setState(prevState => ({
      showInfo: !prevState.showInfo,
      popUp: !prevState.popUp
    }), () => axios.get(studentInfo)
      .then(response => {
        console.log("I am response data, hear me roar", response.data)
        this.setState({
          studentInfo: [response.data]
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
    )
  }
  displayStudentInfo(){
      return this.state.studentInfo.map((data, index)=> {
        return <div key={index}>{data.username}</div>
      })
  }
  //need to pass student info to popup
  render() {
    console.log(this.state.showInfo)
    console.log("I am the student info", this.state.studentInfo)
    console.log(this.props)
    return (
      <div>
        <div>{this.props.first_name} {this.props.last_name} <button type="button" value={this.props.id} onClick={this.handleChange}>Click Me </button></div>
        {this.state.showInfo == true ? this.displayStudentInfo() : ""}
      </div>
    )
  }
}

export default StudentsListBox;