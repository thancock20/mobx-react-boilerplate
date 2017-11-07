import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

@inject('store')
@observer
class App extends Component {
  @observable newTodoTitle = '';

  render() {
    return (
      <div className="container mt-3">
        <Form inline>
          <FormGroup>
            <Label for="count">Count:</Label>
            <Input
              type="text"
              id="count"
              value={this.props.store.count}
              disabled
            />
            <Button color="primary" onClick={this.handlePlus}>
              +
            </Button>
            <Button color="danger" onClick={this.handleMinus}>
              -
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }

  @action
  handlePlus = () => {
    this.props.store.incCount();
  };

  @action
  handleMinus = () => {
    this.props.store.decCount();
  };
}

App.wrappedComponent.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
