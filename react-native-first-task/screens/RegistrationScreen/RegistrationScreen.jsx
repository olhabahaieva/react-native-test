import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/bcg-image.jpg")}
        >
          <View style={styles.contentContainer}>
          <View style={styles.photoPlaceholder}>
            
          </View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input} value="Логін" />
            <TextInput style={styles.input} value="Адреса електронної пошти" />
            <TextInput style={styles.input} value="Пароль" />
            <Text style={styles.buttonOrange}>Зареєстуватися</Text>

            <Text style={styles.buttonLink}>Вже є акаунт? Увійти</Text>
          </View>
        </ImageBackground>
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

  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#fff",
    marginTop: 300,
    paddingTop: 100,
    paddingBottom: 190,
  },

  title: {
    fontSize: 30,
    marginBottom: 32,
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
    width: 345,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
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

  buttonOrange: {
    width: 345,
    height: 52,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 52,
    marginTop: 30
  },

  buttonLink: {
    color: "#1B4371",
  },

  photoPlaceholder:{
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginTop: -140
  }
});

export default RegistrationScreen;
