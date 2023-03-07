import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Colors} from '../../assets/Colors';

function HomeHeader(): JSX.Element {
  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Cocktails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    elevation: 2,
  },
  heading: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors._ffffff,
  },
});

export default HomeHeader;
