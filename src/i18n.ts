import i18n from "i18next"
import  {initReactI18next} from "react-i18next"
import {TRANSLATION_VN} from "./locales/vn/translation";
import {TRANSLATION_EN} from "./locales/en/translation";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATION_EN
            },
            vn: {
                translation: TRANSLATION_VN
            }
        },
        fallbackLng: 'en',
        whitelist: ['en', 'vn'],
        lng: 'en',
    })

export default i18n;