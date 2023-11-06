import { StyleSheet, Dimensions, Image } from "react-native";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";

type Props = {};

const imageUrl =
  "https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const MyAccountImage = (props: Props) => {
  return (
    <View
      style={styles.container}
      darkColor="rgba(255,255,255,0.05)"
      lightColor="rgba(0,0,0,0.05)"
    >
      <Image style={styles.image} source={{ uri: imageUrl }} />
      {/* <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)"> */}
      <Text
        lightColor={Colors.primaryTextColor}
        darkColor="rgba(255,255,255,0.8)"
      >
        Hi, Abu Athman
      </Text>
    </View>
  );
};

export default MyAccountImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryTintColor,
    height: Dimensions.get("window").height / 3,
    alignItems: "center",
    paddingTop: Dimensions.get("window").height / 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});
