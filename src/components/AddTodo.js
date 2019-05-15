import React from "react";
import "./AddTodo.css";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ title: e.target.value });

  render() {
    return (
      <div className="addtodo">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input type="submit" name="submit" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
