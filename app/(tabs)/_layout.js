import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs, useRouter } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const _layout = () => {
  const route = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'hsla(212, 25%, 10%, 5)',
          position: 'absolute',
          bottom: 35,
          height: 60,
          left: 50,
          right: 50,
          borderRadius: 35,
        },
        showLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="home" size={size} color={color} />;
        },
      }}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="ManageFunds" />
      <Tabs.Screen name="SendFunds" />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
