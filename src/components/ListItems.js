import React, { Component } from "react";
import "./ListItems.css";
import "../../node_modules/font-awesome-5-css/css/all.css";
import Flipmove from "react-flip-move";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
            type="text"
            value={item.text}
            id={item.key}
          />
          <span className="faicon">
            <i
              className="fa fa-trash"
              onClick={() => props.deleteItem(item.key)}
            ></i>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <Flipmove duration={300} easing="ease-in-out">
        {listItems}
      </Flipmove>
    </div>
  );
}

export default ListItems;
