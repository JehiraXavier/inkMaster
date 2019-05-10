import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import Logo from "inkMaster/app/components/Logo.js";

export default class SigninScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter email"
          placeholderTextColor="rgba(0,0,0,0.7)"
          keyboardType="email-address"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter password"
          placeholderTextColor="rgba(0,0,0,0.7)"
          keyboardType="default"
          returnKeyType="go"
          autoCorrect={false}
          secureTextEntry={true}
          ref={"password"}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this._showSignIn}>
            Sign up
          </Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>New to inkMaster?</Text>
        <TouchableOpacity onPress={this._showSignIn} style={styles.button}>
          <Text style={styles.buttonText}> Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EBEDEF",
    // alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  inputBox: {
    height: 40,
    backgroundColor: "rgba(32,53,60,0.2)",
    color: "#FFFFFF",
    paddingHorizontal: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    backgroundColor: "#641E16",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  signupText: {
    color: "rgba(0,0,0,0.6)",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  }
});
