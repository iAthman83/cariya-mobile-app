import { StyleSheet, SafeAreaView } from "react-native";
import { View, Text } from "../../../components/Themed";
import MainHeader from "../../../components/utils/MainHeader";

type Props = {};

const login = (props: Props) => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View>
        <MainHeader input="welcome back!" />
        <Text>Please sign in to your account</Text>
      </View>
      {/* Input boxes */}
      <View>
        <MainHeader input="welcome back!" />
        <Text>Please sign in to your account</Text>
      </View>
      {/* different */}
      <View>
        <MainHeader input="welcome back!" />
        <Text>Sign in button</Text>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",

    // height: "100%",
  },
});
