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
    borderRadius: 20,
    flex: 1,
    flexDirection: "row"
  },
  cardItemWrapper: {
    padding: 0,
    flex: 1,
    flexDirection: "row"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  imageStyle: {
    borderRadius: 0
  },
  cardInnerComponent: {
    width: "100%",
    height: "100%",
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
    height: "100%",
    width: "100%"
  },
  title: {
    color: Colors.WHITE,
    fontSize: 26,
    fontWeight: "500",
    padding: 10
  },
  description: {
    color: Colors.WHITE,
    fontSize: 13,
    fontWeight: "500",
    padding: 10
  }
});
