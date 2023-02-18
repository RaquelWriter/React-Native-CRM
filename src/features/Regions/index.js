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
import ButtonAddCustomer from '../../components/ButtonAddCustomer';
import stylesFn from '../../components/styles';

// Allows users to select their region and navigate to the Customer screen.
// Displays a button for creating a new user that links to the customer
// create view.
const Regions = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadRegions());
  }, [dispatch]);

  const regions = useSelector((state) => state.regions.regions);
  const onSubmit = () => {
    // TODO
  };
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Find customers by region</Text>
      {regions.map((region) => (
        <TouchableOpacity
          style={styles.buttons}
          key={region}
          onPress={() => navigate('Customers', { region })}
        >
          <Text style={styles.textButton} key={region}>
            {region}
          </Text>
        </TouchableOpacity>
      ))}
      <ButtonAddCustomer />
    </View>
  );
};

export default Regions;
