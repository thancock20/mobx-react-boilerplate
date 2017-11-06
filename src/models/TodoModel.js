import { observable, action } from 'mobx';

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action
  setFinished(finished) {
    this.finished = finished;
  }
}
