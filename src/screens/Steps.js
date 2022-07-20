import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CarouselCard from '../components/CarouselCard.js';
import {general} from '../components/data.js';

const Steps = ({navigation, route}, props) => {
  const {category} = route.params;
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        {category !== null && <CarouselCard data={general[category]} />}
      </View>
    </SafeAreaView>
  );
};

export default Steps;
