import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { Card } from "react-native-elements";
import PurpleBackground from "../../resources/images/backgrounds/purplebg.jpg";
import BlueBackground from "../../resources/images/backgrounds/bluebg.jpg";
import OrangeBackground from "../../resources/images/backgrounds/orangebg.jpg";
import GreenBackground from "../../resources/images/backgrounds/greenbg.jpg";
import HealthClub from "../../resources/images/gymLogos/HealthClub.png";
import Gymnastic from "../../resources/images/gymLogos/Gymnastic.jpeg";
import GymTown from "../../resources/images/gymLogos/GymTown.jpeg";
import FitnessGym from "../../resources/images/gymLogos/FitnessGym.png";
import TheGym from "../../resources/images/gymLogos/TheGym.jpeg";

const GymList = [
  {
    image: GymTown,
    backgroundImage: BlueBackground,
    title: "Gym Town",
    description:
      "On of the best 24/7 gyms in new cairo. We have coach Mohammed Rezk Egypt Champion to Train you"
  },

  {
    image: TheGym,
    backgroundImage: PurpleBackground,
    title: "The Gym",
    description:
      "We are the gym we are unique we are mixed gym bring your partener or maybe you will find your life partener here"
  },
  {
    image: HealthClub,
    backgroundImage: OrangeBackground,
    title: "Health Club",
    description:
      "It's all about health so come on what are you waiting ? Signup Today and Get the Whole year fro half the price ."
  },
  {
    image: Gymnastic,
    backgroundImage: GreenBackground,
    title: "Gymnastic",
    description:
      "We are the only certified Gymantstic center from the RGC (Russian Gymanastic Company) we do it The Russian Way."
  },
  {
    image: FitnessGym,
    backgroundImage: BlueBackground,
    title: "Fitness Gym",
    description:
      "If you know nothing or if you're even a pro the Fitness Gym is the place ypu can train and find a community and a family "
  }
];

class NearbyGyms extends Component {

  navigateToGymDetails(training){
    let { navigation } = this.props;
    
    navigation.navigate("GymDetails",{...training});
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {GymList.map(training => (
          <TouchableOpacity onPress={()=>this.navigateToGymDetails(training)}>
            <Card
              containerStyle={styles.cardItem}
              wrapperStyle={styles.cardItemWrapper}
            >
              <View style={styles.cardImageContainer}>
                <Image source={training.image} style={styles.trainingImage} />
              </View>
              <ImageBackground
                source={training.backgroundImage}
                style={styles.cardTextContainer}
                imageStyle={styles.imageStyle}
              >
                <Text style={styles.title}>{training.title}</Text>
                <Text style={styles.description}>{training.description}</Text>
              </ImageBackground>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export { NearbyGyms };
