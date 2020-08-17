import React, { Component } from 'react';

class SltStatusAndSearchName extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchName : '',
      sltStatus : -1
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
     const target = event.target;
     const name = target.name;
     const value = target.value;
     this.props.onFilterStatusAndName(name ==='searchName' ? value : this.state.searchName,
                                      name === 'sltStatus' ? value : this.state.sltStatus );
     this.setState({
       [name] : value
     })
  }

  render() {
    const { sltStatus } = this.state;
    return (
      <tr>
        <td>
        <input type="text" onChange={this.onChange} 
        value={this.state.searchName} 
        className="form-control" 
        placeholder='Search Name' name="searchName" 
      />
      </td>
      <td>
      <select 
        className="custom-select" 
        id="sltStatus" 
        name='sltStatus' 
        value={sltStatus}
        onChange={this.onChange}
      >
          <option value={-1}>Status</option>
          <option value={1}>Learning</option>
          <option value={0}>Leave school</option>
      </select>
      </td>
      <td></td>
      <td></td>
      </tr>
    );
  }
}

export default SltStatusAndSearchName;