import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import New from '../../features/Customers/components/New';

// top level display component only - declares a view that will be part of navigation
const CustomerNewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New />
    </ScrollView>
  </SafeAreaView>
);

export default CustomerNewScreen;
