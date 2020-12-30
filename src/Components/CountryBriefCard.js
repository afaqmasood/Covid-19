import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';

const CountryBriefCard = ({data: {name, cases, deaths}}) => {
  return (
    <Surface style={styles.surface}>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.view}>
        <Text style={styles.text}>Confirmed Cases:</Text>
        <Text style={[styles.text, {color: 'grey'}]}>{cases}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Deaths:</Text>
        <Text style={[styles.text, {color: 'blue'}]}>{deaths}</Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    marginTop: 35,
    padding: 30,
    height: '18%',
    width: '80%',
    elevation: 10,
    borderRadius: 25,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
  },
  view: {
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {alignSelf: 'center', fontSize: 24, marginBottom: 40},
});

export default CountryBriefCard;
