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
    <View style={styles.wrapper}>
      <DepositFloatingButton />
      <PaymentSummary />
      {/* <MyAccountImage />
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <TotalPaid />
      </View> */}
      <BoldHeader input="recent transactions" />
      <ScrollView style={styles.container}>
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="Isaac Newton" />
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="Isaac Newton" />
        <RecentPaymentCard childNames="John Doe" />
        <RecentPaymentCard childNames="John Doe" />
        {/* <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        /> */}
        {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    gap: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
