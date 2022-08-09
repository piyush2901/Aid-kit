import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Emergency = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 97, fontSize: 22}}>
        National emergency helpline number : 112
      </Text>
      <TouchableOpacity style={styles.callbtn}>
        <Image source={require('../assets/images/phone.png')} />
        <Text style={{color: '#FFF', fontSize: 15}}>CALL NOW</Text>
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', marginTop: 30}}>OR</Text>
      <Text style={{marginTop: 30, fontSize: 22}}>
        Add your favourite contacts to connect in an emergency
      </Text>
      <TouchableOpacity style={styles.addbtn}>
        <Image source={require('../assets/images/star.png')} />
        <Text style={{color: '#FFF', fontSize: 15}}>ADD FAVOURITES</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  callbtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#2196F3',
    marginTop: 20,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
    elevation: 3,
    borderRadius: 5,
  },
  addbtn: {
    flexDirection: 'row',
    width: 180,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
});
