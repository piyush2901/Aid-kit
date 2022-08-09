import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {kitTypes} from '../components/data';
import {Progress, NativeBaseProvider} from 'native-base';

export default function KitInfo({navigation, route}, props) {
  const {oftype} = route.params;
  const [items, setItems] = useState(kitTypes[oftype]);
  const [checkedItems, setCheckedItems] = useState([]);

  const renderFlatList = (renderData, checked) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({item}) => (
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={!checked}
              onValueChange={() => {
                handleChange(item, checked);
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                color: 'black',
              }}>
              {item.txt}
            </Text>
          </View>
        )}
      />
    );
  };

  const handleChange = (selected, checked) => {
    if (checked) {
      let var1 = items.filter(item => item != selected);
      setCheckedItems(items => [...items, selected]);
      setItems(var1);
    } else {
      let var1 = checkedItems.filter(item => item != selected);
      setItems(items => [...items, selected]);
      setCheckedItems(var1);
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>
          Choose the items that you want to include in your kit
        </Text>
        <Text style={{padding: 5, margin: 10, color: 'black'}}>
          Your kit is {''}
          {Math.floor(
            (checkedItems.length * 100) / (items.length + checkedItems.length),
          )}
          % complete
        </Text>
        <Progress
          value={
            (checkedItems.length * 100) / (items.length + checkedItems.length)
          }
          mx="4"
          _filledTrack={{
            bg: 'lime.500',
          }}
        />
        <View style={{marginTop: 25}}>{renderFlatList(items, true)}</View>
        <Text style={{alignSelf: 'center', margin: 10}}>
          Selected items : {checkedItems.length}
        </Text>
        <View>{renderFlatList(checkedItems, false)}</View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    padding: 5,
    fontFamily: 'Raleway-SemiBold',
    lineHeight: 26,
    marginTop: 35,
    marginHorizontal: 10,
    color: '#000',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});
