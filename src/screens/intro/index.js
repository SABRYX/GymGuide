import React, { Component } from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../config/colors";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn = async () => {
    try {
      AsyncStorage.getItem("userLoggedIn").then(response => {
        if (response) {
          this.props.navigation.navigate("MainNavigation");
        } else {
          this.props.navigation.navigate("Login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.BLEUDEFRANCE} />
      </View>
    );
  }
}

export { Intro };
