import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../../constant/values';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const SendMoney = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, backgroundColor: '#fff' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 36,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: typography.fontWeight.semiBold,
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.large,
              letterSpacing: 1,
            }}
          >
            Send to &#128184;
          </Text>
          <Text
            style={{
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.medium,
              letterSpacing: 1,
            }}
          >
            Check before transacting
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary[100],
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: 100,
          backgroundColor: colors.primary[100],
          marginHorizontal: 20,
          paddingHorizontal: 35,
          borderRadius: 45,
          marginBottom: 74,
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: typography.lineHeight.small,
          }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
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
            Rooney Okari
          </Text>
          <Text
            style={{
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.medium,
              letterSpacing: 1,
            }}
          >
            nyandika15@gmail.com
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 40,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: typography.fontWeight.semiBold,
              lineHeight: typography.lineHeight.large + 6,
              fontSize: typography.fontSize.large,
              letterSpacing: 1,
            }}
          >
            USD ///
          </Text>
          <Text
            style={{
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.large + 4,
              letterSpacing: 1,
            }}
          >
            Currency
          </Text>
        </View>
        <View>
          <Text
            style={{
              letterSpacing: 1,
              fontSize: 50,
              fontWeight: typography.fontWeight.semiBold,
            }}
          >
            $82.999
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: colors.primary[100],
          padding: 20,
          gap: 7,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'x'].map((pad, index) => {
          return (
            <TouchableOpacity
              style={{
                width: '32%',
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 6,
              }}
              key={index}
            >
              <Text
                style={{
                  letterSpacing: 1,
                  fontSize: typography.fontSize.xlarge + 4,
                  fontWeight: typography.fontWeight.semiBold,
                  letterSpacing: 1,
                }}
              >
                {pad.toString()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 40,
          backgroundColor: colors.primary[100],
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary[900],
            width: '100%',
            height: 64,
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 35,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              fontSize: typography.fontSize.medium,
              lineHeight: typography.lineHeight.medium,
              letterSpacing: 1,
              color: '#fff',
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendMoney;

const styles = StyleSheet.create({});
