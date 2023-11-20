import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import React from "react";
import Colors from "../../constants/Colors";

type Props = {
  input: string;
};

const BoldHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.input}</Text>
    </View>
  );
};

export default BoldHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
    fontFamily: "Inter-Medium",
  },
});
