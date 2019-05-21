import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

//Localization
import { I18nManager, AsyncStorage } from "react-native";
import i18n from "./src/localization/i18n";
import { MainTabNavigation } from "./src/screens";
import RNRestart from "react-native-restart";


export default class App extends Component {
  componentDidMount() {
    // AsyncStorage.setItem("lang", "ar")
		// 	.then(data => {
		// 		RNRestart.Restart();
		// 	})
		// 	.catch(err => {
		// 		console.log("err");
		// 	});
    // AsyncStorage.getItem("lang").then(language => {
    //   if (language === "ar") {
    //     I18nManager.forceRTL(true);
    //     if (!I18nManager.isRTL) {
    //       RNRestart.Restart();
    //     }
    //   } else {
    //     I18nManager.forceRTL(false);
    //     if (I18nManager.isRTL) {
    //       RNRestart.Restart();
    //     }
    //   }
    //   i18n.locale = language;
    // });
  }

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
