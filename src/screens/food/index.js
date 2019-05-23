import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./styles";
import axios from "axios";
import PurpleBackground from "../../resources/images/backgrounds/purplebg.jpg";
import BlueBackground from "../../resources/images/backgrounds/bluebg.jpg";
import OrangeBackground from "../../resources/images/backgrounds/orangebg.jpg";
import GreenBackground from "../../resources/images/backgrounds/greenbg.jpg";
import Pear from "../../resources/images/food/Peach.png";
import Banana from "../../resources/images/food/Banana.png";
import Lemon from "../../resources/images/food/Lemon.png";
import Raspberry from "../../resources/images/food/Raspberry.png";
import Cherry from "../../resources/images/food/Cherry.jpeg";
import Apple from "../../resources/images/food/Apple.png";
import Orange from "../../resources/images/food/Orange.png";
import Pineapple from "../../resources/images/food/Pineapple.png";
import Strawberry from "../../resources/images/food/Strawberry.png";
import Tomato from "../../resources/images/food/Tomato.png";
import Watermelon from "../../resources/images/food/Watermelon.png";
import { Colors } from "../../config/colors";

class Food extends Component {
  constructor(props) {
    super(props);
    this.fetchMore = this._fetchMore.bind(this);
    this.fetchData = this._fetchData.bind(this);
    this.state = {
      isLoading: true,
      isLoadingMore: false,
      _data: null
    };
  }

  componentDidMount() {
    this.fetchData(responseJson => {
      const data = responseJson.data;
      this.setState({
        isLoading: false,
        _data: data
      });
    });
  }

  _fetchData(callback) {
    axios
      .get(`http://www.fruityvice.com/api/fruit/all`)
      .then(response => {
        console.log(response);
        callback(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  _fetchMore() {
    this.fetchData(responseJson => {
      const data = this.state._data.concat(responseJson.data);
      this.setState({
        isLoadingMore: false,
        _data: data
      });
    });
  }

  getImage(name) {
    switch (name) {
      case "Pear":
        return Pear;
      case "Banana":
        return Banana;
      case "Lemon":
        return Lemon;
      case "Raspberry":
        return Raspberry;
      case "Cherry":
        return Cherry;
      case "Apple":
        return Apple;
      case "Orange":
        return Orange;
      case "Pineapple":
        return Pineapple;
      case "Strawberry":
        return Strawberry;
      case "Tomato":
        return Tomato;
      case "Watermelon":
        return Watermelon;
      default:
        break;
    }
  }
  getBackgroundImage(name) {
    switch (name) {
      case "Pear":
        return PurpleBackground;
      case "Banana":
        return PurpleBackground;
      case "Lemon":
        return GreenBackground;
      case "Raspberry":
        return BlueBackground;
      case "Cherry":
        return OrangeBackground;
      case "Apple":
        return BlueBackground;
      case "Orange":
        return BlueBackground;
      case "Pineapple":
        return GreenBackground;
      case "Strawberry":
        return GreenBackground;
      case "Tomato":
        return OrangeBackground;
      case "Watermelon":
        return PurpleBackground;
      default:
        break;
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.BLEUDEFRANCE} />
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.state._data}
          renderItem={({ item: rowData }) => {
            return (
              <Card
                containerStyle={styles.cardItem}
                wrapperStyle={styles.cardItemWrapper}
              >
                <ImageBackground
                  source={this.getBackgroundImage(rowData.name)}
                  style={styles.cardTextContainer}
                  imageStyle={styles.imageStyle}
                >
                  <Text style={styles.title}>{rowData.name}</Text>
                  <View style={styles.factsContainer}>
                    <Text style={styles.subTitle}>nutritions:</Text>
                    <View style={styles.factsInnerContainer}>
                      <View>
                        <Text style={styles.fact}>
                          calories:{rowData.nutritions.calories}
                        </Text>
                        <Text style={styles.fact}>
                          carbohydrates:{rowData.nutritions.carbohydrates}
                        </Text>
                        <Text style={styles.fact}>
                          fat:{rowData.nutritions.fat}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.fact}>
                          protein:{rowData.nutritions.protein}
                        </Text>
                        <Text style={styles.fact}>
                          sugar:{rowData.nutritions.sugar}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.cardImageContainer}>
                  <Image
                    source={this.getImage(rowData.name)}
                    style={styles.trainingImage}
                  />
                </View>
              </Card>
            );
          }}
          onEndReached={() =>
            this.setState({ isLoadingMore: true }, () => this.fetchMore())
          }
          keyExtractor={(item, index) => index}
        />
      );
    }
  }
}

export { Food };
