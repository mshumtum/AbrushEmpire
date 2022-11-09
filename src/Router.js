import React from 'react';

import {Scene, Router, Tabs} from 'react-native-router-flux';
import {BackHandler} from 'react-native';
import { Splash, Login } from './Components/Screens'
const RouterComponent = ({onRouteChanged}) => {
    function handleBackButton() {
      BackHandler.exitApp();
      return true;
    }
    return (
      <Router
        onStateChange={onRouteChanged}
        navigationBarStyle={{
          backgroundColor: 'rgba(0,0,0,0)',
          borderBottomWidth: 0,
        }}
        hideNavBar={false}
        leftButtonIconStyle={{width: 21, height: 18}}
        titleStyle={{color: '#fff'}}>
        <Scene key="root" hideNavBar>
          <Scene
            key="Splash"
            hideNavBar={true}
            component={Splash}
            gestureEnable={false}
            panHandlers={null}
          />
          <Scene
            key="Login"
            hideNavBar={true}
            component={Login}
            gestureEnable={false}
            panHandlers={null}
            initial
          />
          </Scene>
          </Router>
    )
}

export default RouterComponent;