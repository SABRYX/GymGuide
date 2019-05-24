import React, { Component } from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../config/colors";
import { NavigationActions, StackActions } from "react-navigation";

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
      AsyncStorage.getItem("user").then(response => {
        console.log("Response", response);
        if (response) {
          this.props.navigation.dispatch(
            StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "MainNavigation"
                })
              ]
            })
          );
        } else {
          this.props.navigation.dispatch(
            StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Login"
                })
              ]
            })
          );
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
