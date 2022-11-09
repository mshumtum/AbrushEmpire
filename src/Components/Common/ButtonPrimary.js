import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts, colors, Images} from '../../Theme';
import fonts from '../../Theme/fonts';

const ButtonPrimary = ({type = 'filled', ...props}) => {
  return (
    <TouchableOpacity
      disabled={props.enable ? true : false}
      onPress={props.onPress}
      style={[styles.btnStyle[type], props.customStyle]}>
      <Text style={[styles.btnTextStyle[type], props.textstyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    filled: {
      backgroundColor: colors.txtFieldBackground,
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
      marginVertical: 6,
      borderRadius: 23,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.3,
      elevation: 5,
      borderColor: colors.white,
    },
    outlined: {
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.appPrimary,
      borderWidth: 1,
      marginHorizontal: 30,
      borderRadius: 23,
      marginVertical: 6,
      borderColor: colors.appPrimary,
      // shadowColor: colors.appPrimary,
      // shadowOffset: {width: 2, height: 2},
      // shadowOpacity: 0.3,
      // elevation: 5,
    },
  },

  btnTextStyle: {
    filled: {
      color: colors.textColorBlur,
      fontSize: 17,
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 0, height: 4},
      fontFamily: fonts.regular,
      fontWeight: "700",
    },
    outlined: {
      color: colors.white,
      fontSize: 17,
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 0, height: 4},
      fontFamily: fonts.regular,
      fontWeight: "700",
    },
  },
});

export {ButtonPrimary};
