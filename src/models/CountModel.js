import { observable, action } from 'mobx';

export default class CountModel {
  @observable count = 0;

  @action
  incCount() {
    this.count += 1;
  }

  @action
  decCount() {
    this.count -= 1;
  }
}
