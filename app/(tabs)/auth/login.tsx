import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { View, Text } from "../../../components/Themed";
import MainHeader from "../../../components/utils/MainHeader";
import Colors from "../../../constants/Colors";
import Icons from "../../../components/utils/Icons";

type Props = {};

const login = (props: Props) => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={{ ...styles.viewWrapper, ...styles.welcomeText }}>
        <MainHeader input="welcome back!" />
        <Text>Please sign in to your account</Text>
      </View>
      {/* Input boxes */}
      <View style={{ ...styles.viewWrapper, ...styles.inputBoxesWrapper }}>
        <View>
          <Text>User name or email</Text>
          <TextInput style={styles.inputBox} placeholder="Username or email" />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          ></View>
          <Text>or</Text>
        </View>
        <View style={styles.socialSignIn}>
          <View style={styles.socialIconWrapper}>
            <Icons name="google" color={Colors.primaryTintColor} />
          </View>
          <View style={styles.socialIconWrapper}>
            <Icons name="linkedin" color={Colors.primaryTintColor} />
          </View>
          <View style={styles.socialIconWrapper}>
            <Icons name="facebook" color={Colors.primaryTintColor} />
          </View>
        </View>
      </View>
      {/* different */}
      <View style={{ ...styles.viewWrapper, ...styles.authWrapper }}>
        <View style={styles.haveNoAccountWrapper}>
          <Text>Don't an account?</Text>
          <Text style={{ color: Colors.primaryTintColor }}>Register</Text>
        </View>
        <Pressable style={styles.loginButton} onPress={() => {}}>
          <Text style={{ fontSize: 18 }}>Login</Text>
        </Pressable>
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
    paddingVertical: Dimensions.get("window").height / 20,
  },
  viewWrapper: {
    width: "100%",
    paddingHorizontal: Dimensions.get("window").width / 12,
  },
  welcomeText: {
    alignItems: "center",
  },
  inputBoxesWrapper: {
    display: "flex",
    gap: 20,
  },
  inputBox: {
    height: Dimensions.get("window").height / 18,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.inputBorderColor,
    paddingHorizontal: Dimensions.get("window").width / 30,
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
    marginBottom: -10,
  },
  socialIconWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.inputBorderColor,
    paddingVertical: 10,
    width: Dimensions.get("window").width / 9,
    alignItems: "center",
    justifyContent: "center",
  },
  socialSignIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: Dimensions.get("window").width / 10,
  },
  authWrapper: {
    display: "flex",
    gap: 10,
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryTintColor,
    height: Dimensions.get("window").height / 18,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: Dimensions.get("window").width / 30,
    fontSize: 18,
  },
  haveNoAccountWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
