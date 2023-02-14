import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Row = ({ item }) => {
  console.log('DENTRO DE ROW: ', item);
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('Edit customer', { customerID: item.id })}
    >
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={'id'}>ID: {item.id}</Text>
        <Text key={'re'}>Region: {item.region}</Text>
        <Text key={'fn'}>First Name: {item.firstName}</Text>
        <Text key={'ln'}>Last Name: {item.lastName}</Text>
        <Text key={'ac'}>Active: {item.active}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
