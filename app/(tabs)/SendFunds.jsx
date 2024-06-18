import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { route } from 'expo-router';
import { colors, typography } from '../../constant/values';

const Funds = () => {
  const insets = useSafeAreaInsets();

  const managers = [
    {
      name: 'mPesa',
      link: '/link/mpesa',
    },
    {
      name: 'PayPal',
      link: '/link/paypal',
    },
    {
      name: 'banking',
      link: '/link/banking',
    },
    {
      name: 'cashapp',
      link: '/link/cashapp',
    },
    {
      name: 'stripe',
      link: '/link/stripe',
    },
  ];
  return (
    <View
      style={{
        width: '100%',
        paddingTop: insets.top,
      }}
    >
      <View>
        <Text>Manage</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '100%', height: 500 }}>
        {managers.map((manage) => {
          return (
            <TouchableOpacity onPress={() => route.navigate(manage.link)}>
              <Text>{manage.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const SendFunds = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default SendFunds;

const styles = StyleSheet.create({});
