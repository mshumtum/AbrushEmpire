import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {colors} from '../../Themes';

const Wrap = props => {
  return (
    <SafeAreaView style={[styles.wrapStyle, props.style]}>
        {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapStyle: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapInsideStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapBottom: {
    backgroundColor: colors.white,
  },
});

export {Wrap};
