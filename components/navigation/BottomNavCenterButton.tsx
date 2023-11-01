import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Icons from "../utils/Icons";
import Colors from "../../constants/Colors";

type Props = {
  color: string;
};

const BottomNavCenterButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <Icons name="phone" color={props.color} />
    </View>
  );
};

export default BottomNavCenterButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25D366",
    borderColor: "#E0F6CA",
    borderWidth: 3,
    borderRadius: Dimensions.get("window").height / 9.5 / 2,
    height: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").height / 15,
    bottom: Dimensions.get("window").height / 40,
    elevation: 5,
    shadowColor: "#E0F6CA",
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
});
