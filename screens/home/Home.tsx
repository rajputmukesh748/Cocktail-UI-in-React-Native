import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {Colors} from '../../assets/Colors';
import HomeHeader from './HomeHeader';

function Home(): JSX.Element {
  return (
    <View style={styles.body}>
      <HomeHeader />
      <FlatList
        style={styles.listView}
        data={data}
        renderItem={item => {
          const dataClass = data[item.index];
          return (
            <View style={styles.listBody}>
              <Image
                style={styles.image}
                source={require('../../assets/images/cocktail.webp')}
              />
              <View style={styles.itemView}>
                <Text style={styles.heading}>{dataClass.name}</Text>
                <Text style={styles.description}>{dataClass.description}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors._2c2c2c,
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 8,
  },
  listBody: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors._3d3d3d,
    margin: 10,
  },
  image: {
    width: 140,
    height: 120,
  },
  itemView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  heading: {
    fontSize: 16,
    color: Colors._ffffff,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: Colors._ffffff,
    fontWeight: 'normal',
  },
});

const data = [
  {
    id: 1,
    image: '../../assets/images/cocktail1.webp',
    name: 'Classic cocktails',
    description:
      'These are cocktails that have been around for decades and have become iconic. Examples include the Martini, Manhattan, and Old Fashioned.',
  },
  {
    id: 2,
    image: '../../assets/images/cocktail2.webp',
    name: 'Tiki cocktails',
    description:
      'These are tropical-themed cocktails that became popular in the mid-20th century. Examples include the Mai Tai, Zombie, and Painkiller.',
  },
  {
    id: 3,
    image: '../../assets/images/cocktail3.webp',
    name: 'Highball cocktails',
    description:
      'These are simple mixed drinks that consist of a spirit and a non-alcoholic mixer. Examples include the Gin and Tonic, Rum and Coke, and Vodka Cranberry.',
  },
  {
    id: 4,
    image: '../../assets/images/cocktail4.webp',
    name: 'Frozen cocktails',
    description:
      'These are blended cocktails that contain crushed ice or are blended until smooth. Examples include the Margarita, Daiquiri, and Piña Colada.',
  },
  {
    id: 5,
    image: '../../assets/images/cocktail5.webp',
    name: 'Classic cocktails',
    description:
      'These are cocktails that have been around for decades and have become iconic. Examples include the Martini, Manhattan, and Old Fashioned.',
  },
  {
    id: 6,
    image: '../../assets/images/cocktail6.webp',
    name: 'Tiki cocktails',
    description:
      'These are tropical-themed cocktails that became popular in the mid-20th century. Examples include the Mai Tai, Zombie, and Painkiller.',
  },
  {
    id: 7,
    image: '../../assets/images/cocktail7.webp',
    name: 'Highball cocktails',
    description:
      'These are simple mixed drinks that consist of a spirit and a non-alcoholic mixer. Examples include the Gin and Tonic, Rum and Coke, and Vodka Cranberry.',
  },
  {
    id: 8,
    image: '../../assets/images/cocktail8.webp',
    name: 'Frozen cocktails',
    description:
      'These are blended cocktails that contain crushed ice or are blended until smooth. Examples include the Margarita, Daiquiri, and Piña Colada.',
  },
];

export default Home;
