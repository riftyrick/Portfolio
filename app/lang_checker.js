"use client";
import i18n from 'i18next';

function checkLang() {
    let lang = navigator.language.toLowerCase().slice(0, 2);
    i18n.changeLanguage(lang).catch((e) => {
        if (e.code === 'LANGUAGE_NOT_SUPPORTED') {
            i18n.changeLanguage('fr');
        }
    });
}

export default checkLang;