import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { styles } from "./styles";
import { Colors } from "../../config/colors";
import TheGym from "../../resources/images/gymLogos/TheGym.jpeg";
import BlueBackground from "../../resources/images/backgrounds/bluebg.jpg";
import { TextField } from "react-native-material-textfield";
import I18n from "../../localization/i18n";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Axios from "axios";
import { getOptionsWithRoute } from "../../config/api-routes";
import { NavigationActions, StackActions } from "react-navigation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      error: ""
    };
  }
  loginVerify() {
    let { password, email } = this.state;

    this.setState({ loading: true, error: "" }, () => {
      if (email.trim().length > 4 && password.trim().length > 5) {
        let options = getOptionsWithRoute("login", {
          email: email,
          password: password
        });
        console.log(options);
        Axios(options).then(response => {
          if (response.status === 200) {
            AsyncStorage.setItem("user", JSON.stringify(response.data.user))
              .then(() => {
                AsyncStorage.setItem(
                  "accessToken",
                  JSON.stringify(response.data.token)
                ).then(() => {
                  this.props.navigation.dispatch(
                    StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({
                          routeName: "MainNavigation"
                        })
                      ]
                    })
                  );
                });
              })
              .catch(err => {
                console.log("err");
              });
          }
        });
      } else {
        this.setState({
          error: "Incorrect email or password please try again",
          loading: false
        });
      }
    });
  }
  render() {
    let { password, email, loading, error } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color={Colors.BLEUDEFRANCE} />
          </View>
        ) : null}
        <View style={styles.imageContainer}>
          <Image source={TheGym} style={styles.image} />
        </View>

        <View style={styles.textFieldContainer}>
          <TextField
            label={I18n.t("EMAIL")}
            value={email}
            onChangeText={email => this.setState({ email })}
            baseColor={Colors.BLEUDEFRANCE}
            tintColorr={Colors.BLEUDEFRANCE}
            renderAccessory={() => (
              <SimpleLineIcons
                name="envelope"
                size={20}
                color={Colors.BLEUDEFRANCE}
              />
            )}
          />
          <TextField
            label={I18n.t("PASSWORD")}
            value={password}
            onChangeText={password => this.setState({ password })}
            baseColor={Colors.BLEUDEFRANCE}
            tintColorr={Colors.BLEUDEFRANCE}
            renderAccessory={() => (
              <SimpleLineIcons
                name="lock"
                size={20}
                color={Colors.BLEUDEFRANCE}
              />
            )}
            secureTextEntry
            error={error}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.loginVerify()}
        >
          <ImageBackground
            source={BlueBackground}
            style={styles.loginButtonBackground}
          >
            <Text style={styles.loginText}>Login</Text>
            <MaterialIcons
              name="fitness-center"
              color={Colors.WHITE}
              size={24}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

export { Login };
