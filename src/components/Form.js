import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { useEditCustomer, useUpdateFields } from '../features/Customers/hooks';
import stylesFn from './styles';

const Form = ({ disabled = false }) => {
  const styles = stylesFn();
  const { params } = useRoute();
  const { id } = params;
  const { fields, setFormField } = useUpdateFields();
  //const { firstName, lastName, region } = fields;
  // const {
  //     common_name,
  //     scientific_name,
  //     description,
  //     endangered_status,
  //     population,
  //     invasive
  // } = fields
  const { firstName, lastName, region } = useSelector(
    (state) => state.customers.form.fields
  );
  const storeNow = useSelector((state) => state);
  console.log(
    'customerID to edit: ',
    id,
    'PARAMS: ',
    params,
    'Store: ',
    storeNow
  );
  const { onSubmit } = useEditCustomer({ id });
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Customer ID: {id}</Text>
      <TextInput
        key={'firstName'}
        placeholder={firstName}
        value={firstName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('firstName', v)}
      />
      <TextInput
        key={'lastName'}
        placeholder={lastName}
        value={lastName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('lastName', v)}
      />
      <TextInput
        key={'region'}
        placeholder={region}
        value={region || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('region', v)}
      />
      <TouchableHighlight onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableHighlight>

      {/* <TextInput
        key={'common_name'}
        placeholder='Common Name'
        value={common_name || ''}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField('common_name', v)}
      />

      <View style={{ height: 15, width: '100%' }}></View>

      <TextInput
        key={'scientific_name'}
        placeholder='Scientific Name'
        value={scientific_name || ''}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField('scientific_name', v)}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Form;
