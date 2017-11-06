import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import 'bootstrap/dist/css/bootstrap.css';

import TodoList from './components/TodoList';
import TodoListModel from './models/TodoListModel';

useStrict(true);

const store = new TodoListModel();

render(
  <div>
    <DevTools />
    <Provider store={store}>
      <TodoList />
    </Provider>
  </div>,
  document.getElementById('root'),
);

store.addTodo('Get Coffee');
store.addTodo('Write simpler code');
store.todos[0].setFinished(true);

setTimeout(() => {
  store.addTodo('Get a cookie as well');
}, 2000);

// playing around in the console
window.store = store;
