import { View, Text } from "../Themed";
import { Dimensions, StyleSheet, Platform } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Icons from "../utils/Icons";

type Props = {
  childNames: string;
};

const RecentPaymentCard = (props: Props) => {
  return (
    <View
      lightColor={Colors.grayBackgroundColor}
      darkColor="#8D837E"
      style={styles.container}
    >
      <View
        lightColor={Colors.grayBackgroundColor}
        darkColor="#8D837E"
        style={styles.leftWrapper}
      >
        <Text style={styles.names}>{props.childNames}</Text>
        <Text style={styles.transactionDate}>08/11/2023 1:32 PM</Text>
      </View>
      <View
        lightColor={Colors.grayBackgroundColor}
        darkColor="#8D837E"
        style={styles.rightWrapper}
      >
        <Text style={styles.amountPaid}>5,000 UGX</Text>
        {/* <Icons name="check-square" color="green" /> */}
      </View>
    </View>
  );
};

export default RecentPaymentCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    marginHorizontal: Dimensions.get("window").width / 20,
    paddingHorizontal: Dimensions.get("window").width / 20,
    paddingVertical: Dimensions.get("window").height / 100,
    height: Dimensions.get("window").height / 14,
    marginBottom: 10,
  },
  leftWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  rightWrapper: {
    height: "100%",
    justifyContent: "center",
  },
  names: {
    fontWeight: "500",
    fontSize: Platform.OS === "ios" ? 20 : 16,
    fontFamily: "Inter-Medium",
  },
  transactionDate: {
    fontWeight: "300",
    fontSize: 12,
  },
  amountPaid: {
    fontWeight: "700",
    fontSize: 18,
    fontFamily: "Inter-Bold",
  },
});
