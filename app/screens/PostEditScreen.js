import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text';

function PostEdit(props) {
  return (
    <View style={styles.container}>
      <Text>"Post edit screen"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default PostEdit;