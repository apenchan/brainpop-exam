import React from 'react';
import ClassListBox from './ClassListBox';
import StudentsList from './StudentsList';
import axios from 'axios'

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }
  handleChange = (e,data) => {
    console.log(e.target)
    console.log(e.target.value)
    let classes = this.props.classes
    let className = `https://qa.brainpop.com/devtest/api/classes/` + e.target.value + `/students`
    axios.get(className)
      .then(response => {
        console.log(response.data)
        this.setState({
          students: response.data
        })
        console.log(this.state)
        // this.props.getStudents(response.data)
        // this.setState({id: e.target.value});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  displayClass() {
    return this.props.classes.map((data, index) => {
      return <option value={data.id} key={index}>{data.name}</option>
    })
  }

  render() {
    console.log("rerender students", this.state.students)
    return (
      <div>
      <select onChange={this.handleChange}>{this.displayClass()}</select>
      <div><StudentsList students={this.state.students}/></div>
      </div>
    )
  }
}

export default ClassList;