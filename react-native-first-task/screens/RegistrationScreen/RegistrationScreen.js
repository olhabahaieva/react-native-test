import React from "react";
import { View, Image, StyleSheet, TextInput, Button } from "react-native";

const RegistrationScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput style={styles.input} value="Логін" />
          <TextInput style={styles.input} value="Адреса електронної пошти" />
          <TextInput style={styles.input} value="Пароль" />
          <Button title="Зареєстуватися"/>
          <Button title="Вже є акаунт? Увійти"/>
        </View>

        <Image
          source={require("../../assets/bcg-image.jpg")}
          style={styles.backgroundImage}
        />
      </View>
    </>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    position: "relative",
    alignItems: "center",
    bottom: 0,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingTop: 32,
    paddingBottom: 130,
    paddingLeft: 16,
    paddingRight: 16,
  },

  input: {
    width: 200, // Set a width for the input
    height: 40, // Set a height for the input
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // position: "absolute",
    // top: 0,
    // left: 0,
    width: "100%",
    height: "100%",
  },
});

export default RegistrationScreen;
