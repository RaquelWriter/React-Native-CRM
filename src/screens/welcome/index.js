import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Welcome from '../../features/Welcome';

// top level display component only - declares a view that will be part of navigation
const WelcomeScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Welcome />
    </ScrollView>
  </SafeAreaView>
);

export default WelcomeScreen;
