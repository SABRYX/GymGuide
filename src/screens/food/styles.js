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
    borderRadius: 20
  },
  cardInnerComponent: {
    width: "100%",
    height: "100%",
    margin: 10,
    flex: 1,
    flexDirection: "row"
  },
  cardImageContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center"
  },
  trainingImage: {
    height: "60%",
    width: "100%"
  },
  cardTextContainer: {
    flex: 0.7,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  factsInnerContainer: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: Colors.WHITE,
    fontSize: 26,
    fontWeight: "500",
    padding: 10
  },
  subTitle: {
    color: Colors.WHITE,
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 15
  },
  fact: {
    color: Colors.WHITE,
    fontSize: 12,
    paddingLeft: 15
  },
  factsContainer: {
    alignSelf: "flex-start"
  }
});
