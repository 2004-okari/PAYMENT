import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const index = () => {
  React.useEffect(() => {
    setTimeout(() => {
      router.replace('/(tabs)/Home');
    }, 100);
  });
  return (
    <View style={{ ...styles.container }}>
      <Text>index</Text>
      <TouchableOpacity
        style={{ marginTop: 80 }}
        onPress={() => router.replace('/(tabs)/ManageFunds')}
      >
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
