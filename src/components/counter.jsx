import React, { Component } from "react";

class Counter extends Component {
  /*// Using arrow function to inherit 'this'
  handleIncrement = product => {
    console.log(product + " clicked!");
    // Increment count via React to update DOM
    this.setState({ value: this.state.value + product.id });
  };*/

  render() {
    // props includes all attributes defined when the component is created
    console.log("props", this.props);

    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary brn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m 2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
