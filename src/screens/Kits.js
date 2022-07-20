import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Button,
} from 'react-native';
import {kit} from '../components/data';

const Kits = ({navigation}) => {
  return (
    <View style={styles.container}>
      {kit &&
        kit.map((val, index) => {
          return (
            <TouchableOpacity
              style={styles.kitCard}
              key={index}
              onPress={() => navigation.navigate('KitInfo')}>
              <Image source={val.imgUrl} alt="Kit Image" />
              <Text style={styles.kitText}>{val.name}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default Kits;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    flexDirection: 'column',
    display: 'flex',
  },
  kitCard: {
    backgroundColor: '#0C75C8',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: 310,
    justifyContent: 'space-around',
    height: 120,
    marginTop: 25,
    borderRadius:5,
  },
  kitText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
});
