import React, { Component } from "react";
import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../config/colors";

class GymDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title ? params.title : "Details Screen",
      headerStyle: {
        backgroundColor: Colors.WHITE
      },
      headerTitleStyle: { alignSelf: "center" },
      headerTintColor: Colors.BLEUDEFRANCE,
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        flex: 0.85
      }
    };
  };
  render() {
    const { navigation } = this.props;
    const { image, title, description } = navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <ScrollView
          style={styles.textContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
      </View>
    );
  }
}

export { GymDetails };
