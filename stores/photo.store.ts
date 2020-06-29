import { observable } from 'mobx';
import Config from 'react-native-config';
import { IPhoto } from '../types/photos.types';

const BASE_URL = 'https://pixabay.com/api';

export const photos = observable<{ [keyword: string]: IPhoto[] }>({
  default: [],
});

export const searchPhotos = async ({
  keyword,
  category,
}: {
  keyword?: string;
  category?: string;
}) => {
  let params = '';
  if (category) {
    params += `&category=${category.toLowerCase()}`;
  }
  if (keyword) {
    params += `&q=${keyword}`;
  }
  const url = `${BASE_URL}/?key=${Config.PIXABAY_API_KEY}&safesearch=true&per_page=4${params}`;
  const response = await fetch(url);
  const data = await response.json();
  photos[keyword || 'default'] = data.hits;
};
