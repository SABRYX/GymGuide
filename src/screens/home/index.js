import React, { Component } from "react";
import { Text, View, ImageBackground, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card } from "react-native-elements";
import PurpleBackground from "../../resources/images/backgrounds/purplebg.jpg";
import BlueBackground from "../../resources/images/backgrounds/bluebg.jpg";
import OrangeBackground from "../../resources/images/backgrounds/orangebg.jpg";
import GreenBackground from "../../resources/images/backgrounds/greenbg.jpg";
import ManSquat from "../../resources/images/images/manSquat.png";
import LegRaises from "../../resources/images/images/legRaises.png";
import Cyclying from "../../resources/images/images/cycleGirl.png";
import DummbleRaise from "../../resources/images/images/dummbleRaise.png";
import BallExchange from "../../resources/images/images/ballExchange.png";

const PysicalTrainingList = [
  {
    image: ManSquat,
    backgroundImage: BlueBackground,
    title: "Squat",
    description:
      "compound, full-body exercise that trains primarily the muscles of the thighs, hips"
  },
  {
    image: LegRaises,
    backgroundImage: OrangeBackground,
    title: "Leg Raises",
    description:
      "non compound, The leg raise is a simple and effective exercise for improving your core strength"
  },
  {
    image: Cyclying,
    backgroundImage: GreenBackground,
    title: "Spinning (cycling)",
    description:
      "non compound, is a form of exercise with classes focusing on endurance, strength, intervals "
  },
  {
    image: DummbleRaise,
    backgroundImage: PurpleBackground,
    title: "Dummble Raises",
    description:
      "compound, strength training for developing the strength . It utilizes the force of gravity by dumbbells"
  },
  {
    image: BallExchange,
    backgroundImage: BlueBackground,
    title: "Ball Exchange (Squez)",
    description:
      "compound, strength training for developing the core . Ypu should start this with a partner this will boost energy"
  }
];

class Home extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {PysicalTrainingList.map(training => (
          <Card
            containerStyle={styles.cardItem}
            wrapperStyle={styles.cardItemWrapper}
          >
            <ImageBackground
              source={training.backgroundImage}
              style={styles.imageBackground}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.cardInnerComponent}>
                <View style={styles.cardImageContainer}>
                  <Image source={training.image} style={styles.trainingImage} />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.title}>{training.title}</Text>
                  <Text style={styles.description}>{training.description}</Text>
                </View>
              </View>
            </ImageBackground>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

export { Home };
