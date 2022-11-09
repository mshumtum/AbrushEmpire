import AsyncStorage from '@react-native-community/async-storage';
import * as constants from './Constants';
import {Alert, Platform, Share} from 'react-native';
import {request, PERMISSIONS, openSettings} from 'react-native-permissions';
import {showMessage} from 'react-native-flash-message';
import {colors} from './theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Singleton {
  static myInstance = null;
  deviceToken = '1234';
  accessToken = '';
  buySellTicketSocket = null;
  isLogin = false;
  appBanner= ""
  // statusChange = null;

  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  async saveToken(token) {
    Singleton.getInstance().accessToken = token;
    await this.saveData(constants.ACCESS_TOKEN, token);
  }

  async saveEmptyDefault() {
    Singleton.getInstance().kycId = '';
    await this.saveData(constants.KYC_ID, '');
    Singleton.getInstance().accessToken = '';
    await this.saveData(constants.ACCESS_TOKEN, '');
    await this.saveData(constants.IS_LOGIN, 'false');
  }

  deleteOfflineStepsData() {
    return new Promise((resolve, reject) => {
      AsyncStorage.clear();
    });
  }

  saveData(key, value) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, value)
        .then(response => {
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}