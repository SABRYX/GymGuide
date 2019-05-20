import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  TabNavigation,
  TabButton,
  TabIcons
} from "@opengeekslab/react-native-tab-navigator";

import Home from "./src/screens/home";
import Food from "./src/screens/food";
import NearbyGyms from "./src/screens/nearby-gyms";
import Settings from "./src/screens/settings";

const navigationRouter = {
  Screen_1: {
    screen: Home,
    screenOptions: {
      title: "Item 1",
      showTitle: true,
      animated: true,
      tabIcon: TabIcons.Social,
      animation: [
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
      tabIcon: TabIcons.Message,
      animation: [
        "ripple",
        { name: "scale" },
        {
          name: "fume",
          duration: 700
        },
        {
          name: "fadeOut",
          duration: 700
        }
      ]
    }
  },
  Screen_3: {
    screen: NearbyGyms,
    screenOptions: {
      title: "Item 3",
      tabIcon: TabIcons.TuneView,
      animated: true,
      animation: []
    }
  },
  Screen_4: {
    screen: Settings,
    screenOptions: {
      title: "Item 4",
      tabIcon: TabIcons.Bell,
      animation: [
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
  defaultRoute: "Screen_3",
  screenOptions: {
    showTitle: true,
    animated: true,
    buttonView: TabButton,
    activeTintColor: "#0579fc",
    inactiveTintColor: "#818692",
    animation: ["ripple", "rotationZ"]
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
    backgroundColor: "#F5FCFF"
  }
});
