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

const InputField = props => {
  return (
    <View style={[styles.containerStyle, props.customContainerStyle]}>
        {props.searchIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{alignSelf: 'center', marginLeft: 8}}
          onPress={props.onSearchPress}>
          <Image
           
            source={props.searchIcon}
          />
        </TouchableOpacity>
      )}
      <TextInput
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
        numberOfLines={props.numberOfLines}
        multiline= {props.multiline}
      />

      {props.image && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.viewPasswordStyle}
          onPress={props.onPress}>
          <Image
            style={[
              styles.viewPasswordImage,
              props.rightImageStyle,
              {tintColor: colors.buttonBgColor},
            ]}
            source={props.image}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
    height: 50,
    // background:"rgba(0, 0, 0, 0.02)"  ,
    backgroundColor: colors.txtFieldBackground,
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    elevation: 5,
  },
  containerStyle1: {
    position: 'relative',
    height: 50,
    marginHorizontal: 16,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  inputStyle: {
    fontFamily: fonts.regular,
    color: colors,
    padding: 5,
    fontSize: 15,
    lineHeight: 20,
    width: '90%',
    paddingHorizontal: 12,
    height: 50,
    borderRadius: 8,
    // backgroundColor: colors.txtFieldBackground
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

export {InputField};
