import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import ModalDatePicker from "react-native-datepicker";
import TimePicker from "react-native-24h-timepicker";

export default class Appointment extends React.Component {
  static navigationOptions = {
    title: "Make an appointment"
  };

  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    this.state = { date: year + "-" + month + "-" + date };
    this.state = { time: " " };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: hour + " : " + minute });
    this.TimePicker.close();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Booking Requests</Text>
        <Text style={styles.secondaryText}>Date</Text>
        <ModalDatePicker
          date={this.state.date}
          minDate={this.state.date}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <Text style={styles.secondaryText}>Time</Text>
        <TouchableOpacity onPress={() => this.TimePicker.open()}>
          <Text style={styles.textBox}>{this.state.time}</Text>
        </TouchableOpacity>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
        <Text style={styles.secondaryText}>Special Note</Text>
        <TextInput multiline={true} numberOfLines={4} style={styles.inputBox} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EBEDEF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    height: "100%",
    fontSize: 20
  },
  headingText: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "400",
    paddingVertical: 20,
    fontFamily: "sans-serif",
    color: "black",
    textAlign: "center",
    paddingTop: 18
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "300",
    color: "black",
    textAlign: "center",
    padding: 10
  },
  inputBox: {
    width: 350,
    height: 40,
    backgroundColor: "rgba(32,53,60,0.2)",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 7,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    backgroundColor: "#641E16",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 350
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  textBox: {
    width: 350,
    backgroundColor: "rgba(32,53,60,0.2)",
    borderRadius: 25,
    paddingHorizontal: 26,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 7,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 30
  }
});
