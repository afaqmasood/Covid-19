import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';

const SummaryDetailCard = ({
  summary: {
    Country,
    Date,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) => {
  return (
    <Surface style={styles.surface}>
      <Text style={styles.header}>{Country}</Text>
      <View style={styles.view}>
        <Text style={styles.text}>Date:</Text>
        <Text style={[styles.text, {color: 'indigo'}]}>
          {/* {Date.split('T')[0].split('-').reverse().join('-')} */}
          {Date.split('T')[0].split('-').reverse().join('/')}
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>New Confirmed:</Text>
        <Text style={[styles.text, {color: 'grey'}]}>{NewConfirmed}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Total Confirmed:</Text>
        <Text style={[styles.text, {color: 'grey'}]}>{TotalConfirmed}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>New Deaths:</Text>
        <Text style={[styles.text, {color: 'red'}]}>{NewDeaths}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Total Deaths:</Text>
        <Text style={[styles.text, {color: 'red'}]}>{TotalDeaths}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>New Recovered:</Text>
        <Text style={[styles.text, {color: 'green'}]}>{NewRecovered}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Total Recovered:</Text>
        <Text style={[styles.text, {color: 'green'}]}>{TotalRecovered}</Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 30,
    height: '40%',
    width: '80%',
    elevation: 10,
    alignSelf: 'center',
    marginTop: 35,
    borderRadius: 30,
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  view: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {alignSelf: 'center', fontSize: 24, marginBottom: 35},
});

export default SummaryDetailCard;
