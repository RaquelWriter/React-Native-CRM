import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './reducers';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import stylesFn from '../../components/styles';

const Customers = () => {
  const { navigate } = useNavigation();

  const customers = useSelector((state) => state.customers);
  const onSubmit = () => {
    // TODO
  };
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text>Customers page</Text>
      {Objects.key(customers).map((customer) => (
        <Text key={customer}>{customer}</Text>
      ))}
      <TouchableOpacity onPress={onSubmit}>
        <Text>Create new customer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Customers;
