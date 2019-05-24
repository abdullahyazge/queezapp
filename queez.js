import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      list: [1, 3, 4]
    };
  }

  onChangeValue = event => {
    this.setState({ email: event.target.email });
  };

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.push(this.state.email);

      return {
        list,
        email: ""
      };
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <input
          type="text"
          name={this.state.email}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.name}
        >
          Add
        </button>
      </div>
    );
  }
}

export default App;
