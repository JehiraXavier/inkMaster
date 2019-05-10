import React, { Component } from "react";
import { Text, View } from "react-native";

import SignupScreen from "./app/pages/screens/SignupScreen";

export default class App extends Component {
  render() {
    return (
      <View>
        <SignupScreen />
      </View>
    );
  }
}
