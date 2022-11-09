import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, Fonts, Images} from '../../theme';
import {ThemeManager} from '../../../ThemeManager';
import fonts from '../../theme/fonts';

const DisprictionField = ({type = 'filled',...props}) => {
  return (
    <View style={[styles.containerStyle, props.customContainerStyle]}>
      <View
        onPress={props.onPress}
        activeOpacity={0.9}
        style={styles.containerStyle1[type]}>
        <TextInput
          ref={props.ref}
          editable={props.editable}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={colors.placeholderTextColor}
          onChangeText={props.onChangeText}
          style={[styles.inputStyle, props.defaulEmailInput]}
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={props.maxLength}
          onEndEditing={props.endEditing}
          keyboardType={props.keyboardType}
          caretHidden={false}
          returnKeyType={props.returnKeyType}
          //numberOfLines={8}
          multiline={true}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </View>
      <Text style={styles.placeHolderStyle[type]}>{props.placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 180,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    paddingBottom: 3,
    marginTop: 10,
  },
  containerStyle1: {
    filled: {
      height: 160,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.headerBorder,
      justifyContent: 'flex-start',
      paddingTop: 15,
    },
    outline: {
      height: 160,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.appPrimary,
      justifyContent: 'flex-start',
      paddingTop: 15,
    },
  },
  placeHolderStyle: {
    filled: {
      position: 'absolute',
      top: 7,
      left: 15,
      backgroundColor: colors.white,
      paddingHorizontal: 10,
      color: 'rgba(0, 0, 0, 0.4)',
    },
    outline: {
      position: 'absolute',
      top: 7,
      left: 15,
      backgroundColor: colors.white,
      paddingHorizontal: 10,
      color: colors.appPrimary,
    },
  },
  inputStyle: {
    fontFamily: fonts.regular,
    color: colors.black,
    padding: 5,
    fontSize: 15,
    lineHeight: 20,
    width: '100%',
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 8,
    height: 140,
    textAlignVertical: 'top',
    background: 'rgba(0, 0, 0, 0.02)',
  },
  inputIcon: {
    position: 'absolute',
    width: 16,
    height: 14,
    top: '33%',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  viewPasswordImage: {
    height: 12,
    width: 17.5,
    alignSelf: 'center',
  },
  viewPasswordStyle: {
    height: 40,
    width: 35,
    position: 'absolute',
    right: 0,
    bottom: -10,
  },
  leftImage: {
    height: 14,
    width: 17.5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    fontFamily: fonts.regular,
    color: colors.textfieldTextColor,
    fontSize: 14,
    // paddingLeft: 15,
  },
});

export {DisprictionField};
