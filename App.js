/* eslint-disable import/first,import/order,react/prefer-stateless-function */

import 'es6-symbol/implement';
import './debugging';

import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import RootNavigator from './app/navigation';
import api from './app/mobx/api';

export default class RootComponent extends Component {
  render() {
    return (
      <Provider
        stores={{
          api,
        }}
      >
        <RootNavigator />
      </Provider>
    );
  }
}
