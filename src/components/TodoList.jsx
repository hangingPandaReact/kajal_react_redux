/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
// created TodoList component
import React from "react";

const TodoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { item, removeTodo } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        border: "2px solid black",
        width: "auto",
        padding: "10px",
      }}
    >
      <div style={{ marginRight: "0.6rem" }}>{item.item}</div>
      <button onClick={() => removeTodo(item.id)}>
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/709/709519.png"
          alt="x"
          width="20px"
          height="auto"
        />
        {" "}
      </button>
    </div>
  );
};
export default TodoList;
