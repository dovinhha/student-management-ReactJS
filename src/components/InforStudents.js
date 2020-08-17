import React, { Component } from 'react';
import SltStatusAndSearchName from './SltStatusAndSearchName';
import ListStudents from './ListStudents';

class InforStudents extends Component {
  constructor(props){
    super(props);
    this.onClickToDel = this.onClickToDel.bind(this);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onClickToEdit = this.onClickToEdit.bind(this);
    this.view = this.view.bind(this);
  }

  onClickToDel(std){
    return () => {
      const stds = JSON.parse(localStorage.getItem('infoStudents'));
      const index = stds.findIndex(val => val.id === std.id);
      this.props.onClickToDelSet(index);
    }
  }

  onUpdateStatus(std){
    return () => {
      const stds = JSON.parse(localStorage.getItem('infoStudents'));
      const index = stds.findIndex(val => val.id ===std.id);
      this.props.onClickToSetStatus(index);
    }
  }

  onClickToEdit(std){
    return () => {
      const stds = JSON.parse(localStorage.getItem('infoStudents'));
      const index = stds.findIndex(val => val.id ===std.id);
      this.props.onClickToEdit(index);
    }
  }

  view(std){
    return () => {
      const stds = JSON.parse(localStorage.getItem('infoStudents'));
      const index = stds.findIndex(val => val.id ===std.id);
      this.props.viewInfo(index);
    }
  }

  render() {
    const {infoStudents,onFilterStatusAndName} = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Gender</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody>
          <SltStatusAndSearchName onFilterStatusAndName={onFilterStatusAndName}/>  
          
          {infoStudents.map((std,index)=>
            <ListStudents  
              onClickToDel={this.onClickToDel(std)} 
              onUpdateStatus={this.onUpdateStatus(std)}
              onClickToEdit={this.onClickToEdit(std)}
              view={this.view(std)}
              key={index} 
              std={std} 
            />
          )}
        </tbody>
      </table>
    );
  }
}

export default InforStudents;