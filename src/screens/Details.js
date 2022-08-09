import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';

const Details = ({route}, props) => {
  const {item} = route.params;
  let url = item.link;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={{marginTop: 15, marginHorizontal: 10, fontSize: 15}}>
        {item.desc}
      </Text>
      <Text style={styles.header}>URL</Text>
      <TouchableOpacity
        style={{marginHorizontal: 10}}
        onPress={() => {
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log('URL not supported' + url);
            }
          });
        }}>
        <Text style={{color: '#0C75C8', marginTop: 15}}>{item.link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: 35,
    marginHorizontal: 10,
    color: '#000',
  },
});
