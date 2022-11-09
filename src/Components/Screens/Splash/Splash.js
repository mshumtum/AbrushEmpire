/* eslint-disable handle-callback-err */
import React, {useEffect, useState} from 'react';
import styles from './SplashStyle';
import {Wrap} from '../../Common';
import {Text, View, Image} from 'react-native';
import Singleton from '../../../Singleton';
import {ACCESS_TOKEN} from '../../../Constants';
import { useDispatch } from 'react-redux';
import { DUMMY_USER_URL } from '../../../Network/EndPoints';
const Splash = () => {
  const dispatch = useDispatch()
  useEffect(function () {
    setTimeout(function () {
      Singleton.getInstance()
        .getData(ACCESS_TOKEN)
        .then(res => {
          console.log("Hello===");
          // if (res!= null) {
          //   Singleton.getInstance().accessToken = res;
          //   Actions.replace("Main")
          // } else {
            Actions.replace('Login');
          // }
        });
    }, 2500);

  }, []);

  return (
    <Wrap style={styles.screenStyle}>
      <View style={styles.appIcon}>
        <Image source={{uri: DUMMY_USER_URL}} />
      </View>
    </Wrap>
  );
};

export default Splash;
