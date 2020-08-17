import React, { Component } from 'react';
import Add from "./Add";
import SearchKey from './SearchKey';
import Sort from './Sort';
import InforStudents from './InforStudents';
import classnames from 'classnames';
import '../App.css';

class ShowStudent extends Component {
  render() {
    const { disPlayFormAdd,
            onClickToOpen,
            onClickToDelSet,
            onClickToEditSet,
            disPlayFormEdit,
            onClickToSetStatus,
            onClickToEdit,
            infoStudents,
            onKeyUp,
            onFilterStatusAndName,
            onSort,
            viewInfo,
            disPlayFormInfo } = this.props;
  
    return (
      <div className={classnames({"col-sm-12 col-md-12 col-lg-12 col-xl-12" : disPlayFormAdd === false 
                                                                              && disPlayFormEdit === false
                                                                              && disPlayFormInfo === false},
                                 {"col-sm-12 col-md-8 col-lg-8 col-xl-8" : disPlayFormAdd === true},
                                 {"col-sm-12 col-md-8 col-lg-8 col-xl-8" : disPlayFormEdit === true},
                                 {"col-sm-12 col-md-8 col-lg-8 col-xl-8" : disPlayFormInfo === true}
                                )}
      >
        <Add onClickToOpen={onClickToOpen}/>
        <div className="row">
          <SearchKey onKeyUp={onKeyUp}/>
          <Sort onSort={onSort}/>
        </div>
        <InforStudents 
          onClickToDelSet={onClickToDelSet}
          onClickToEditSet={onClickToEditSet}
          onClickToSetStatus={onClickToSetStatus}
          onClickToEdit={onClickToEdit}
          infoStudents={infoStudents}
          onFilterStatusAndName={onFilterStatusAndName}
          viewInfo={viewInfo}/>
      </div>
    );
  }
}

export default ShowStudent;