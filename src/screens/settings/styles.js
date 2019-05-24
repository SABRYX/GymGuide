import { StyleSheet } from "react-native";
import { Colors } from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  languageContainer: {
    padding: 10
  },
  changePasswordText: {
    fontSize: 18,
    color: Colors.BLEUDEFRANCE,
    padding: 10,
    marginTop: 20,
    paddingBottom: 0
  },
  changePasswordTextContiner: {
    padding: 10,
    paddingTop: 0
  },
  logOutContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  logOutButton: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  logoutIcon: {
    paddingRight: 5
  },
  logoutText: {
    color: Colors.MIDDLEREDPURPLE
  }
});
