import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "../../constants/Styles";
import { Link, router } from "expo-router";
import { View, Text, TextInput } from "../../components/Themed";
import MainHeader from "../../components/utils/MainHeader";
import Colors from "../../constants/Colors";
import Icons from "../../components/utils/Icons";
import MyAccountImage from "../../components/account/MyAccountImage";

type Props = {};

const login = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/adaptive-icon.png")}
        />
      </View>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />

      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            // borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            // borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="mail"
            size={24}
            style={{
              ...defaultStyles.btnIcon,
              ...{ color: Colors.linkedInColor },
            }}
          />
          <Text style={styles.btnOutlineText}>Continue with LinkedIn</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.btnOutline} onPress={() => {}}>
          <Ionicons
            name="md-logo-apple"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.btnOutline} onPress={() => {}}>
          <Ionicons
            name="md-logo-google"
            size={24}
            style={{
              ...defaultStyles.btnIcon,
              ...{ color: Colors.googleColor },
            }}
          />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline} onPress={() => {}}>
          <Ionicons
            name="md-logo-facebook"
            size={24}
            style={{
              ...defaultStyles.btnIcon,
              ...{ color: Colors.facebookColor },
            }}
          />
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            // borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            // borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          ...defaultStyles.btn,
          ...{ backgroundColor: Colors.facebookColor },
        }}
        onPress={() => router.push("/(tabs)/")}
      >
        <Text style={defaultStyles.btnText}>Got to home screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    padding: 26,
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },

  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    // fontFamily: "mon-sb",
    color: Colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    // color: "#000",
    fontSize: 16,
    // fontFamily: "mon-sb",
  },
});
