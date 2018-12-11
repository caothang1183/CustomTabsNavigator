import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomeTabs from './CustomTabs';

export default class App extends React.Component {
  render() {
    return (
      <CustomeTabs />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
