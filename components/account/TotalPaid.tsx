import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";

type Props = {};

const TotalPaid = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>TotalPaid</Text>
    </View>
  );
};

export default TotalPaid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryTextColor,
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
    height: Dimensions.get("window").height / 20,
  },
});
