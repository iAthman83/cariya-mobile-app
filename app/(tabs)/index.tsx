import { StyleSheet, ScrollView } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";

import { Text, View } from "../../components/Themed";

// components
import MyAccountImage from "../../components/account/MyAccountImage";
import TotalPaid from "../../components/account/TotalPaid";
import BoldHeader from "../../components/utils/BoldHeader";
import RecentPaymentCard from "../../components/account/RecentPaymentCard";
import PaymentSummary from "../../components/home/PaymentSummary";
import DepositFloatingButton from "../../components/utils/DepositFloatingButton";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <DepositFloatingButton />
      <PaymentSummary />
      <BoldHeader input="recent transactions" />
      <ScrollView style={styles.paymentCards}>
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="Isaac Newton" />
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="Isaac Newton" />
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="John Doe" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    gap: 30,
  },
  paymentCards: {
    flex: 1,
    // marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
