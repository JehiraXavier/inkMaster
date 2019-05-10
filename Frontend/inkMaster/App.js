import React, { Component } from "react";
import { Text, View } from "react-native";

import SigninScreen from "./app/pages/screens/SigninScreen";

export default class App extends Component {
  render() {
    return (
      <View>
        <SigninScreen />
      </View>
    );
  }
}
