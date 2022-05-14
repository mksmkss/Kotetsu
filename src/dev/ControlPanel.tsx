import * as React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 5,
  },
});

interface ControlPanelProps {

}

const ControlPanel = (props: ControlPanelProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => AsyncStorage.removeItem('NavState_Key')}>
        <Text>Clear NavState</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ControlPanel;
