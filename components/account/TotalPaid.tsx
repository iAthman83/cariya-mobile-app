import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";

type Props = {};

const TotalPaid = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.amountText}>20,000 UGX</Text>
      <Text style={styles.totalValueText}>Total Value</Text>
    </View>
  );
};

export default TotalPaid;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -35,
    height: Dimensions.get("window").height / 14,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 10,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.5,
    borderRadius: 5,
  },
  amountText: {
    fontWeight: "900",
    fontSize: 26,
  },
  totalValueText: {
    fontWeight: "300",
    fontSize: 10,
  },
});
