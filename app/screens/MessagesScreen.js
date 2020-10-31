import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text';

function MessagesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>"Messages"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default MessagesScreen;