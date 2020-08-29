import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  state = {
    name: "",
    qty: 0
  };

  handleQtyChange = ({ target: { value: qty} }) => {
    this.setState({ qty });
  };

  render() {
    const { name, qty } = this.props;

    return (
      <div>
        <td>
          {name}
        </td>
        <td>
          {this.state.qty}/0
        </td>
        <td>
          name: {""}
          <input type="text" />
          qty: {" "}
          <input type="number" value={qty} onChange={this.handleQtyChange}/>
        </td>
      </div>
    );
  }

}

class Records extends Component {
  state = {
    name: "",
    items: [<Item name={"bar"} />]
  }

  handleNameChange = ({ target: { value: name } }) => {
    this.setState({name});
  }

  addItem = () => {
    var nextState = this.state;
    nextState.items.push(<Item name={this.state.name} />);
    this.setState(nextState);
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <table>
          {this.state.items.map((row) => <tr>{row}</tr>)}
        </table>
        name: {" "}
        <input type="text" value={name} onChange={this.handleNameChange} />
        <button id='addButton' onClick={this.addItem}>Add Row</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Records />
      </div>
    );
  }
}

export default App;
