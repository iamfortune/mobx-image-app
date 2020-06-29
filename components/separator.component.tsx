import React from 'react';
import { View, StyleSheet } from 'react-native';
import { light1 } from '../theme/colors';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: light1,
  },
});

export const Separator = () => {
  return <View style={styles.separator} />;
};
