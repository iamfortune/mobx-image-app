import React, { FC } from 'react';
import { Text } from './text.component';
import { StyleSheet } from 'react-native';
import { space2, space1 } from '../theme/space';

const styles = StyleSheet.create({
  heading: {
    padding: space2,
    paddingTop: space2,
    paddingBottom: space1,
  },
});

export const SectionHeading: FC = ({ children }) => {
  return (
    <Text weight="bold" size="large" style={styles.heading}>
      {children}
    </Text>
  );
};
