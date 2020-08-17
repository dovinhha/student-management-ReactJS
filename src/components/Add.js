import React, { Component } from 'react';
import add from './image/add.svg';

class Add extends Component {
  render() {
    const {onClickToOpen} = this.props;
    return (
      <div>
        <button onClick={onClickToOpen} type="button" className="btn btn-info">Add Student
          <img className="imgAdd" src={add} alt="add"/>
        </button>
      </div>
    );
  }
}

export default Add;