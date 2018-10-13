import React from 'react';

class PopUp extends React.Component {
  displayStudentInfo() {
    return this.props.studentInfo.map((data, index) => {
      return <div key={index}>{data.username}</div>
    })
  }
  render() {
    return (
      <div className="popup">
      <div className="popup_inner">
        {this.displayStudentInfo()} 
      </div>
      </div>
    )
  }
}

export default PopUp;