import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import Row from './Row';
import * as actions from '../../reducers';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Item,
  Button,
  TouchableOpacity,
} from 'react-native';
import stylesFn from '../../../../components/styles';
import ButtonAddCustomer from '../../../../components/ButtonAddCustomer';

const cosa = [
  {
    id: '5c9qojr2d1738zlx09afby',
    firstName: 'Adam',
    lastName: 'Sandler',
    active: 'true',
    region: 'South West',
  },
  {
    id: 'f4xzgapq7mu783k9t02ghx',
    firstName: 'John',
    lastName: 'Cusack',
    active: 'false',
    region: 'North West',
  },
];
const ListByRegion = () => {
  const { params } = useRoute();
  const { region } = params;
  if (!region) return null;
  console.log('REGION: ', region);
  const navigate = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);

  const customers = useSelector((state) => {
    console.log('DENTRO DE SELECTOR: ', state.customers.customers);
    return state.customers.customers;
  });
  console.log('Customers data Fuera DE SELECTOR: ', customers);
  const filteredCustomers = customers.filter(
    (customer) => customer.region === region
  );

  console.log('FILTERED CUSTOMERS: ', filteredCustomers);
  const onSubmit = () => {
    // TODO
  };
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{region} customers</Text>
      {filteredCustomers.length > 0 ? (
        <Text style={styles.h2}>Touch box to edit</Text>
      ) : null}
      {filteredCustomers.length > 0 ? (
        <FlatList
          data={filteredCustomers}
          renderItem={(item) => <Row {...item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text style={styles.h1}>No Customers</Text>
        </>
      )}
      <ButtonAddCustomer />
    </View>
  );
};

export default ListByRegion;
