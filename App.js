import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nochange from "./subscreens/nochanges";
import Change from "./subscreens/changes";
import Boilerplate1 from "./subscreens/BoilerPlate1";
import Boilerplate2 from "./subscreens/BoilerPlate2";

export default function App() {
  return (
    <Change />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
