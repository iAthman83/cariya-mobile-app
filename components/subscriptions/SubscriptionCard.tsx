import { Dimensions, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "../../constants/Styles";

type Props = {
  plan: string;
  amountInUgx: string;
  amountInDollars: string;
};

const SubscriptionCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subscriptionHeader}>{props.plan}</Text>
      <Text style={styles.subscriptionDescription}>{props.amountInUgx}</Text>
      <Text style={styles.subscriptionDescription}>
        {props.amountInDollars}
      </Text>
      <Text style={styles.subscriptionDescription}>per month, per child</Text>
      <View style={styles.curved}>
        <View style={styles.btnOutline}>
          <Ionicons
            name="checkmark"
            size={24}
            style={{
              ...defaultStyles.btnIcon,
              ...{ color: Colors.facebookColor },
            }}
          />
          <Text style={styles.btnOutlineText}>Personality assessment test</Text>
        </View>
        <View style={styles.btnOutline}>
          <Ionicons
            name="checkmark"
            size={24}
            style={{
              ...defaultStyles.btnIcon,
              ...{ color: Colors.facebookColor },
            }}
          />
          <Text style={styles.btnOutlineText}>Talent discovery tool</Text>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 1.5,
    borderRadius: 8,
    // overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  curved: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
    paddingTop: 60,
    width: "100%",
    height: Dimensions.get("window").height / 2,
    position: "absolute",
    bottom: -25,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "black",
  },
  subscriptionHeader: {
    fontFamily: "Inter-Bold",
    fontSize: 24,
    color: Colors.primaryTintColor,
  },
  subscriptionDescription: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
  },
  subscriptionDetails: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  btnOutline: {
    // backgroundColor: "#fff",
    // borderWidth: 1,
    // borderColor: Colors.grey,
    backgroundColor: "#ccc",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
  },
  btnOutlineText: {
    // color: "#000",
    fontSize: 16,
    // fontFamily: "mon-sb",
  },
});
