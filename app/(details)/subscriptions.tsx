import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";
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
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <ScrollView horizontal style={styles.scrollViewStyle}>
        <SubscriptionCard
          plan="Basic"
          amountInUgx="5,000/-"
          amountInDollars="($ 1.35)"
          bgColor="#222"
          btnBgColor={Colors.primaryTintColor}
          planBenefits={basicPlan}
        />
        <SubscriptionCard
          plan="Silver"
          amountInUgx="10,000/-"
          amountInDollars="($ 2.6)"
          bgColor={Colors.primaryTintColor}
          btnBgColor={Colors.black}
          planBenefits={silverPlan}
        />
        <SubscriptionCard
          plan="Gold"
          amountInUgx="20,000/-"
          amountInDollars="($ 5.3)"
          bgColor="#d4af37"
          btnBgColor={Colors.primaryTintColor}
          planBenefits={goldPlan}
        />
        <SubscriptionCard
          plan="Platinum"
          amountInUgx="60,000/-"
          amountInDollars="($ 16)"
          bgColor="#3388A7"
          btnBgColor={Colors.primaryTintColor}
          planBenefits={platinumPlan}
        />
      </ScrollView>
      {/* <Button
        title="Go to home screen"
        onPress={() => router.push("/(tabs)/")}
      /> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default subscriptions;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 20,
    // backgroundColor: "red",
  },
  scrollViewStyle: {
    marginTop: 20,
    height: 650,
  },
});
