import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { FormGroup, Label, Input } from 'reactstrap';

const Todo = observer(({ todo }) => (
  <li>
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          checked={todo.finished}
          // eslint-disable-next-line
          onClick={() => todo.setFinished(!todo.finished)}
        />
        {todo.title}
      </Label>
    </FormGroup>
  </li>
));

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
