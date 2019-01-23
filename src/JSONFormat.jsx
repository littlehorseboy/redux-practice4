import React from 'react';

class JSONFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      JSONString: '',
      JSONFormatString: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      JSONString: e.target.value,
    });

    let string = '';
    try {
      string = JSON.stringify(JSON.parse(e.target.value), null, 2);
      this.setState({
        JSONFormatString: string,
      });
    } catch (exception) {
      this.setState({
        JSONFormatString: '無法解析',
      });

      console.error(exception);
    }
  }

  render() {
    return (
      <div>
        <h1>JSONFormat</h1>
        <p></p>
        <textarea
          value={this.state.JSONString}
          onChange={this.handleChange}
          cols="60"
          rows="30">
        </textarea>
        {' => '}
        <textarea
          value={this.state.JSONFormatString}
          cols="60"
          rows="30"
          readOnly>
        </textarea>
      </div>
    );
  }
}

export default JSONFormat;
