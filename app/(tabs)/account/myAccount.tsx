import { StyleSheet, ScrollView } from "react-native";
import EditScreenInfo from "../../../components/EditScreenInfo";

import { Text, View } from "../../../components/Themed";

import MyAccountImage from "../../../components/account/MyAccountImage";
import TotalPaid from "../../../components/account/TotalPaid";

type Props = {};

const myAccount = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <MyAccountImage />
      <View style={{ alignItems: "center" }}>
        <TotalPaid />
      </View>
      <ScrollView style={styles.container}>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="app/(tabs)/two.tsx" />
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
