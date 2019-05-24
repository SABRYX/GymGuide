import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Localization
import I18n from "../localization/i18n";

/// Screens For the Tab Navigation
import { Home, Food, Settings, Login, Intro } from "../screens";
import { NearbyGymStack } from "./NearbyGymStack";
import { Colors } from "../config/colors";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: I18n.t("HOME"),
      headerStyle: {
        backgroundColor: Colors.WHITE
      },
      headerTitleStyle: { alignSelf: "center" },
      headerTintColor: Colors.BLEUDEFRANCE,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
});

const FoodStack = createStackNavigator({
  Food: {
    screen: Food,
    navigationOptions: {
      title: I18n.t("DIET"),
      headerStyle: {
        backgroundColor: Colors.WHITE
      },
      headerTitleStyle: { alignSelf: "center" },
      headerTintColor: Colors.BLEUDEFRANCE,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: I18n.t("SETTINGS"),
      headerStyle: {
        backgroundColor: Colors.WHITE
      },
      headerTitleStyle: { alignSelf: "center" },
      headerTintColor: Colors.BLEUDEFRANCE,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
});

const MainTabNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: I18n.t("HOME"),
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons size={23} name="home" color={tintColor} />
        )
      }
    },
    NearbyGyms: {
      screen: NearbyGymStack,
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
      screen: FoodStack,
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
      screen: SettingsStack,
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
    activeColor: Colors.BLEUDEFRANCE,
    inactiveColor: Colors.GREY,
    barStyle: { backgroundColor: Colors.WHITE }
  }
);

export const MainStackNavigation = createStackNavigator(
  {
    Intro: {
      screen: Intro
    },
    Login: {
      screen: Login
    },
    MainNavigation: {
      screen: MainTabNavigation
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
