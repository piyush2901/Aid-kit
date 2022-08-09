import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CarouselCard from '../components/CarouselCard.js';
import {general} from '../components/data.js';

const Steps = ({navigation, route}, props) => {
  const {category} = route.params;
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50,backgroundColor:'#FFF'}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',marginTop:10}}>
        {category !== null && <CarouselCard data={general[category]} />}
      </View>
    </SafeAreaView>
  );
};

export default Steps;
