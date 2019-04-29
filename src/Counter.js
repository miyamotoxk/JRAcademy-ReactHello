import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }

  handleSubstract = ()=>{
    this.setState({count: this.state.count -1});
  }

  handleAdd = ()=>{
    this.setState({count: this.state.count +1});
  }

  render() {
    return (
      <div className="counter">
      <button onClick={this.handleSubstract}>-</button>
      <button onClick={this.handleAdd}>+</button>
      <p>The count is: {this.state.count}</p>
    </div>
    );
  }
}

export default Counter;