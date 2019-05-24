import { StyleSheet } from "react-native";
import { Colors } from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 10
  },
  imageContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "50%"
  },
  textFieldContainer: {
    width: "80%",
    alignSelf: "center"
  },
  loginButton: {
    width: "60%",
    height: "8%",
    borderRadius: 100,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 40,
    overflow: "hidden"
  },
  loginButtonBackground: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  loginText: {
    color: Colors.WHITE,
    fontSize: 22,
    paddingRight: 5
  },
  activityIndicatorContainer: {
    position: "absolute",
    marginTop:"70%",
    paddingLeft:"54%"
  }
});
