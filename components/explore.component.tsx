import React from 'react';
import { Text } from './text.component';
import {
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import { deviceWidth, space1, space2 } from '../theme/space';
import { useNavigation } from '@react-navigation/native';
import { categories } from '../constants';
import { SectionHeading } from './section-heading.component';
import { ICategoryItem } from '../types/categories.types';

const styles = StyleSheet.create({
  container: {
    paddingLeft: space2,
  },
  category: {
    height: 145,
    width: deviceWidth - 4 * space1,
    marginRight: space1,
  },
  image: {
    borderRadius: space1,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
  imageOverlay: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Explore = () => {
  const navigation = useNavigation();

  const renderCategory = ({ item }: { item: ICategoryItem }) => {
    return (
      <View style={styles.category}>
        <ImageBackground source={item.image} style={styles.image}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Results', { category: item.text })
            }
          >
            <View style={styles.imageOverlay}>
              <Text color="light1" weight="bold">
                {item.text}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View>
      <SectionHeading>Explore</SectionHeading>
      <FlatList
        horizontal
        snapToAlignment="start"
        snapToInterval={deviceWidth - 3 * space1}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(category) => category.text}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};
