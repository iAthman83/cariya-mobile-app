import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { View, Text } from "../../components/Themed";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "../../constants/Styles";

type Props = {
  plan: string;
  amountInUgx: string;
  amountInDollars: string;
  bgColor: string;
  btnBgColor: string;
  planBenefits: string[];
};

const SubscriptionCard = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.subscriptionHeader}>{props.plan}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.subscriptionAmount}>{props.amountInUgx}</Text>
      </View>
      <Text style={styles.subscriptionTime}>per month, per child</Text>
      {/* Hairline border */}
      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: Colors.primaryTextColor,
          }}
        />
        <View
          style={{
            flex: 1,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: Colors.primaryTextColor,
            marginRight: 10,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.primaryTintColor,
          width: 270,
          gap: 10,
          height: 355,
          justifyContent: "space-between",
        }}
      >
        <View>
          {props.planBenefits.map((plan) => (
            <View key={plan} style={{ ...styles.btnOutline }}>
              <Ionicons name="checkmark-circle-outline" size={20} />
              <Text style={styles.btnOutlineText}>{plan}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: Colors.primaryTextColor }}
        >
          <Text style={{ ...defaultStyles.btnText, color: Colors.black }}>
            Subscribe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
    width: 300,
    height: 600,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: Colors.primaryTintColor,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  curved: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
    paddingTop: 60,
    width: "100%",
    height: 450,
    position: "absolute",
    bottom: -25,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "black",
  },
  subscriptionHeader: {
    fontFamily: "",
    fontSize: 18,
    marginBottom: 2,
    color: Colors.primaryTextColor,
  },
  subscriptionAmount: {
    fontFamily: "Inter-Medium",
    fontSize: 40,
    backgroundColor: Colors.primaryTintColor,
    color: Colors.primaryTextColor,
  },
  subscriptionDescription: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
    color: Colors.primaryTextColor,
  },
  subscriptionDetails: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: Colors.primaryTextColor,
  },
  seperatorView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    fontSize: 16,
  },
  subscriptionTime: {
    color: Colors.primaryTextColor,
  },
  btnOutline: {
    height: 50,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.primaryTintColor,
  },
  btnOutlineText: {
    color: Colors.primaryTextColor,
    fontSize: 16,
  },
  btn: {
    backgroundColor: Colors.primaryTintColor,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
