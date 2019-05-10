import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

// import firebase from 'firebase';

// import firebase from 'react-native-firebase';

import Logo from "inkMaster/app/components/Logo.js";

export default class SignupScreen extends React.Component {
  //     title: "Let's Get Started",
  //     headerStyle: {
  //       backgroundColor: "#000000"
  //     },
  //     headerTintColor: "#ffffff"
  //   };

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('type', 'DEFAULT_TYPE'),
  //   };
  // };

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     usernameText : '',
  //     emailText : '',
  //     contactText : '',
  //     passwordText : '',
  //     loading:false,
  //     isLoggedIn: false,
  //     errorText: ''
  //   }
  //   this.artists = firebase.firestore().collection('artists');
  //   this.customers = firebase.firestore().collection('customers');
  //   this._signUp = this._signUp.bind(this);
  // }

  // componentWillMount() {
  //   var config = {
  //     apiKey: "AIzaSyCGru61A858SfGMVhhbcvN8J-rrCRueWwU",
  //     authDomain: "inkmasterapps.firebaseapp.com",
  //     databaseURL: "https://inkmasterapps.firebaseio.com",
  //     projectId: "inkmasterapps",
  //     storageBucket: "inkmasterapps.appspot.com",
  //     messagingSenderId: "987937825635"
  //   };
  //   firebase.initializeApp(config);
  //   firebase.auth().onAuthStateChanged(user=>{
  //     if(user) {
  //       this.setState({isLoggedIn: !this.state.isLoggedIn})
  //     } else {
  //       this.setState({isLoggedIn: false})
  //     }
  // })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          placeholderTextColor="rgba(0,0,0,0.5)"
          keyboardType="default"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => this.refs.email.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0,0.5)"
          keyboardType="email-address"
          returnKeyType="next"
          autoCorrect={false}
          ref={"email"}
          onSubmitEditing={() => this.refs.contact.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Contact"
          placeholderTextColor="rgba(0,0,0,0.5)"
          keyboardType="phone-pad"
          returnKeyType="next"
          autoCorrect={false}
          ref={"contact"}
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="rgba(0,0,0,0.5)"
          keyboardType="default"
          returnKeyType="next"
          autoCorrect={false}
          secureTextEntry={true}
          ref={"password"}
          onSubmitEditing={() => this.refs.cpassword.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Confirm password"
          placeholderTextColor="rgba(0,0,0,0.5)"
          keyboardType="default"
          returnKeyType="go"
          autoCorrect={false}
          secureTextEntry={true}
          ref={"cpassword"}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this._showSignIn}>
            Register
          </Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Already have an Account?</Text>
        <TouchableOpacity onPress={this._showSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _showSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  _signUp = async () => {
    const response = await AsyncStorage.getItem("AccountType");
    // Alert.alert(
    //     'Registration Nearly Complete',
    //     'Are you sure you would like to submit this form?',
    //     [
    //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //       {text: 'OK', onPress: () => {
    //         console.log('Signup Completed!')
    //               //signup function
    //         this.props.navigation.navigate('SignIn');
    //       }},
    //     ],
    //       { cancelable: false }
    //     )
    //     this.setState({ loading: true });
    //     const { emailText, passwordText } = this.state;
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(emailText, passwordText)
    //       .then(
    //         this.setState({
    //           errorText: "Success",
    //           loading: true,
    //           emailText: "",
    //           passwordText: "",
    //           usernameText: "",
    //           contactText: "",
    //           signedUp: true
    //         })
    //       )
    //       .catch(
    //         this.setState({
    //           errorText: "Authentication failed",
    //           loading: true,
    //           emailText: "",
    //           passwordText: "",
    //           usernameText: "",
    //           contactText: ""
    //         })
    //       );

    //     if (signedUp) {
    //       if (response == "Customer") {
    //         this.customers
    //           .add({
    //             username: this.state.usernameText,
    //             email: this.state.emailText,
    //             contact: this.state.contactText
    //           })
    //           .then(
    //             this.setState({
    //               errorText: "Success",
    //               loading: true,
    //               emailText: "",
    //               passwordText: "",
    //               usernameText: "",
    //               contactText: ""
    //             })
    //           )
    //           .catch(
    //             this.setState({
    //               errorText: "Success",
    //               loading: true,
    //               emailText: "",
    //               passwordText: "",
    //               usernameText: "",
    //               contactText: ""
    //             })
    //           );
    //       } else if (response == "Artist") {
    //         this.artists
    //           .add({
    //             username: this.state.usernameText,
    //             email: this.state.emailText,
    //             contact: this.state.contactText
    //           })
    //           .then(
    //             this.setState({
    //               errorText: "Success",
    //               loading: true,
    //               emailText: "",
    //               passwordText: "",
    //               usernameText: "",
    //               contactText: ""
    //             })
    //           )
    //           .catch(
    //             this.setState({
    //               errorText: "Success",
    //               loading: true,
    //               emailText: "",
    //               passwordText: "",
    //               usernameText: "",
    //               contactText: ""
    //             })
    //           );
    //       }

    //       this.props.navigation.navigate("SignIn");
    //     }
    //   };
  };
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
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    backgroundColor: "#641E16",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 20
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  signupText: {
    color: "rgba(0,0,0,0.6)",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 20
  }
});
