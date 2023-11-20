import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput, View, Text } from "../../components/Themed";
import { defaultStyles } from "../../constants/Styles";
import Colors from "../../constants/Colors";

type Props = {};

const paymentForm = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Enter amount you wish to pay</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="e.g 5000"
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
          <Text style={styles.btnOutlineText}>shs 5,000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline} onPress={() => {}}>
          <Text style={styles.btnOutlineText}>shs 10,000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline} onPress={() => {}}>
          <Text style={styles.btnOutlineText}>shs 20,000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default paymentForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 15,
    flex: 1,
    // backgroundColor: "#fff",
    padding: 26,
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
    fontFamily: "Inter-Regular",
  },
});
