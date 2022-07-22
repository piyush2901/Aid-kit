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
      <View style={{marginTop: 35}}>
        <Text style={styles.headerText}>Select from various options</Text>
        <View
          style={{
            marginTop: 15,
            padding:5,
            marginHorizontal:10,
          }}>
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
      </View>
    </View>
  );
};

export default Kits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
    color: '#000',
    alignSelf: 'center',
  },
  kitCard: {
    backgroundColor: '#0C75C8',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'space-around',
    height: 120,
    marginTop: 20,
  },
  kitText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
});
