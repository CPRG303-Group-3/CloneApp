import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SocialLoginButton from "./components/SocialLoginButton";
import TextInputField from "./components/TextInputField";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Log in to Spotify</Text>

        <View style={styles.socialButtonsContainer}>
          <SocialLoginButton
            iconName="google"
            iconSet="FontAwesome5"
            iconColor="#DB4437"
            label="Continue with Google"
          />
          <SocialLoginButton
            iconName="facebook-square"
            iconSet="FontAwesome5"
            iconColor="#3b5998"
            label="Continue with Facebook"
          />
          <SocialLoginButton
            iconName="apple"
            iconColor="#fff"
            label="Continue with Apple"
          />
          <SocialLoginButton
            iconName="phone"
            iconColor="#fff"
            label="Continue with phone number"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.form}>
          <TextInputField
            label="Email or username"
            placeholder="Email or username"
          />
          <TextInputField
            label="Password"
            placeholder="Password"
            secure
            rightIcon={<Icon name="eye-slash" size={20} color="#888" />}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  socialButtonsContainer: {
    marginBottom: 20,
  },
  divider: {
    borderBottomColor: "#222",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  form: {},
  rememberMeText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 14,
  },
});
