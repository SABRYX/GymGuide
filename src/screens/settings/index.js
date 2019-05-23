import React, { Component } from "react";
import { View, AsyncStorage, I18nManager } from "react-native";
import { styles } from "./styles";
import { Dropdown } from "react-native-material-dropdown";
import RNRestart from "react-native-restart";
import i18n from "../../localization/i18n";

let data = [
  {
    value: "ar"
  },
  {
    value: "en"
  }
];

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "en"
    };
  }
  componentWillMount() {
    AsyncStorage.getItem("lang").then(language => {
      if (language === "ar") {
        this.setState({ selectedLanguage: "ar" });
      }
    });
  }

  languageChange(value) {
    AsyncStorage.setItem("lang", `${value}`)
      .then(data => {
        if (value == "en") {
          I18nManager.forceRTL(false);
        } else {
          I18nManager.forceRTL(true);
        }
        RNRestart.Restart();
      })
      .catch(err => {
        console.log("err");
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <Dropdown
            label="Select Language :"
            data={data}
            value={this.state.selectedLanguage}
            onChangeText={value => this.setState({ selectedLanguage: value })}
            labelFontSize={20}
            onBlur={() => this.languageChange(this.state.selectedLanguage)}
          />
        </View>
      </View>
    );
  }
}

export { Settings };
