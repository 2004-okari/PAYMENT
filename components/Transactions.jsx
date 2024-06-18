import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { colors, typography } from '../constant/values';
import { FlashList } from '@shopify/flash-list';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-gifted-charts';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Transactions = () => {
  const transactions = [
    {
      paymentCard: 'mPesa',
      friend: 'RO',
      amount: '120.50',
      note: 'Payment for groceries',
      status: 'successful',
      timestamp: '2023-04-15T14:32:00Z',
    },
    {
      paymentCard: 'PayPal',
      friend: 'SK',
      amount: '50.00',
      note: 'Loan repayment',
      status: 'pending',
      timestamp: '2023-05-20T10:15:00Z',
    },
    {
      paymentCard: 'Stripe',
      friend: 'TN',
      amount: '75.75',
      note: 'Gift',
      status: 'failed',
      timestamp: '2023-03-10T09:45:00Z',
    },
    {
      paymentCard: 'Banking',
      friend: 'WM',
      amount: '200.00',
      note: 'Dinner',
      status: 'successful',
      timestamp: '2023-06-22T18:20:00Z',
    },
    {
      paymentCard: 'CashApp',
      friend: 'RO',
      amount: '300.30',
      note: 'Rent',
      status: 'pending',
      timestamp: '2023-02-28T07:50:00Z',
    },
    {
      paymentCard: 'mPesa',
      friend: 'SO',
      amount: '120.50',
      note: 'Utilities',
      status: 'successful',
      timestamp: '2023-04-25T16:30:00Z',
    },
    {
      paymentCard: 'PayPal',
      friend: 'LM',
      amount: '450.00',
      note: 'Subscription',
      status: 'failed',
      timestamp: '2023-01-18T12:10:00Z',
    },
    {
      paymentCard: 'Stripe',
      friend: 'DN',
      amount: '220.40',
      note: 'Purchase',
      status: 'successful',
      timestamp: '2023-07-30T11:45:00Z',
    },
    {
      paymentCard: 'Banking',
      friend: 'MS',
      amount: '330.75',
      note: 'Travel expenses',
      status: 'pending',
      timestamp: '2023-03-05T08:25:00Z',
    },
    {
      paymentCard: 'CashApp',
      friend: 'DB',
      amount: '115.60',
      note: 'Miscellaneous',
      status: 'successful',
      timestamp: '2023-08-12T14:50:00Z',
    },
    {
      paymentCard: 'mPesa',
      friend: 'RO',
      amount: '180.90',
      note: 'Gift',
      status: 'pending',
      timestamp: '2023-09-23T17:30:00Z',
    },
    {
      paymentCard: 'PayPal',
      friend: 'SK',
      amount: '210.20',
      note: 'Dinner',
      status: 'failed',
      timestamp: '2023-10-11T20:15:00Z',
    },
    {
      paymentCard: 'Stripe',
      friend: 'TN',
      amount: '500.00',
      note: 'Rent',
      status: 'successful',
      timestamp: '2023-11-07T15:40:00Z',
    },
    {
      paymentCard: 'Banking',
      friend: 'WM',
      amount: '95.00',
      note: 'Utilities',
      status: 'pending',
      timestamp: '2023-12-14T09:10:00Z',
    },
    {
      paymentCard: 'CashApp',
      friend: 'RO',
      amount: '310.50',
      note: 'Subscription',
      status: 'successful',
      timestamp: '2023-01-25T11:20:00Z',
    },
    {
      paymentCard: 'mPesa',
      friend: 'SO',
      amount: '220.10',
      note: 'Purchase',
      status: 'failed',
      timestamp: '2023-02-22T13:05:00Z',
    },
    {
      paymentCard: 'PayPal',
      friend: 'LM',
      amount: '130.45',
      note: 'Travel expenses',
      status: 'successful',
      timestamp: '2023-03-19T14:55:00Z',
    },
    {
      paymentCard: 'Stripe',
      friend: 'DN',
      amount: '450.60',
      note: 'Miscellaneous',
      status: 'pending',
      timestamp: '2023-04-08T16:35:00Z',
    },
    {
      paymentCard: 'Banking',
      friend: 'MS',
      amount: '290.90',
      note: 'Payment for groceries',
      status: 'successful',
      timestamp: '2023-05-13T12:40:00Z',
    },
    {
      paymentCard: 'CashApp',
      friend: 'DB',
      amount: '110.00',
      note: 'Loan repayment',
      status: 'failed',
      timestamp: '2023-06-16T18:10:00Z',
    },
  ];

  const barData = [
    { value: 250, label: 'M' },
    { value: 500, label: 'T', frontColor: '#177AD5' },
    { value: 845, label: 'W', frontColor: '#177AD5' },
    { value: 320, label: 'T' },
    { value: 600, label: 'F', frontColor: '#177AD5' },
    { value: 256, label: 'S' },
    { value: 300, label: 'S' },
  ];

  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        width: '100%',
        paddingTop: insets.top + 10,
        backgroundColor: colors.primary[100],
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{ paddingHorizontal: 20, paddingBottom: 32 }}>
        <View
          style={{
            width: '100%',
            height: 200,
            padding: 20,
            backgroundColor: colors.tertiary.success[900],
            borderRadius: typography.fontSize.xsmall,
          }}
        >
          <Text>MPesa</Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#fff',
          paddingTop: 32,
          paddingBottom: -32,
        }}
      >
        <LinearGradient colors={['transparent']} style={{ height: 260 }}>
          <BarChart
            barWidth={28}
            noOfSections={3}
            barBorderRadius={4}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            dashGap={0}
            spacing={16}
            // showYAxisIndices
            // showXAxisIndices
            isAnimated
          />
        </LinearGradient>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: '100%',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '6%',
        }}
      >
        <TouchableOpacity
          style={{
            width: '47%',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: typography.fontSize.xsmall,
            backgroundColor: colors.tertiary.success[800],
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: typography.fontWeight.semiBold,
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.large,
              letterSpacing: 1,
            }}
          >
            Add Friend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '47%',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: typography.fontSize.xsmall,
            backgroundColor: colors.primary[800],
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: typography.fontWeight.semiBold,
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.large,
              letterSpacing: 1,
            }}
          >
            Transaction List
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', backgroundColor: '#fff' }}>
        <FlashList
          data={transactions}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
          vertical
          renderItem={({ item }) => {
            console.log(item);
            return (
              // ToDo
              // Limit the characters in the notes ,
              // images from DrawerLayoutAndroidBase(try using custom avatars)
              // alternate image view when there is no transaction list
              <View
                style={{
                  backgroundColor: colors.primary[100],
                  width: '100%',
                  height: 160,
                  paddingHorizontal: 20,
                  paddingBottom: 10,
                  paddingTop: 20,
                  marginBottom: 4,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: typography.lineHeight.small,
                      backgroundColor: colors.primary[900],
                    }}
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontWeight: typography.fontWeight.semiBold,
                        lineHeight: typography.lineHeight.medium,
                        fontSize: typography.fontSize.large,
                        letterSpacing: 1,
                      }}
                    >
                      {item.friend}
                    </Text>
                    <Text
                      style={{
                        fontSize: typography.fontSize.medium,
                        lineHeight: typography.lineHeight.medium,
                        letterSpacing: 1,
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontWeight: typography.fontWeight.semiBold,
                        lineHeight: typography.lineHeight.large,
                        fontSize: typography.fontSize.large,
                        letterSpacing: 1,
                      }}
                    >
                      {item.note}
                    </Text>
                    <Text
                      style={{
                        fontSize: typography.fontSize.medium,
                        lineHeight: typography.lineHeight.medium,
                        letterSpacing: 1,
                      }}
                    >
                      {item.status}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        letterSpacing: 1,
                        fontSize: typography.fontSize.xlarge + 4,
                        fontWeight: typography.fontWeight.semiBold,
                        letterSpacing: 1,
                      }}
                    >
                      ${item.amount}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
