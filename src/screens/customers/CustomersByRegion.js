import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import ListByRegion from '../../features/Customers/components/ListByRegion';
import stylesFn from '../../components/styles';

// top level display component only - declares a view that will be part of navigation
const styles = stylesFn();
const CustomersByRegionScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <ListByRegion />
  </SafeAreaView>
);

export default CustomersByRegionScreen;
