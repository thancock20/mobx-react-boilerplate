import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Todo from './Todo';

@inject('store')
@observer
class TodoList extends Component {
  @observable newTodoTitle = '';

  render() {
    return (
      <div className="container mt-3">
        <Form inline onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label className="mr-1" for="newTodo">
              New Todo:
            </Label>
            <Input
              className="mr-1"
              type="text"
              id="newTodo"
              value={this.newTodoTitle}
              onChange={this.handleInputChange}
            />
            <Button type="submit" color="primary">
              Add
            </Button>
          </FormGroup>
        </Form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
    e.preventDefault();
  };
}

TodoList.wrappedComponent.propTypes = {
  store: PropTypes.object.isRequired,
};

export default TodoList;
