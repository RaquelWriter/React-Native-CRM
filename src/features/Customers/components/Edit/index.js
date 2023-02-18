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
import { useResetForm } from '../../hooks';
import Form from '../../../../components/Form';
import stylesFn from './styles';

// Displays a form for creating a user or editing a user
// Update the store with the customer data for the form fields
// Receive params from Customers/components/ListByRegion/Row.js
// params: {id, firstName, lastName, region}

const Edit = () => {
  useResetForm();
  const dispatch = useDispatch();
  const styles = stylesFn();
  const { params } = useRoute();

  useEffect(() => {
    dispatch(actions.updateFields(params));
  }, []);

  const estadoActual = useSelector((state) => {
    return state;
  });
  console.log('ESTADO ACTUAL: ', estadoActual, 'PARAMS: ', params);
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

export default Edit;
