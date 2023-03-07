import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../assets/Colors';

function Splash(props: any): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.rootView}>
        <Text style={styles.header}>Cocktail Drinks</Text>
        <Text style={styles.tagLine}>
          Enjoy your daily drink and feel relex.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors._2c2c2c,
    alignContent: 'center',
    justifyContent: 'center',
  },
  rootView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors._ffffff,
    marginHorizontal: 20,
  },
  tagLine: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center',
    color: Colors._ffffff,
    marginHorizontal: 20,
  },
});

export default Splash;
