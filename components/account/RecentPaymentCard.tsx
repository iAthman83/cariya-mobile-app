import { View, Text } from "../Themed";
import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Icons from "../utils/Icons";

type Props = {};

const RecentPaymentCard = (props: Props) => {
  return (
    <View
      lightColor={Colors.grayBackgroundColor}
      darkColor="#38221A"
      style={styles.container}
    >
      <View
        lightColor={Colors.grayBackgroundColor}
        darkColor="#38221A"
        style={styles.leftWrapper}
      >
        <Text style={styles.transactionType}>08/11/2023</Text>
        <Text style={styles.amountPaid}>5,000 UGX</Text>
      </View>
      <View
        lightColor={Colors.grayBackgroundColor}
        darkColor="#38221A"
        style={styles.rightWrapper}
      >
        <Icons name="check-square" color="green" />
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
  transactionType: {
    fontWeight: "500",
    fontSize: 12,
  },
  amountPaid: {
    fontWeight: "600",
    fontSize: 20,
  },
});
