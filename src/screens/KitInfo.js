import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {kitItems} from '../components/data';
import {Progress, Center, Box, NativeBaseProvider} from 'native-base';
export default function KitInfo() {
  const [items, setItems] = useState(kitItems);

  const renderFlatList = renderData => {
    return (
      <FlatList
        data={renderData}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <CheckBox
              value={item.isChecked}
              onValueChange={() => {
                handleChange(item.id);
              }}
            />
            <Text>{item.txt}</Text>
          </View>
        )}
      />
    );
  };

  const handleChange = id => {
    let temp = items.map(item => {
      if (id === item.id) {
        return {...item, isChecked: !item.isChecked};
      }
      return item;
    });
    setItems(temp);
  };

  let selected = items.filter(item => item.isChecked);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Select the items to include in your kit
        </Text>
        <Progress value={selected.length*100/items.length} mx="4" _filledTrack={{
          bg: "lime.500"}} style={{marginTop:25,marginBottom:0}}/>
        <View style={{marginTop:25}}>{renderFlatList(items)}</View>
        <Text style={{textAlign: 'center'}}>Selected Items </Text>
        <View>{renderFlatList(selected)}</View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    padding: 5,
    margin: 5,
  },
  headerText: {
    fontSize: 20,
    marginTop: 15,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
