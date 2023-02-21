import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { clear } from '../../utilities/async_storage';
import { loadCustomers } from '../Customers/reducers';
import { loadRegions } from '../Regions/reducers';
import stylesFn from '../../components/styles';

const Welcome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomers());
    dispatch(loadRegions());
  }, [dispatch]);

  const clearStorage = async () => {
    await clear();
  };
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>WELCOME TO THE CRM</Text>
      <Text style={styles.h1}>You are doing great!</Text>
      <TouchableOpacity style={styles.buttons} onPress={clearStorage}>
        <Text style={styles.textButton}>Clear Storage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
