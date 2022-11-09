import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Images from '../../Theme/Images';
import {colors, Fonts} from '../../Theme';
import {Actions} from 'react-native-router-flux';

function HeaderBackOnly(props) {
  return (
    <View style={styles.mainView}>
      {props.notShow ? (
        <View />
      ) : (
        <TouchableOpacity
          onPress={() => {
            Actions.pop();
          }}>
          <Image style={styles.buttonStyle} source={Images.back_icon} />
        </TouchableOpacity>
      )}
      <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 35,
  },
  buttonStyle: {width: 20, height: 20},
  titleStyle: {
    marginTop: 30,
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: colors.black,
    fontWeight: '700',
  },
});
export {HeaderBackOnly};
