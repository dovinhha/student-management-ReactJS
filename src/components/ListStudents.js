import React, { Component } from 'react';
import classnames from 'classnames'

class ListStudent extends Component {
  render() {
    const { std,onClickToDel,onUpdateStatus,onClickToEdit,view } = this.props;
    const gender = std.sltGender === true ? 'Male' : 'Female';
    const status = std.status === true ? 'Learning' : 'Leave school';
    const disBtn = std.status === true ? 'btn-success' : 'btn-danger';
    return (
      <tr>
        <td>{std.studentName}</td>
        <td>
          <button onClick={onUpdateStatus} className={classnames("btn",disBtn)}>
            {status}
          </button>
        </td>
        <td>{gender}</td>
        <td>
          <button type="button" onClick={onClickToEdit} className="btn btn-success mr-1 mt-1">Edit</button>
          <button type="button" onClick={onClickToDel} className="btn btn-danger mr-1 mt-1">Delete</button>
          <button type="button" onClick={view} className="btn btn-info mt-1">Info</button>
        </td>
      </tr>
    );
  }
}

export default ListStudent;