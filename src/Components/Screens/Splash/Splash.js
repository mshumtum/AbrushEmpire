/* eslint-disable handle-callback-err */
import React, {useEffect, useState} from 'react';
import styles from './SplashStyle';
import {Wrap} from '../../common';
import {Text, View, Image} from 'react-native';
import {Images} from '../../../theme';
import {Actions} from 'react-native-router-flux';
import Singleton from '../../../Singleton';
import {ACCESS_TOKEN} from '../../../Constants';
import { useDispatch } from 'react-redux';
const Splash = () => {
  const dispatch = useDispatch()
  useEffect(function () {
    setTimeout(function () {
      Singleton.getInstance()
        .getData(ACCESS_TOKEN)
        .then(res => {
          if (res!= null) {
            Singleton.getInstance().accessToken = res;
            Actions.replace("Main")
          } else {
            Actions.replace('Welcome');
          }
        });
    }, 2500);

  }, []);

  return (
    <Wrap style={styles.screenStyle}>
      <View style={styles.appIcon}>
        <Image source={Images.splash_icon} />
      </View>
    </Wrap>
  );
};

export default Splash;
