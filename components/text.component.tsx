import React, { FC } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import colors from '../theme/colors';

const sizes = {
  regular: 15,
  large: 17,
};

interface IProps extends TextProps {
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
}

export const Text: FC<IProps> = (props) => {
  const { weight, color, size, ...textProps } = props;
  const style: TextStyle[] = [
    {
      fontWeight: weight || 'normal',
      color: colors[color || 'dark3'],
      fontSize: sizes[size || 'regular'],
    },
    props.style as TextStyle,
  ];

  return <RNText {...textProps} style={style} />;
};
