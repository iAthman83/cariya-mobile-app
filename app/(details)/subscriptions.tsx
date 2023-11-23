import { StyleSheet, ScrollView, Dimensions, Button } from "react-native";
import { View, Text } from "../../components/Themed";
import React from "react";
import SubscriptionCard from "../../components/subscriptions/SubscriptionCard";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import {
  silverPlan,
  goldPlan,
  basicPlan,
  platinumPlan,
} from "../../constants/SubscriptionPackages";

type Props = {};

const subscriptions = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollViewStyle}>
        <SubscriptionCard
          plan="Basic"
          amountInUgx="5k"
          amountInDollars="($ 1.35)"
          bgColor="#222"
          btnBgColor={Colors.primaryTintColor}
          planBenefits={basicPlan}
        />
        <SubscriptionCard
          plan="Silver"
          amountInUgx="10k"
          amountInDollars="($ 2.6)"
          bgColor={Colors.primaryTintColor}
          btnBgColor={Colors.black}
          planBenefits={silverPlan}
        />
        <SubscriptionCard
          plan="Gold"
          amountInUgx="20k"
          amountInDollars="($ 5.3)"
          bgColor="#d4af37"
          btnBgColor={Colors.primaryTintColor}
          planBenefits={goldPlan}
        />
        <SubscriptionCard
          plan="Platinum"
          amountInUgx="60k"
          amountInDollars="($ 16)"
          bgColor="#3388A7"
          btnBgColor={Colors.primaryTintColor}
          planBenefits={platinumPlan}
        />
      </ScrollView>
      <Button
        title="Go to home screen"
        onPress={() => router.push("/(tabs)/")}
      />
    </View>
  );
};

export default subscriptions;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 20,
  },
  scrollViewStyle: {
    marginTop: 20,
    height: Dimensions.get("window").height / 1.5,
  },
});
