import React, { Component } from "react";
import { Image, View, Text, ScrollView, Linking, Platform } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../config/colors";
import MapView, { Marker } from "react-native-maps";

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

  openGoogleMaps() {
    const { navigation } = this.props;
    const { title } = navigation.state.params;

    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = `${37.78825},${-122.4324}`;
    const label = title;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  }

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
          <View>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324
                }}
                title={title}
                onPress={() => this.openGoogleMaps()}
              />
            </MapView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export { GymDetails };
