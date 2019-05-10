import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

// import AsyncStorage from "@react-native-community/async-storage";

// import firebase from 'firebase';

import Logo from "inkMaster/app/components/Logo.js";

// import { createStackNavigator, createAppContainer } from "react-navigation";

export default class SigninScreen extends React.Component {
  // static navigationOptions = {
  //   title: "Welcome to inkMaster",
  //   headerStyle: {
  //     backgroundColor: "#000000"
  //   },
  //   headerTintColor: "#ffffff"
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     emailText: "",
  //     passwordText: "",
  //     loading: false,
  //     isLoggedIn: false,
  //     errorText: ""
  //   };
  //   this._signIn = this._signIn.bind(this);
  //   // const params = this.props.navigation.state.params;
  //   const navigation = this.props.navigation;
  // }

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('type', 'DEFAULT_TYPE'),
  //   };
  // };

  // componentWillMount() {
  //   var config = {
  //     apiKey: "AIzaSyAtJYvnYTKS4FQaI309LSHwOXfKu6ZnplE",
  //     authDomain: "inkmastertattooapp.firebaseapp.com",
  //     databaseURL: "https://inkmastertattooapp.firebaseio.com",
  //     projectId: "inkmastertattooapp",
  //     storageBucket: "inkmastertattooapp.appspot.com",
  //     messagingSenderId: "211941742756"
  //   };
  //   firebase.initializeApp(config);
  //   firebase.auth().onAuthStateChanged(user=>{
  //       if(user) {
  //         this.setState({isLoggedIn: !this.state.isLoggedIn})
  //       } else {
  //         this.setState({isLoggedIn: false})
  //       }
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="rgba(0,0,0,0.7)"
          keyboardType="email-address"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
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

  // _signIn() {
  //   this.setState({ loading: true });
  //   const { emailText, passwordText } = this.state;
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(emailText, passwordText)
  //     .then(
  //       this.setState({
  //         errorText: "Success",
  //         loading: false,
  //         emailText: "",
  //         passwordText: ""
  //         // if (params.type == 'Artist')
  //         //     navigation.navigate('ArtistApp')
  //         // else if (params.type == 'Customer')
  //         //   navigation.navigate('CustomerApp')
  //       })
  //       // _signInNavigate();
  //     )
  //     .catch(
  //       this.setState({
  //         errorText: "Authentication failed",
  //         loading: false,
  //         emailText: "",
  //         passwordText: ""
  //       })
  //     );

  //   const params = this.props.navigation.state.params;
  //   if (params.type == "Artist") this.props.navigation.navigate("ArtistApp");
  //   else if (params.type == "Customer")
  //     this.props.navigation.navigate("CustomerApp");
  // }

  // _signInNavigate() {
  //   if (params.type == "Artist") navigation.navigate("ArtistApp");
  //   else if (params.type == "Customer") navigation.navigate("CustomerApp");
  // }

  // _showSignUp = () => {
  //   this.props.navigation.navigate("SignUp");
  // };
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
