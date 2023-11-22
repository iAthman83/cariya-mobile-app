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
        <Text>shs</Text>
        <Text style={styles.subscriptionAmount}>{props.amountInUgx}</Text>
      </View>
      <Text style={styles.subscriptionDescription}>
        {props.amountInDollars}
      </Text>
      <Text style={styles.subscriptionTime}>per month, per child</Text>
      {/* cured section */}
      <View style={{ ...styles.curved, backgroundColor: props.bgColor }}>
        {props.planBenefits.map((plan) => (
          <View
            key={plan}
            style={{ ...styles.btnOutline, backgroundColor: props.bgColor }}
          >
            <Text style={styles.btnOutlineText}>{plan}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: props.btnBgColor }}
        >
          <Text style={defaultStyles.btnText}>Subscribe</Text>
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
    gap: 4,
    alignItems: "center",
    marginHorizontal: 20,
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 1.5,
    borderRadius: 8,
    // overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  curved: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
    paddingTop: 60,
    width: "100%",
    height: Dimensions.get("window").height / 2,
    position: "absolute",
    bottom: -25,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "black",
  },
  subscriptionHeader: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    color: Colors.primaryTintColor,
    marginBottom: 2,
  },
  subscriptionAmount: {
    fontFamily: "Inter-Medium",
    fontSize: 40,
  },
  subscriptionDescription: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
  },
  subscriptionDetails: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  subscriptionTime: {},
  btnOutline: {
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
  },
  btnOutlineText: {
    color: Colors.primaryTextColor,
    fontSize: 18,
    // fontFamily: "mon-sb",
  },
  btn: {
    backgroundColor: Colors.primaryTintColor,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    // alignContent: "flex-start",
  },
});
