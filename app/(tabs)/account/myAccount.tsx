import { StyleSheet, ScrollView } from "react-native";
import EditScreenInfo from "../../../components/EditScreenInfo";

import { Text, View } from "../../../components/Themed";

// components
import MyAccountImage from "../../../components/account/MyAccountImage";
import TotalPaid from "../../../components/account/TotalPaid";
import BoldHeader from "../../../components/utils/BoldHeader";
import RecentPaymentCard from "../../../components/account/RecentPaymentCard";

type Props = {};

const myAccount = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <MyAccountImage />
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <TotalPaid />
      </View>
      <BoldHeader input="recent transactions" />
      <ScrollView style={styles.container}>
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        <RecentPaymentCard />
        {/* <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        /> */}
        {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      </ScrollView>
    </View>
  );
};

export default myAccount;

// alignItems: "center",
// justifyContent: "flex-start",

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
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
