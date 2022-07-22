import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Disclaimer from '../components/Disclaimer';
import {homeCards} from '../components/data';
import {features} from '../components/data';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
              <Text style={{fontWeight: 'bold', color: '#000'}}>View All</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginTop: 15,
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
        <View
          style={{
            alignItems: 'flex-end',
            marginHorizontal: 10,
            marginTop: 40,
            padding: 5,
          }}>
          <TouchableOpacity
            style={styles.callbtn}
            onPress={() => navigation.navigate('Emergency')}>
            <View style={styles.callIcon}>
              <Image
                source={require('../assets/images/call.png')}
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
    fontWeight: '600',
    fontFamily: 'Raleway-SemiBold',
    marginTop: 25,
    color: '#000',
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
    color: '#000',
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
    backgroundColor: '#32C80C',
    width: 55,
    height: 55,
    borderRadius: 55,
    elevation: 2,
  },
  callIcon: {
    alignSelf: 'center',
  },
});
