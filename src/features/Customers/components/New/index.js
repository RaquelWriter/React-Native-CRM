import React from 'react';
import { View, Text } from 'react-native';
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
      <Text style={styles.h1}>Add new customer</Text>
      <Form />
    </View>
  );
};

export default New;
