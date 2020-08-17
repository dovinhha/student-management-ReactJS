import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sltSort : {
        name : '',
        value : 0
      }
    }
    this.onSltSort = this.onSltSort.bind(this);
    this.Bala = this.Bala.bind(this);
  }

  onSltSort(event){
    const target = event.target;
    const value = parseInt(target.value);
    const nameSlt = (value === 1|| value === -1) ? 'name' : 'status';
    this.setState({
      sltSort : {
        name : nameSlt,
        value : value
      }
    });
    this.props.onSort(this.state);
  }

  Bala(){
    this.props.onSort(this.state);
  }
  
  render() {
    const {sltSort} = this.state;
    return (
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="sortBy">Sort</label>
          </div>
          <select value={sltSort.value} onClick={this.Bala} onChange={this.onSltSort} name='sltSort' className="custom-select" id="sortBy">
            <option value={0}>Select By:</option>
            <option value={1}>Name A-Z</option>
            <option value={-1}>Name Z-A</option>
            <option value={2}>Learning</option>
            <option value={-2}>Leave School</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sort;