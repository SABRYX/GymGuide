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
import { ToastAndroid } from "react-native";

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
      error: "",
      user: {},
      token: ""
    };
  }
  componentWillMount() {
    AsyncStorage.getItem("lang").then(language => {
      if (language === "ar") {
        this.setState({ selectedLanguage: "ar" });
      }
    });
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        this.setState({ user: JSON.parse(user) });
      }
    });
    AsyncStorage.getItem("accessToken").then(token => {
      if (token) {
        console.log(token);
        this.setState({ token: JSON.parse(token) });
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
      AsyncStorage.removeItem("user");
      AsyncStorage.removeItem("accessToken");
      AsyncStorage.removeItem("lang");
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
    let { password, confirmPassword, token } = this.state;

    this.setState({ loading: true, error: "" }, () => {
      if (password.trim().length > 5 && password === confirmPassword) {
        let options = getOptionsWithRoute(
          "changePassword",
          {
            password: password,
            password_confirmation: confirmPassword
          },
          token
        );
        Axios(options).then(response => {
          if (response.status === 200) {
            this.setState({ loading: false });
            ToastAndroid.show("Password changed success", ToastAndroid.SHORT);
          }
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
      error,
      user
    } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color={Colors.BLEUDEFRANCE} />
          </View>
        ) : null}
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText}> Hello {user.name} !</Text>
        </View>
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
