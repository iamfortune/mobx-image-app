import React, { FC } from 'react';
import { Image as Img, ImageStyle } from 'react-native';
import { deviceWidth } from '../theme/space';
import { IPhoto } from '../types/photos.types';

interface IProps {
  image: IPhoto;
}

export const Image: FC<IProps> = ({ image }) => {
  return (
    <Img
      source={{ uri: image.largeImageURL }}
      style={{
        width: '100%',
        height: (deviceWidth / image.imageWidth) * image.imageHeight,
      }}
    />
  );
};
