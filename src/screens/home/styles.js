import { StyleSheet } from "react-native";
import { Colors } from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  cardItem: {
    width: "90%",
    height: 175,
    padding: 0,
    borderRadius: 20
  },
  cardItemWrapper: {
    padding: 0
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  imageStyle: {
    borderRadius: 20
  },
  cardInnerComponent: {
    margin: 10,
    flex: 1,
    flexDirection: "row"
  },
  cardImageContainer: {
    flex: 0.5
  },
  trainingImage: {
    height: "90%",
    width: "100%"
  },
  cardTextContainer: {
    flex: 0.5,
    paddingLeft: 5
  },
  title: {
    color: Colors.WHITE,
    fontSize: 26,
    fontWeight: "500"
  },
  description: {
    color: Colors.WHITE,
    fontSize: 15,
    fontWeight: "500"
  }
});
