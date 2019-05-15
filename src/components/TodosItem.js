import React from "react";
import PropTypes from "prop-types";

class TodosItem extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: "#eee",
      padding: "10px",
      borderBottom: "1px solid #ccc",
      borderLeft: "1px solid #ccc",
      borderRight: "1px solid #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  backgroundColor: "#f00",
  height: "30px",
  width: "30px",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  outline: "none",
  float: "right",
  borderRadius: "50%"
};

// prop types
TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodosItem;
