import { observable, computed, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import debug from 'debug';

import { RC_API_ENDPOINT } from 'react-native-dotenv';
import { REQUEST_STATES } from './_config';

const log = debug('log:mobx:request');
const error = debug('error:mobx:request');

const prefix = 'request-';
export const requestToKey = request => `${prefix}${request}`;

export class Request {
  constructor(url, options = null) {
    this.url = url.includes(RC_API_ENDPOINT) ? url : `${RC_API_ENDPOINT.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
    this.options = options;
  }

  fetch() {
    return fetch(this.url, this.options)
      .then(data => data.json())
      .then(args => {
        log('Fetched %s successfully', this.url, args);
        return args;
      })
      .catch((...args) => error(`Error has occurred while fetching %s`, this.url, this.options, args));
  }
}

export class RequestStore {
  constructor(api) {
    this.api = api;
    this.url = api.url;
    AsyncStorage.getItem(requestToKey(this.url), data => {
      this.localData = JSON.parse(data);
      log('Retreived data from AsyncStorage', this.localData);
      this.refresh();
    });
  }

  @observable remoteData;

  @observable localData;

  @observable error = null;

  @observable state = REQUEST_STATES.IDLE;

  @action
  refresh = async () => {
    try {
      this.state = REQUEST_STATES.REQUESTING;
      const data = await this.api.fetch();
      this.state = REQUEST_STATES.DONE;
      if (!data) {
        throw Error('No data obtained');
      }
      log('Saving data to AsnycStorage', data);
      AsyncStorage.setItem(requestToKey(this.url), JSON.stringify(data));
      this.remoteData = data;
    } catch (e) {
      error(e);
      this.error = error;
      this.state = REQUEST_STATES.FAIL;
    }
  };

  @computed
  get data() {
    return (this.remoteData && this.remoteData.length > 0 && this.remoteData) || this.localData || [];
  }
}

export default request => new RequestStore(new Request(request));
