import { StyleSheet } from "react-native";
import { Colors } from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  imageContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "60%"
  },
  textContainer: {
    flex: 0.5,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 10
  },
  title: {
    fontSize: 26,
    color: Colors.RICHBLACK
  },
  description: {
    fontSize: 18,
    color: Colors.MIDDLEREDPURPLE,
    marginTop: 10
  },
  map: { marginTop: 10, height: 200, width: "100%" }
});
