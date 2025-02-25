import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constant/values';
import Swiper from 'react-native-deck-swiper';
import ViewOverflow from 'react-native-view-overflow';
import { FlashList } from '@shopify/flash-list';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Home = () => {
  const insets = useSafeAreaInsets();

  const paymentCards = ['mPesa', 'PayPal', 'Stripe', 'Banking', 'CashApp'];
  const friends = ['RO', 'SK', 'TN', 'WM', 'RO', 'SO', 'LM', 'DN', 'MS', 'DB'];
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

  console.log(transactions);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
      }}
    >
      {/* TODO
      make it  a touchable opacity
      picture stored in a database
      name stored in a database  */}
      <View style={styles.profileContainer}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: typography.lineHeight.small,
          }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <View>
          <Text
            style={{
              fontWeight: typography.fontWeight.semiBold,
              lineHeight: typography.lineHeight.medium,
              fontSize: typography.fontSize.large + 2,
              letterSpacing: 1,
            }}
          >
            Rooney Okari
          </Text>
          <Text style={{ fontSize: typography.fontSize.medium }}>
            Say hey in a <Text>financial</Text> cool way &#129321;
          </Text>
        </View>
      </View>
      <ViewOverflow style={styles.cardContainer}>
        <Swiper
          cards={paymentCards}
          stackSeparation={2}
          verticalThreshold={200 / 6}
          animateCardOpacity={true}
          cardIndex={0}
          infinite={true}
          backgroundColor={colors.primary[100]}
          verticalSwipe={true}
          showSecondCard={true}
          horizontalSwipe={false}
          stackSize={2}
          onSwipedTop={() => console.log('onSwipedTop')}
          onSwipedBottom={() => console.log('onSwipedBottom')}
          onTapCard={(card) => console.log(card)}
          renderCard={(card) => {
            return (
              <View style={styles.cardLayout}>
                <Text>{card}</Text>
              </View>
            );
          }}
        />
      </ViewOverflow>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontWeight: typography.fontWeight.semiBold,
            fontSize: typography.fontSize.medium,
            lineHeight: typography.lineHeight.large,
            letterSpacing: 1,
          }}
          >
          Send again &#128184;
        </Text>
        <Text
          style={{
            fontSize: typography.fontSize.medium,
            lineHeight: typography.lineHeight.medium,
            letterSpacing: 1,
          }}
        >
          Send funds to your friends
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: typography.lineHeight.small,
            marginBottom: 6,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: typography.lineHeight.small,
            }}
          >
            <TouchableOpacity
              style={{
                width: 68,
                height: 68,
                borderRadius: 34,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary[900],
              }}
              onPress={() => {}}
            >
              <Ionicons name="add" size={42} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: typography.fontSize.medium,
                fontWeight: typography.fontWeight.semiBold,
                marginTop: typography.lineHeight.small - 4,
                alignText: 'center',
                letterSpacing: 1,
              }}
            >
              Add
            </Text>
          </View>
          <FlashList
            data={friends}
            estimatedItemSize={100}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    ...styles.profilecard,
                    backgroundColor: colors.primary[100],
                    backgroundColor: 'red',
                  }}
                >
                  <Text>{item}</Text>
                </View>
                <Text
                  style={{
                    fontSize: typography.fontSize.medium,
                    fontWeight: typography.fontWeight.semiBold,
                    alignText: 'center',
                    marginTop: typography.lineHeight.small - 4,
                    letterSpacing: 1,
                  }}
                >
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={{ width: '100%', height: 700 }}>
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  cardLayout: {
    padding: 20,
    backgroundColor: colors.secondary.light,
    width: '100%',
    height: 200,
    borderRadius: typography.fontSize.xsmall,
    position: 'absolute',
    top: -38,
  },
  cardContainer: {
    paddingHorizontal: 20,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  profilecard: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
