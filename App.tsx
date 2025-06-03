import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  Switch
  Switch,
} from "react-native";
import SocialLoginButton from "./components/SocialLoginButton";
import TextInputField from "./components/TextInputField";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const handleLogin = () => {
    Alert.alert("Assignment 1 Completed");
  };


  const isEnabled = true;


  const isEnabled = true;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Log in to Spotify</Text>
        <View style={styles.wrapper}>
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

          <View style={styles.toggle}>
            <Switch 
              trackColor={{false:"white", true: "green"}}
              thumbColor={"black"}
              value={isEnabled}
            />
            <Text style={{color: "white"}}>Remember Me</Text>
          </View>

          <View>
            <Text 
              style={styles.links && {textDecorationLine: "underline", color: "white"}}>
                Forgot your password?
            </Text>
          </View>
          
          <View style={styles.divider} />

          <View>
            <Text 
              style={styles.links && {color: "grey"}}>
                Don't have an account? <Text style={{color: "white", textDecorationLine: "underline"}}>Sign up for Spotify</Text>
            </Text>
          </View>

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
    fontSize: 44,
    marginBottom: 44,
    textAlign: "center",
  },
  wrapper: {
    width: 320,
    alignSelf: "center",
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

  // Harsimar's Styles
  loginButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  toggle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  links: {
    display: "flex",
    alignContent: "center"
  }
  toggle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  links: {
    display: "flex",
    alignContent: "center"
  }
});
