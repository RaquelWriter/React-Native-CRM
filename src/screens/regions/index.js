import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Regions from '../../features/Regions';

// top level display component only - declares a view that will be part of navigation
const RegionsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Regions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegionsScreen;
