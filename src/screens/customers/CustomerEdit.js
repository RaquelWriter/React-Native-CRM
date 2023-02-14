import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Edit from '../../features/Customers/components/Edit';

// top level display component only - declares a view that will be part of navigation
const CustomerEditScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Edit />
    </ScrollView>
  </SafeAreaView>
);

export default CustomerEditScreen;
