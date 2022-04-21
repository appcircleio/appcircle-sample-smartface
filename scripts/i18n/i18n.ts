/* 
	"lang" variable is required for things like system level error messages and alert button messages.
	Current implementation tries to load the value found in the variable "Device.language".
	If this value is not defined, "SMF.i18n.switchLanguage" function tries to load the value given with "SMF.i18n.defaultLang", which is originally set to be "en".
	If that fails, first found key in "SMF.i18n.languageKV" is attempted to be loaded, and if nothing is found, then nothing is loaded.
	"SMF.i18n.languageKV" is populated by calling "SMF.i18n.defineLanguage".
	Required for BC
*/
global.lang = {};

SMF.i18n = {
  currentLang: null,
  defaultLang: 'en',
  languageKV: {},
  get: function (key, languageCode) {
    languageCode = languageCode || this.currentLang;
    if (typeof this.languageKV[languageCode] === 'undefined') {
      return '';
    }
    return this.languageKV[languageCode][key];
  },
  defineLanguage: function (languageCode, obj) {
    this.languageKV[languageCode] = obj;
  },
  switchLanguage: function (languageCode) {
    if (typeof this.languageKV[languageCode] === 'undefined') {
      if (typeof this.languageKV[this.defaultLang] === 'undefined') {
        const languageCodes = Object.keys(this.languageKV);
        if (languageCodes.length === 0) {
          return;
        }
        // In case default options did not work, pick the first one.
        this.switchLanguage(languageCodes[0]);
      } else {
        this.switchLanguage(this.defaultLang);
      }
    } else {
      this.currentLang = languageCode;
      global.lang = this.languageKV[languageCode];
    }
  }
};

import 'i18n/de';
import 'i18n/en';
import 'i18n/fi';
import 'i18n/tr';

SMF.i18n.switchLanguage(Device.language);
