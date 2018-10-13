import React from 'react';
import ClassListBox from './ClassListBox';
import StudentsList from './StudentsList';
import axios from 'axios';

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }
  handleChange = (e,data) => {
    let classes = this.props.classes
    let className = `https://qa.brainpop.com/devtest/api/classes/` + e.target.value + `/students`
    axios.get(className)
      .then(response => {
        console.log(response.data)
        this.setState({
          students: response.data
        })
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
    return (
      <div>
      <select onChange={this.handleChange}>{this.displayClass()}</select>
      <div><StudentsList students={this.state.students}/></div>
      </div>
    )
  }
}

export default ClassList;