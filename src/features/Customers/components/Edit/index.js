import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as actions from '../../reducers';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Form from '../../../../components/Form';
import stylesFn from './styles';

// Displays a form for creating a user or editing a user
// Update the store with the customer data for the form fields
// Receive params from Customers/components/ListByRegion/Row.js
// params: {id, firstName, lastName, region}

const Edit = () => {
  const dispatch = useDispatch();
  const styles = stylesFn();
  const { params } = useRoute();
  const { id } = params;
  useEffect(() => {
    dispatch(actions.updateFields(customer));
  }, [dispatch]);

  const customer = useSelector((state) => {
    return state.customers.customers.find((c) => c.id === id);
  });
  console.log('CUSTOMER TO EDIT :', customer);

  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

export default Edit;
