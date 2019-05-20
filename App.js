import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  TabNavigation,
  TabButton
} from "@opengeekslab/react-native-tab-navigator";

/// Screens For the Tab Navigation
import Home from "./src/screens/home";
import Food from "./src/screens/food";
import NearbyGyms from "./src/screens/nearby-gyms";
import Settings from "./src/screens/settings";

/// Icons For The Tab Navigation
import gym from "./src/resources/images/icons/gym.png";
import dummble from "./src/resources/images/icons/dummble.png";
import healthyFood from "./src/resources/images/icons/healthyFood.png";
import Icon from "react-native-vector-icons/FontAwesome";
import settings from "./src/resources/images/icons/settings.png";

const navigationRouter = {
  Screen_1: {
    screen: Home,
    screenOptions: {
      title: "Item 1",
      showTitle: true,
      animated: true,
      tabIcon: gym,
      animation: [
        "ripple",

        {
          name: "rotationY",
          type: "bouncing"
        }
      ]
    }
  },
  Screen_2: {
    screen: Food,
    screenOptions: {
      title: "Item 2",
      showTitle: true,
      tabIcon: dummble,
      animation: ["ripple", { name: "scale" }]
    }
  },
  Screen_3: {
    screen: NearbyGyms,
    screenOptions: {
      title: "Item 3",
      tabIcon: healthyFood,
      animated: true,
      animation: [
        "ripple",

        {
          name: "rotationX",
          type: "bouncing"
        }
      ]
    }
  },
  Screen_4: {
    screen: Settings,
    screenOptions: {
      title: "Item 4",
      tabIcon: settings,
      animation: [
        "ripple",

        {
          name: "pendulum",
          duration: 700
        }
      ]
    }
  }
};

const defaultConfig = {
  lazy: true,
  defaultRoute: "Screen_1",
  screenOptions: {
    showTitle: true,
    animated: true,
    buttonView: TabButton,
    activeTintColor: "#0579fc",
    inactiveTintColor: "#818692"
  }
};

const MainTabNavigation = TabNavigation(navigationRouter, defaultConfig);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainTabNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
