import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';

const DayDetailCard = ({
  margin,
  title,
  data: {Date, Confirmed, Deaths, Recovered, Active},
}) => {
  return (
    <Surface style={[styles.surface, {marginTop: margin}]}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.view}>
        <Text style={styles.text}>Date:</Text>
        <Text style={[styles.text, {color: 'indigo'}]}>
          {/* {Date.split('T')[0].split('-').reverse().join('-')} */}
          {Date.split('T')[0].split('-').reverse().join('/')}
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Confirmed:</Text>
        <Text style={[styles.text, {color: 'grey'}]}>{Confirmed}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Deaths:</Text>
        <Text style={[styles.text, {color: 'red'}]}>{Deaths}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Recovered:</Text>
        <Text style={[styles.text, {color: 'green'}]}>{Recovered}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Active:</Text>
        <Text style={[styles.text, {color: 'orange'}]}>{Active}</Text>
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
    borderRadius: 30,
    alignSelf: 'center',
    flex: 1,
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

export default DayDetailCard;
