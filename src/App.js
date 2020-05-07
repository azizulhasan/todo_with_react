import React, { Component } from "react";
import "./App.css";
import ListItems from "./components/ListItems";

import "../node_modules/font-awesome-5-css/css/all.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newitem = this.state.currentItem;
    if (newitem.text !== "") {
      const newitems = [...this.state.items, newitem];
      this.setState({
        items: newitems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItem = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItem,
    });
  }
  setUpdate(val, key) {
    const items = this.state.items;

    items.map((item) => {
      if (item.key === key) {
        item.text = val;
      }
      this.setState({
        items: items,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <form onSubmit={this.addItem} id="to-do-form">
            <input
              type="text"
              placeholder="Enter Todos"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          deleteItem={this.deleteItem}
          items={this.state.items}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
