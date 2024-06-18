import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constant/values';

const ManageFunds = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={{ backgroundColor: colors.primary[100], paddingBottom: 64 }}
    >
      <View
        style={{
          padding: 20,
          paddingTop: insets.top,
          backgroundColor: '#fff',
        }}
      >
        <Text
          style={{
            fontWeight: typography.fontWeight.semiBold,
            lineHeight: typography.lineHeight.medium,
            fontSize: typography.fontSize.large + 2,
            letterSpacing: 1,
            textAlign: 'center',
          }}
        >
          ManageFunds
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.paymentText}>M-PESA</Text>
        <View style={styles.containerLayout}>
          <View style={styles.cardLayout}>
            <Text>Send Money</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Lipa na M-PESA</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Mpesa Global</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Add Friend</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Buy airtime</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Transaction List</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.paymentText}>PayPal</Text>
        <View style={styles.containerLayout}>
          <View style={styles.cardLayout}>
            <Text>Send Money</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>PayPal M-PESA</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Add Friend</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Transaction List</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.paymentText}>Banking</Text>
        <View style={styles.containerLayout}>
          <View style={styles.cardLayout}>
            <Text>Send Money</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Bank Transfer</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Add Friend</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Transaction List</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.paymentText}>CashApp</Text>
        <View style={styles.containerLayout}>
          <View style={styles.cardLayout}>
            <Text>Send Money</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Add Friend</Text>
          </View>
          <View style={styles.cardLayout}>
            <Text>Transaction List</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ManageFunds;

const styles = StyleSheet.create({
  cardLayout: {
    width: '31.333%',
    height: 100,
    backgroundColor: colors.primary[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary[500],
  },
  paymentText: {
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.medium,
    fontSize: typography.fontSize.large,
    letterSpacing: 1,
    marginBottom: 12,
  },
  containerLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: colors.primary[100],
    gap: '10%',
    backgroundColor: 'yellow',
  },
});
