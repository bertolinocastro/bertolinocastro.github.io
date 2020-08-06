---
layout:
---

/*  reference:
 *  https://meumobi.github.io/jekyll/2019/06/05/multi-languages-with-jekyll.html
 */

function getBestSuitableSupportedLang(lang) {
  if ({{ site.languages | jsonify }}.includes(lang)) {
    return lang;
  } else {
    return {{ site.default_lang | jsonify }};
  }
}

var lang = (navigator.userLanguage || navigator.language).toLowerCase().split('-')[0];
var suitable_lang = getBestSuitableSupportedLang(lang);

var current_lang = document.documentElement.lang;

var hostname = window.location.hostname;
var referrer = document.referrer;

var landingPage = !referrer || referrer.indexOf(hostname) == -1;

if (landingPage && (current_lang !== suitable_lang)) {
  if (suitable_lang !== {{ site.default_lang | jsonify }}){ // this page is only loaded in home
    window.location = '/' + suitable_lang + '/';
  } else {
    window.location = '/';
  }
}
