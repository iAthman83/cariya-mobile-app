import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { View, Text } from "../../components/Themed";
import React from "react";
import SubscriptionCard from "../../components/subscriptions/SubscriptionCard";
import Colors from "../../constants/Colors";

type Props = {};

const subscriptions = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollViewStyle}>
        <SubscriptionCard
          plan="Basic"
          amountInUgx="5k"
          amountInDollars="($ 1.35)"
          bgColor="#222"
          btnBgColor={Colors.primaryTintColor}
        />
        <SubscriptionCard
          plan="Silver"
          amountInUgx="10k"
          amountInDollars="($ 2.6)"
          bgColor={Colors.primaryTintColor}
          btnBgColor={Colors.black}
        />
        <SubscriptionCard
          plan="Gold"
          amountInUgx="20k"
          amountInDollars="($ 5.3)"
          bgColor="#d4af37"
          btnBgColor={Colors.primaryTintColor}
        />
        <SubscriptionCard
          plan="Platinum"
          amountInUgx="60k"
          amountInDollars="($ 16)"
          bgColor="#3388A7"
          btnBgColor={Colors.primaryTintColor}
        />
      </ScrollView>
    </View>
  );
};

export default subscriptions;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 20,
  },
  scrollViewStyle: {
    marginTop: 20,
    height: Dimensions.get("window").height / 1.5,
  },
});
