import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Medicines = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Title</Text>
      <View style={styles.image}>
        <Image source={require('../assets/images/video.png')} />
      </View>
    </View>
  );
};

export default Medicines;

const styles = StyleSheet.create({
  container: {
    padding:5,
    margin: 5,
  },
  header: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: 5,
  },
  image: {
    alignItems: 'center',
    marginTop:50,
    justifyContent: 'center',
    display: 'flex',
  },
});
