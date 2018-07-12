import { observable, computed, action } from 'mobx';
import debug from 'debug';
import { REQUEST_STATES } from './_config';
import requestFactory from './_request';

const log = debug('log:mobx:api');

export class ApiStore {
  @observable stores = [];

  @action createRequest = request => this.stores.push(requestFactory(request));

  @computed
  get idle() {
    return this.stores.every(it => it.state !== REQUEST_STATES.REQUESTING);
  }

  @action
  request = request => {
    const predicate = store => store.url.includes(request);
    log(requestFactory(request));
    if (!this.stores.some(predicate)) {
      this.createRequest(request);
    }
    return this.stores.find(predicate);
  };
}

export default (() => new ApiStore())();
