import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import stylesFn from '../../../../components/styles';
import Form from '../../../../components/Form';
import { useDispatch } from 'react-redux';
import { resetForm } from '../../reducers';
import { useFocusEffect } from '@react-navigation/native';

// Displays a form for creating a user or editing a user

const New = () => {
  const dispatch = useDispatch();
  const styles = stylesFn();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetForm());
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text>Add new customer</Text>
      <Form />
    </View>
  );
};

export default New;
