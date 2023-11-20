import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import React from "react";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const DepositFloatingButton = () => {
  return (
    <View style={styles.container}>
      <FontAwesome size={20} name="heart" color={Colors.primaryTextColor} />
    </View>
  );
};

export default DepositFloatingButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: Dimensions.get("window").width / 20,
    borderRadius: Dimensions.get("window").width / 7 / 2,
    backgroundColor: Colors.primaryTintColor,
    width: Dimensions.get("window").width / 6.8,
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 100,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 10,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.5,
  },
});
