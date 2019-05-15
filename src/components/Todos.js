import React from "react";
import TodosItems from "./TodosItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <TodosItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
