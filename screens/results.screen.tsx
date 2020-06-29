import React, { FC, useEffect } from 'react';
import { Image } from '../components/image.component';
import { IPhoto } from '../types/photos.types';
import { FlatList } from 'react-native';
import { photos, searchPhotos } from '../stores/photo.store';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigator.types';
import { Separator } from '../components/separator.component';
import { observer } from 'mobx-react';

export const Results: FC = observer(() => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Results'>>();
  const navigation = useNavigation();

  const renderPhoto = ({ item }: { item: IPhoto }) => {
    return <Image image={item} />;
  };

  useEffect(() => {
    if (params?.category) {
      navigation.setOptions({ title: params?.category });
      searchPhotos({
        category: params?.category,
        keyword: params?.category,
      });
    }
  }, []);

  return (
    <FlatList
      keyExtractor={(photo) => photo.id.toString()}
      data={photos[params?.category] || []}
      renderItem={renderPhoto}
      style={{ flex: 1 }}
      ItemSeparatorComponent={Separator}
    />
  );
});
