import React, { Component } from 'react';
import shortid from 'shortid';
import AddStudent from './components/AddStudent';
import ShowStudent from './components/ShowStudent';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disPlayFormAdd: false,
      disPlayFormEdit: false,
      disPlayFormInfo: false,
      infoStudents: [],
      infoStudent: null,
      filter: {
        name: '',
        status: -1
      },
      keyWord: '',
      by: {
        name: '',
        value: 0
      }
    }
    this.openFormAdd = this.openFormAdd.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSubmitSTD = this.onSubmitSTD.bind(this);
    this.onClickToDelSet = this.onClickToDelSet.bind(this);
    this.onClickToSetStatus = this.onClickToSetStatus.bind(this);
    this.onClickToEdit = this.onClickToEdit.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFilterStatusAndName = this.onFilterStatusAndName.bind(this);
    this.onSort = this.onSort.bind(this);
    this.viewInfo = this.viewInfo.bind(this);
  }

  componentWillMount() {
    const stds = JSON.parse(localStorage.getItem('infoStudents'));
    const infoStudents = stds !== null ? stds : [];
    this.setState({
      infoStudents: infoStudents
    })
  }

  openFormAdd() {
    this.setState({
      disPlayFormAdd: true,
      disPlayFormEdit: false,
      disPlayFormInfo: false,
      infoStudent: null
    })
  }

  onClose() {
    this.setState({
      disPlayFormAdd: false,
      disPlayFormEdit: false,
      disPlayFormInfo: false
    })
  }

  onSubmitSTD(params, status, gender) {
    const { infoStudents } = this.state;
    if (params.id) {
      const index = infoStudents.findIndex(val => val.id === params.id);
      params.status = status;
      params.sltGender = gender;
      infoStudents[index] = params;
    }
    else {
      params.id = shortid.generate();
      params.status = true;
      params.sltGender = gender;
      infoStudents.push(params);
    }
    this.setState({
      infoStudents: infoStudents,
      disPlayFormEdit: false,
      disPlayFormAdd: false,
      disPlayFormInfo: false,
      infoStudent: null
    });
    localStorage.setItem('infoStudents', JSON.stringify(infoStudents));
  }

  onClickToDelSet(index) {
    let { infoStudents } = this.state;
    infoStudents = [
      ...infoStudents.slice(0, index),
      ...infoStudents.slice(index + 1)
    ]
    this.setState({
      infoStudents: infoStudents
    });
    localStorage.setItem('infoStudents', JSON.stringify(infoStudents));
  }

  onClickToSetStatus(index) {
    let { infoStudents } = this.state;
    infoStudents[index].status = !infoStudents[index].status;
    this.setState({
      infoStudents: infoStudents
    })
    localStorage.setItem('infoStudents', JSON.stringify(infoStudents));
  }

  onClickToEdit(index) {
    const { infoStudents } = this.state;
    this.setState({
      infoStudent: infoStudents[index],
      disPlayFormEdit: true,
      disPlayFormAdd: false,
      disPlayFormInfo: false
    })
  }

  onKeyUp(textKey) {
    this.setState({
      keyWord: textKey
    })
  }

  onFilterStatusAndName(name, status) {
    status = parseInt(status);
    name = name.trim();
    this.setState({
      filter: {
        name: name,
        status: status
      }
    });
  }

  onSort(params) {
    this.setState({
      by: {
        name: params.sltSort.name,
        value: params.sltSort.value
      }
    })
  }

  viewInfo(index) {
    const { infoStudents } = this.state;
    this.setState({
      infoStudent: infoStudents[index],
      disPlayFormEdit: false,
      disPlayFormAdd: false,
      disPlayFormInfo: true
    })
  }

  render() {
    const {
      disPlayFormAdd,
      disPlayFormEdit,
      disPlayFormInfo,
      infoStudent,
      filter,
      keyWord,
      by
    } = this.state;
    let infoStudents = this.state.infoStudents;
    if (filter) {
      if (filter.name) {
        infoStudents = infoStudents.filter((val) => {
          return val.studentName.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
        });
      }
      infoStudents = infoStudents.filter((val) => {
        if (filter.status === -1) {
          return val;
        }
        else {
          return val.status === (filter.status === 1 ? true : false);
        }
      });
    }

    if (keyWord) {
      infoStudents = infoStudents.filter((val) => {
        return val.studentName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
      });
    }

    if (by.name === 'name') {
      infoStudents.sort((a, b) => {
        if (a.studentName > b.studentName) return by.value;
        else if (a.studentName < b.studentName) return -by.value;
        else return 0;
      })
    }
    else if (by.name === 'status') {
      infoStudents.sort((a, b) => {
        if (a.status > b.status) return -by.value;
        else if (a.status < b.status) return by.value;
        else return 0;
      })
    }

    return (
      <div className="app">
        <h1 className="tal-center">Student Management</h1>
        <div className="row">
          {(disPlayFormAdd || disPlayFormEdit || disPlayFormInfo) && <AddStudent
            onSubmit={this.onSubmitSTD}
            disPlayFormEdit={disPlayFormEdit}
            disPlayFormInfo={disPlayFormInfo}
            disPlayFormAdd={disPlayFormAdd}
            onClickToEdit={this.onClickToEdit}
            onClose={this.onClose}
            infoStudent={infoStudent}
          />
          }
          <ShowStudent
            onClickToDelSet={this.onClickToDelSet}
            onClickToOpen={this.openFormAdd}
            disPlayFormAdd={disPlayFormAdd}
            onClickToSetStatus={this.onClickToSetStatus}
            disPlayFormEdit={disPlayFormEdit}
            onClickToEdit={this.onClickToEdit}
            infoStudents={infoStudents}
            onKeyUp={this.onKeyUp}
            onFilterStatusAndName={this.onFilterStatusAndName}
            onSort={this.onSort}
            viewInfo={this.viewInfo}
            disPlayFormInfo={disPlayFormInfo}
          />
        </div>
        <div className="alert alert-danger author" role="alert">
          by Do Vinh Ha
        </div>
      </div>
    );
  }
}

export default App;