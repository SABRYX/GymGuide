import React, { Component } from "react";
import MainTabNavigation from "./src//navigation";
import I18n from "./src/localization/i18n";

export default class App extends Component {
  componentDidMount() {
    this.getLocal()
  }
  getLocal = async () => {
    try {
      AsyncStorage.getItem("lang").then(language => {
        if (language === "ar") {
          I18nManager.forceRTL(true);
          if (!I18nManager.isRTL) {
            RNRestart.Restart();
          }
          F;
        } else {
          I18nManager.forceRTL(false);
          if (I18nManager.isRTL) {
            RNRestart.Restart();
          }
        }
        I18n.locale = language;
      });
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return <MainTabNavigation />;
  }
}
