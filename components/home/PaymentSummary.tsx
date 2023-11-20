import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import TotalPaid from "../account/TotalPaid";

type Props = {};

const PaymentSummary = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Current Balance</Text>
      <TotalPaid />
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: Colors.primaryTintColor,
    gap: 10,
  },
  headerText: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
    color: Colors.primaryTextColor,
  },
});
