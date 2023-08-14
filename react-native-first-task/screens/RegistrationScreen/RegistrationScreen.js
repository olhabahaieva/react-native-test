import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/bcg-image.jpg")}
        style={styles.backgroundImage}
      />
    </View>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default RegistrationScreen;
