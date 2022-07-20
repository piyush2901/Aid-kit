import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Disclaimer from '../components/Disclaimer';
import {homeCards} from '../components/data';
import {features} from '../components/data';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#DDF6FE', height: '100%'}}>
      <ScrollView>
        <Disclaimer />
        <View style={{paddingHorizontal: 15}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Get Treatment fast !</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text style={styles.containerText}>Basic First Aids</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                padding: 5,
              }}>
              {homeCards &&
                homeCards.map((val, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Steps', {category: val.tag})
                      }
                      key={index}
                      style={styles.card}>
                      <Image
                        source={val.imgUrl}
                        style={styles.cardImage}
                        alt="Steps"
                      />
                      <Text style={styles.cardText}>{val.title}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 5,
                height: '13%',
                shadowColor: '#ccc',
                shadowOpacity: 0.5,
                elevation: 10,
                shadowOffset: {width: 0, height: 3},
                backgroundColor: 'white',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              onPress={() => navigation.navigate('Categories')}>
              <Text style={{fontWeight: 'bold'}}>View All</Text>
              {/*<Icon
                name="arrow-forward"
                size={15}
                style={{marginVertical: 2}}
            />*/}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            {features &&
              features.map((val, index) => {
                return (
                  <TouchableOpacity
                    style={styles.category}
                    key={index}
                    onPress={() => navigation.navigate(val.nav)}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <Image source={val.imgUrl} alt="features image" />
                      <Text
                        style={{
                          marginTop: 15,
                          fontFamily: 'Roboto',
                          color: 'white',
                          fontSize: 18,
                        }}>
                        {val.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
        <View style={{alignItems: 'flex-end', marginRight: 10, marginTop: 40}}>
          <TouchableOpacity
            style={styles.callbtn}
            onPress={() => navigation.navigate('Emergency')}>
            <View style={styles.callIcon}>
              <Image
                source={require('../assets/images/phone.png')}
                style={{marginTop: 12.5}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 25,
    color: '#1986EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: 20,
    borderRadius: 10,
    height: 260,
    backgroundColor: '#0C75C8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    height: 75,
    borderRadius: 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  cardText: {
    color: '#04429F',
    margin: 5,
  },
  cardImage: {
    alignItems: 'center',
    marginTop: 5,
  },
  category: {
    backgroundColor: '#0C75C8',
    borderRadius: 5,
    width: '47%',
    height: 168,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  callbtn: {
    backgroundColor: '#0C75C8',
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  callIcon: {
    alignSelf: 'center',
  },
});
