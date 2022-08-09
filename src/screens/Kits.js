import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {kit} from '../components/data';

const Kits = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 35}}>
        <Text style={styles.headerText}>Select from various options</Text>
        <View
          style={{
            marginTop: 15,
            padding: 5,
            marginHorizontal: 10,
          }}>
          {kit &&
            kit.map((val, index) => {
              return (
                <TouchableOpacity
                  style={styles.kitCard}
                  key={index}
                  onPress={() => {
                    let nav = '';
                    if (val.type === 'vehiclekit') {
                      nav = 'VehicleKits';
                    } else if (val.type === 'travelkit') {
                      nav = 'TravelKits';
                    } else {
                      nav = 'KitInfo';
                    }
                    navigation.navigate(nav, {oftype: val.type});
                  }}>
                  <Image
                    source={val.imgUrl}
                    alt="Kit Image"
                    style={styles.kitImage}
                  />
                  <Text style={styles.kitText}>{val.name}</Text>
                  <Text style={styles.kitDesc}>{val.desc}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </ScrollView>
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
    height: 160,
    marginTop: 20,
  },
  kitText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    position: 'absolute',
    width: 200,
    height: 30,
    left: 122,
    top: 18,
  },
  kitDesc: {
    color: 'white',
    fontSize: 12.5,
    fontWeight: '400',
    position: 'absolute',
    textAlign: 'justify',
    width: 195,
    height: 90,
    left: 122,
    top: 56,
  },
  kitImage: {
    position: 'absolute',
    width: 94.77,
    height: 106,
    left: 20,
    top: 26,
  },
});
