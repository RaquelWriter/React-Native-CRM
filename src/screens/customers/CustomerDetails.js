import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Details from '../../features/Customers/components/Details';

// top level display component only - declares a view that will be part of navigation
const CustomerDetailsScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Details />
    </ScrollView>
  </SafeAreaView>
);

export default CustomerDetailsScreen;
