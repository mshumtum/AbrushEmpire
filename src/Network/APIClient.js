import Singleton from '../Singleton';
import * as Constant from '../Constants';
import {Platform, NetInfo} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import END_POINT from './EndPoints';

const APIClient = class APIClient {
  static myInstance = null;
  static getInstance() {
    if (APIClient.myInstance == null) {
      APIClient.myInstance = new APIClient();
    }
    return this.myInstance;
  }
  getWithoutAuth(endpoint) {
    return new Promise((resolve, reject) => {
      console.log('url', `${END_POINT.BASE_URL}${endpoint}`);
      fetch(`${END_POINT.BASE_URL}${endpoint}`, {
        method: 'GET',
      })
        .then(async res => {
          console.log('res', res);
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }
  get(endpoint) {
    return new Promise((resolve, reject) => {
      console.log('url', `${END_POINT.BASE_URL}${endpoint}`);
      fetch(`${END_POINT.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: Singleton.getInstance().accessToken,
        },
      })
        .then(async res => {
          console.log('res', res);
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      console.log('url', `${END_POINT.BASE_URL}${endpoint}`);
      console.log('data', JSON.stringify(data));
      fetch(`${END_POINT.BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Content-Content": "application/x-www-form-urlencoded",
          Authorization: Singleton.getInstance().accessToken,
        },
        body: JSON.stringify(data),
      })
        .then(async res => {
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  postNew(endpoint, data) {
    return new Promise((resolve, reject) => {
      console.log('url', `${END_POINT.BASE_URL}${endpoint}`);
      console.log('data', JSON.stringify(data));
      fetch(`${END_POINT.BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded"',
          Authorization: Singleton.getInstance().accessToken,
        },
        body: data,
      })
        .then(async res => {
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  postNoHeader(endpoint, data) {
    return new Promise((resolve, reject) => {
      console.log('url', `${END_POINT.BASE_URL}${endpoint}`);
      console.log('data', JSON.stringify(data));
      fetch(`${END_POINT.BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        // body: data,
        body: JSON.stringify(data),
      })
        .then(async res => {
          let response = await res.json();
          console.log('response', response);
          if (!res.ok) {
            return reject(response);
          } else {
            return resolve(response);
          }
        })
        .catch(reject);
    });
  }
  postFile(endpoint, data) {
    return new Promise((resolve, reject) => {
      console.log('url', `${END_POINT.BASE_URL}${endpoint}`);
      // console.log('data', JSON.stringify(data))
      console.log('accessToken', Singleton.getInstance().accessToken)
      RNFetchBlob.fetch(
        'POST',
        `${END_POINT.BASE_URL}${endpoint}`,
        {
          Authorization: Singleton.getInstance().accessToken,
          'Content-Type': 'multipart/form-data',
        },
       data,
      )
        .then(async res => {
          console.log('res', res);
          let response = await res.json();
          console.log('response', response);
          return resolve(response);
        })
        .catch(reject);
    });
  }
};
export {APIClient};
