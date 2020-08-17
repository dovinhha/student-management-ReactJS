import React, { Component } from 'react';

class SearchAndSort extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyUp: ''
    }
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onKeyUpText = this.onKeyUpText.bind(this);
    this.inputElement = React.createRef();
  }

  componentDidMount(){
    this.inputElement.current.focus();
  }

  onKeyUpText(event) {
    const textKey = event.target.value.trim();
    if (event.keyCode === 13) {
      this.props.onKeyUp(textKey);
    }
  }

  onChangeHandle(event) {
    this.setState({
      keyUp : event.target.value
    })
  }

  render() {
    const { keyUp } = this.state;
    return (
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className="input-group mt-3 mb-3">
          <input
            onKeyUp={this.onKeyUpText}
            onChange={this.onChangeHandle}
            ref={this.inputElement}
            type="text"
            name="textKey"
            className="form-control"
            placeholder="Search key"
            value={keyUp}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="textKey">Search</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAndSort;