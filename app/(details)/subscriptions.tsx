import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { View, Text } from "../../components/Themed";
import React from "react";
import SubscriptionCard from "../../components/subscriptions/SubscriptionCard";

type Props = {};

const subscriptions = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollViewStyle}>
        <SubscriptionCard
          plan="Basic"
          amountInUgx="shs 5,000"
          amountInDollars="($ 1.35)"
        />
        <SubscriptionCard
          plan="Silver"
          amountInUgx="shs 10,000"
          amountInDollars="($ 2.6)"
        />
        <SubscriptionCard
          plan="Gold"
          amountInUgx="shs 20,000"
          amountInDollars="($ 5.3)"
        />
        <SubscriptionCard
          plan="Platinum"
          amountInUgx="shs 60,000"
          amountInDollars="($ 16)"
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
