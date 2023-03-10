import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateFields } from '../features/Customers/reducers';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  useEditCustomer,
  useUpdateFields,
  useNewCustomer,
} from '../features/Customers/hooks';
import stylesFn from './styles';

const Form = () => {
  const styles = stylesFn();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const isNewCustomer = !params?.id;
  const id = params?.id || uuidv4();

  const { fields, setFormField } = useUpdateFields();
  const { firstName, lastName, region, active } = useSelector(
    (state) => state.customers.form.fields
  );
  const [disable, setDisable] = useState(true);

  const [isActive, setIsActive] = useState(active);
  const toggleSwitch = () => setIsActive((previousState) => !previousState);
  const handleSwitch = async () => {
    await toggleSwitch();
    setFormField('active', !isActive);
  };

  // Set the customer active from the state
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    firstName && lastName ? setDisable(false) : setDisable(true);
  }, [firstName, lastName]);

  const { regions } = useSelector((state) => state.regions);
  const { onSubmit } = isNewCustomer
    ? useNewCustomer({ id })
    : useEditCustomer({ id });

  // Submit and Clear the form and navigate to another page
  const handleSubmit = async () => {
    isNewCustomer && setFormField('id', id);
    onSubmit();
    dispatch(updateFields({}));
    navigate('Regions');
  };
  return (
    <View style={styles.container}>
      <TextInput
        key={'firstName'}
        label={firstName}
        value={firstName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('firstName', v)}
      />
      <TextInput
        key={'lastName'}
        label={lastName}
        value={lastName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('lastName', v)}
      />
      <View style={styles.formPicker}>
        <Picker
          selectedValue={region}
          onValueChange={(v) => setFormField('region', v)}
        >
          {regions.map((region) => (
            <Picker.Item key={region} label={region} value={region} />
          ))}
        </Picker>
      </View>
      <View>
        <Text>Active: </Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#ebf6ff' }}
        thumbColor={isActive ? '#767577' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={handleSwitch}
        value={isActive}
      ></Switch>
      <TouchableOpacity
        disabled={disable}
        style={Object.assign(
          {},
          styles.buttons,
          disable ? styles.buttonDisable : styles.buttonCreate
        )}
        onPress={handleSubmit}
      >
        <Text style={disable ? styles.textButtonDisable : styles.textButton}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
