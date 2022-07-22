import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Title</Text>
      <View style={styles.image}>
        <Image source={require('../assets/images/video.png')} />
      </View>
      <Text style={{marginTop: 35, marginHorizontal: 10, fontSize: 15}}>
        Here is some example text that may answer an FAQ or give the user some
        helpful advice
      </Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: 35,
    marginHorizontal: 10,
  },
  image: {
    alignItems: 'center',
    marginTop: 35,
    justifyContent: 'center',
    display: 'flex',
  },
});
