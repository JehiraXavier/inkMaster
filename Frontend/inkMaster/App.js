import React, { Component } from "react";
import { Text, View } from "react-native";

import Appointment from "./app/pages/screens/Appointment";

export default class App extends Component {
  render() {
    return (
      <View>
        <Appointment />
      </View>
    );
  }
}
