import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Localization
import I18n from "../localization/i18n";

/// Screens For the Tab Navigation
import { Home, Food, NearbyGyms, Settings } from "../screens";


export const MainTabNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: I18n.t("HOME"),
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons size={23} name="home" color={tintColor} />
        )
      }
    },
    NearbyGyms: {
      screen: NearbyGyms,
      navigationOptions: {
        tabBarLabel: I18n.t("NEARBY"),
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            size={23}
            name="weight-kilogram"
            color={tintColor}
          />
        )
      }
    },
    Food: {
      screen: Food,
      navigationOptions: {
        tabBarLabel: I18n.t("DIET"),
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            size={23}
            name="food-apple-outline"
            color={tintColor}
          />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: I18n.t("SETTINGS"),
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons size={23} name="settings" color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#900",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "white" }
  }
);
