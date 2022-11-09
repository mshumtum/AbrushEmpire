import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {store} from '././Redux/Reducers';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';
function App() {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <Router
        onRouteChanged={state => {
          console.log('Current Screen', Actions.currentScene);
        }}
      />
      <FlashMessage position="top" />
    </Provider>
  );
}
export default App;
