import {
  TabNavigation,
  TabButton
} from "@opengeekslab/react-native-tab-navigator";

//Localization
import I18n from "../localization/i18n";

/// Screens For the Tab Navigation
import Home from "./home";
import Food from "./food";
import NearbyGyms from "./nearby-gyms";
import Settings from "./settings";

/// Icons For The Tab Navigation
import gym from "../resources/images/icons/gym.png";
import dummble from "../resources/images/icons/dummble.png";
import healthyFood from "../resources/images/icons/healthyFood.png";
import settings from "../resources/images/icons/settings.png";

const navigationRouter = {
  Screen_1: {
    screen: Home,
    screenOptions: {
      title: I18n.t("HOME"),
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
      title: I18n.t("NEARBY"),
      showTitle: true,
      tabIcon: dummble,
      animation: ["ripple", { name: "scale" }]
    }
  },
  Screen_3: {
    screen: NearbyGyms,
    screenOptions: {
      title: I18n.t("DIET"),
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
      title: I18n.t("SETTINGS"),
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
    activeTintColor: "#900",
    inactiveTintColor: "#818692"
  }
};

export const MainTabNavigation = TabNavigation(navigationRouter, defaultConfig);
