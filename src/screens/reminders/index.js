import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Reminders from '../../features/Reminders';

// top level display component only - declares a view that will be part of navigation
const RemindersScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Reminders />
    </ScrollView>
  </SafeAreaView>
);

export default RemindersScreen;
