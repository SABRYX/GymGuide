import i18n from "i18n-js";
import I18n from "react-native-i18n";
import { I18nManager } from "react-native";

import en from "./translations/en.json";
import ar from "./translations/ar.json";

i18n.locale = I18n.currentLocale();
if (I18nManager.isRTL) {
  i18n.locale = "ar";
}
i18n.fallbacks = true;
i18n.translations = { en, ar };

export default i18n;
