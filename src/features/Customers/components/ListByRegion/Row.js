import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesFn from '../../../../components/styles';

const Row = ({ item }) => {
  const styles = stylesFn();
  console.log('DENTRO DE ROW: ', item, 'item.active: ', item.active);
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate('Edit customer', {
          id: item.id,
          /* firstName: item.firstName,
          lastName: item.lastName,
          region: item.region, */
        })
      }
    >
      <View key={item.id} style={styles.row}>
        <Text key={'id'}>ID: {item.id}</Text>
        <Text key={'re'}>Region: {item.region}</Text>
        <Text key={'fn'}>First Name: {item.firstName}</Text>
        <Text key={'ln'}>Last Name: {item.lastName}</Text>
        <Text key={'ac'}>Active: {item.active ? 'YES' : 'NO'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
