import React, { Component } from "react";
import Counters from "./counters";
import NavBar from "./navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    // This runs just after the component is rendered for the first time
    // Run code here like json query to populate data
  }

  handleIncrement = counter => {
    // Create copy of counters array for local modification
    const counters = [...this.state.counters];
    // Find index of counter to increment
    const index = counters.indexOf(counter);
    // Create copy of counter object for local modification
    counters[index] = { ...counter };
    // Increment
    counters[index].value++;
    // Update state
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Delete called on counter " + counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counterCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
