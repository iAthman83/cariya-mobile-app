import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import React from "react";
import Colors from "../../constants/Colors";

type Props = {
  input: string;
};

const MainHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.input}</Text>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "400",
    textTransform: "capitalize",
  },
});
