import { createStackNavigator } from "react-navigation";
import { NearbyGyms, GymDetails } from "../screens";
import I18n from "../localization/i18n";
import { Colors } from "../config/colors";

export const NearbyGymStack = createStackNavigator({
  NearbyGyms: {
    screen: NearbyGyms,
    navigationOptions: {
      title: I18n.t("NEARBY"),
      headerStyle: {
        backgroundColor: Colors.WHITE
      },
      headerTitleStyle: { alignSelf: "center" },
      headerTintColor: Colors.BLEUDEFRANCE,
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
      }
    }
  },
  GymDetails: {
    screen: GymDetails
  }
});
