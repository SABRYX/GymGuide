import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  I18nManager,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { styles } from "./styles";
import { Dropdown } from "react-native-material-dropdown";
import RNRestart from "react-native-restart";
import I18n from "../../localization/i18n";
import { Colors } from "../../config/colors";
import { TextField } from "react-native-material-textfield";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { NavigationActions, StackActions } from "react-navigation";
import { getOptionsWithRoute } from "../../config/api-routes";
import Axios from "axios";

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
      selectedLanguage: "en",
      canUpdate: false,
      password: "",
      confirmPassword: "",
      loading: false,
      error: ""
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

  logOut = async () => {
    try {
      AsyncStorage.removeItem("userLoggedIn");
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
    } catch (error) {
      console.log(error);
    }
  };
  changePassword() {
    let { password, confirmPassword } = this.state;

    this.setState({ loading: true, error: "" }, () => {
      if (password.trim().length > 5 && password === confirmPassword) {
        let options = getOptionsWithRoute("changePassword", {
          password: password,
          confirmPassword: confirmPassword
        });
        Axios(options).then(response => {
          console.log("response", response);
        });
      } else {
        this.setState({
          error: "Passwords have to match and exceed 6 char",
          loading: false
        });
      }
    });
  }

  render() {
    let {
      password,
      confirmPassword,
      canUpdate,
      selectedLanguage,
      loading,
      error
    } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color={Colors.BLEUDEFRANCE} />
          </View>
        ) : null}
        <View style={styles.languageContainer}>
          <Dropdown
            label={I18n.t("SELECTLANGUAGE")}
            data={data}
            value={selectedLanguage}
            onChangeText={value =>
              this.setState({ selectedLanguage: value, canUpdate: true })
            }
            labelFontSize={18}
            baseColor={Colors.BLEUDEFRANCE}
            textColor={Colors.MIDDLEREDPURPLE}
            onBlur={() =>
              canUpdate ? this.languageChange(selectedLanguage) : null
            }
          />
        </View>
        <View>
          <Text style={styles.changePasswordText}>
            {I18n.t("CHANGEPASSWORD")}
          </Text>
          <View style={styles.changePasswordTextContiner}>
            <TextField
              label={I18n.t("PASSWORD")}
              value={password}
              onChangeText={password => this.setState({ password })}
              baseColor={Colors.MIDDLEREDPURPLE}
              tintColorr={Colors.BLEUDEFRANCE}
              secureTextEntry
            />
            <TextField
              label={I18n.t("CONFIRMPASSWORD")}
              value={confirmPassword}
              onChangeText={confirmPassword =>
                this.setState({ confirmPassword })
              }
              baseColor={Colors.MIDDLEREDPURPLE}
              tintColorr={Colors.BLEUDEFRANCE}
              error={error}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            onPress={() => this.changePassword()}
            style={styles.changePasswordButton}
          >
            <Text style={styles.logoutText}>{I18n.t("CHANGEPASSWORD")}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity
            onPress={() => this.logOut()}
            style={styles.logOutButton}
          >
            <SimpleLineIcons
              name="logout"
              size={18}
              style={styles.logoutIcon}
              color={Colors.WHITE}
            />
            <Text style={styles.logoutText}>{I18n.t("LOGOUT")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { Settings };
