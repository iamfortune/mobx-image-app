import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { photos, searchPhotos } from '../stores/photo.store';
import { Image } from '../components/image.component';
import { observer } from 'mobx-react';
import { IPhoto } from '../types/photos.types';
import { Explore } from '../components/explore.component';
import { SectionHeading } from '../components/section-heading.component';
import { Separator } from '../components/separator.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Home = observer(() => {
  useEffect(() => {
    searchPhotos({});
  }, []);

  const renderPhoto = ({ item }: { item: IPhoto }) => (
    <Image key={item.id} image={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(photo) => photo.id.toString()}
        data={photos.default}
        style={styles.container}
        renderItem={renderPhoto}
        ListHeaderComponent={
          <>
            <Explore />
            <SectionHeading>New</SectionHeading>
          </>
        }
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
});
