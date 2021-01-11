(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n/******************* Menu *****************************************************/\n/************************ Menu Controls ******************************************/\n/******************* Game Score Container Variables ***************************/\n/******************* Game Score Container Variables ***************************/\n/******************* Game Score Container Variables ***************************/\n/******************* Game Score Highlight Variables ***************************/\n/******************* Game Score Annotation Variables ***************************/\n/******************* Game Score Variation Variables ***************************/\n/******************* Game Score Ply Variables ***************************/\n/******************** Control Colors ************************************/\n/******************** Board Colors ************************************/\n/******************** Font Sizes ************************************/\n:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}", "",{"version":3,"sources":["styles.scss","assets/scss/modules/_fonts.scss"],"names":[],"mappings":"AAAA,8EAAA;ACAA;EACI,qBAAA;EACA,qFAAA;EAEA,iBAAA;EACA,kBAAA;EACA,kBAAA;ADCJ;ACEA;EACI,qBAAA;EACA,2FAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADDJ;ACIA;EACE,+BAAA;EACA,uGAAA;EAEA,iBAAA;EACA,kBAAA;EACA,kBAAA;ADHF;ACMA;EACE,+BAAA;EACA,+FAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADLF;ACQA;EACE,kCAAA;EACA,qGAAA;EAEA,kBAAA;EACA,kBAAA;ADPF;ACWA;EACE,oBAAA;EACA,0FAAA;EAEA,kBAAA;EACA,kBAAA;ADVF;AADA,+EAAA;AAGA,kFAAA;AAKA,+EAAA;AAUA,+EAAA;AAMA,+EAAA;AAMA,+EAAA;AAMA,gFAAA;AAKA,+EAAA;AAKA,yEAAA;AAKA,yEAAA;AAIA,uEAAA;AAQA,qEAAA;AAwBA;EACE,mBAAA;EACA,mBAAA;EAEA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,iBAAA;AAzEF","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\n@import \"./assets/scss/modules/_fonts.scss\";\n$gamescore-family: \"FigurineSymbolT1\";\n$gamescore-highlight: #585858ff;\n$gamescore-foreground: white;\n\n$red: #e43030;\n$green: #19a187;\n$light-blue: #00ffffff;\n$blue: #367bf0;\n$dark-blue: #265ab1;\n$maroon: #b8174c;\n$purple: #8c42ab;\n\n// Main ARIA Color Element Variables\n$textColor: var(--textColor); // Main Text Color\n$textColorAttention: var(--textColorAttention); // Attention text\n$textColorRemove: var(--textColorRemove); // Remove/Delete/Close\n$textColorAdd: var(--textColorAdd); // Add/Create/Open\n$textColorActive: var(--textColorActive); // Add/Create/Open\n$background: var(--background); // Main background Color\n$bgContainer: var(--bgContainer); // background of Containers\n$bgMenu: var(--bgMenu); // background of Menus\n$bgItem: var(--bgItem); // background of Items\n\n// Context Menu\n$bgContext: var(--bgContext); // background of Context Menu\n$textColorContext: var(--textColorContext); // text color Context Menu\n$borderContext: var(--borderContext); // border Context Menu\n$overlayContextBackground: var(\n  --overlayContextBackground\n); // Context Menu Overlay background main\n$overlayContextBackgroundGradient: var(\n  --overlayContextBackgroundGradient\n); // Context Menu background gradient\n\n\n\n/******************* Menu *****************************************************/\n$meBackground: var(--meBackground);\n\n/************************ Menu Controls ******************************************/\n$csFill: var(--csFill);\n$csAccent: var(--csAccent);\n$csAccent2: var(--csAccent2);\n\n/******************* Game Score Container Variables ***************************/\n$gsTextColor: var(--gsTextColor); // Text color for game score\n$gsBackground: var(--gsBackground); // background of Containers\n$gsListBackground: var(--gsListBackground); // list background of game score\n$gsBorder: var(--gsBorder); // background of Menus\n$gsTextSize: var(--gsTextSize); // background of Menus\n$gsFontFamily: var(--gsFontFamily); // score font\n$gsTableItemWidth: var(--gsTableItemWidth); // width of score item in table layout\n$gsTablePlyWidth: var(--gsTablePlyWidth); // width of ply element in table layout\n\n/******************* Game Score Container Variables ***************************/\n$gsTextColorMW: var(--gsTextColorMW); // Text color for game score\n$gsBackgroundMW: var(--gsBackgroundMW); // background of Containers\n$gsBorderMW: var(--gsBorderMW); // background of Menus\n$gsTextSizeMW: var(--gsTextSizeMW); // background of Menus\n\n/******************* Game Score Container Variables ***************************/\n$gsTextColorMB: var(--gsTextColorMB); // Text color for game score\n$gsBackgroundMB: var(--gsBackgroundMB); // background of Containers\n$gsBorderMB: var(--gsBorderMB); // background of Menus\n$gsTextSizeMB: var(--gsTextSizeMB); // background of Menus\n\n/******************* Game Score Highlight Variables ***************************/\n$gsTextColorHG: var(--gsTextColorHG); // Text color for highlight\n$gsAnnotationColorHG: var(--gsAnnotationColorHG); // Annotation/Comment color for highlight\n$gsBackgroundHG: var(--gsBackgroundHG); // background for highlight\n$gsBorderHG: var(--gsBorderHG); // border for highlight\n\n/******************* Game Score Annotation Variables ***************************/\n$gsTextColorAN: var(--gsTextColorAN); // Text color for highlight\n$gsBackgroundAN: var(--gsBackgroundAN); // background for highlight\n$gsBorderAN: var(--gsBorderAN); // border for highlight\n\n/******************* Game Score Variation Variables ***************************/\n$gsTextColorVA: var(--gsTextColorVA); // Text color for highlight\n$gsBackgroundVA: var(--gsBackgroundVA); // background for highlight\n$gsBorderVA: var(--gsBorderVA); // border for highlight\n\n/******************* Game Score Ply Variables ***************************/\n$gsTextColorPC: var(--gsTextColorPC); // Text color for game score ply\n$gsBackgroundPC: var(--gsBackgroundPC); // background for game score ply\n$gsBorderPC: var(--gsBorderPC); // border for game score ply\n\n/******************** Control Colors ************************************/\n$csBackground: var(--csBackground); // background for controls\n$csColor: var(--csColor); // controls color (foreground)\n\n/******************** Board Colors ************************************/\n$boardBGDark: var(--boardBGDark); // board dark tile\n$boardBGLight: var(--boardBGLight); // board light tile\n$boardLabelLight: var(--boardLabelLight); // board light label\n$boardLabelDark: var(--boardLabelDark); // board dark label\n\n\n\n/******************** Font Sizes ************************************/\n$gsFontSize: var(--gsFontSize); // board dark tile\n$gsFontSizeAN: var(--gsFontSizeAN); // board light tile\n$gsFontSizeHG: var(--gsFontSizeHG); // board light label\n$gsFontSizeVA: var(--gsFontSizeVA); // board dark label\n$gsFontSizePC: var(--gsFontSizePC); // board dark label\n$hdrDataFontSize: var(--hdrDataFontSize); // size of player showcase data\n$hdrNameFontSize: var(--hdrNameFontSize); // size of player showcase Name\n$hdrTitleFontSize: var(--hdrTitleFontSize); // size of player showcase data\n$hdrVariantFontSize: var(--hdrVariantFontSize); // size of player showcase Name\n$hdrMatchDataFontSize: var(--hdrMatchDataFontSize); // size of player showcase Name\n$hdrOpeningFontSize: var(--hdrMatchDataFontSize); // size of player showcase Name\n$hdrResultFontSize: var(--hdrResultFontSize); // size of player showcase Name\n$hdrRoundFontSize: var(--hdrRoundFontSize); // size of player showcase Name\n\n// General stuff\n$text-color: var(--text-color);\n$bg-outer: var(--bg-outer);\n$bg-inner: var(--bg-inner);\n\n$bg-color: #f2f3f7;\n$fg-color: #383a41;\n\n$glow-shadow: 0 0 0.5em transparentize($blue, 0.3);\n:root {\n  --bg-color: #{$bg-color};\n  --fg-color: #{$fg-color};\n\n  --red: #{$red};\n  --green: #{$green};\n  --blue: #{$blue};\n  --dark-blue: #{$dark-blue};\n  --maroon: #{$maroon};\n  --purple: #{$purple};\n}\n","@font-face {\n    font-family: 'Caveat';\n    src: url('../../fonts/Bold/Caveat-Bold.woff2') format('woff2'),\n        url('../../fonts/Bold/Caveat-Bold.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Caveat';\n    src: url('../../fonts/Regular/Caveat-Regular.woff2') format('woff2'),\n        url('../../fonts/Regular/Caveat-Regular.woff') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n  font-family: 'FigurineSymbolT1';\n  src: url('../../fonts/3rd Party/ChessVariants/FigurineSymbolT1Bold.woff2') format('woff2'),\n      url('../../fonts/3rd Party/ChessVariants/FigurineSymbolT1Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'FigurineSymbolT1';\n  src: url('../../fonts/3rd Party/ChessVariants/FigurineSymbolT1.woff2') format('woff2'),\n      url('../../fonts/3rd Party/ChessVariants/FigurineSymbolT1.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'SanctuaryPlayground';\n  src: url('../../fonts/3rd Party/SanctuaryPlayground.woff2') format('woff2'),\n      url('../../fonts/3rd Party/SanctuaryPlayground.woff') format('woff');\n  font-style: normal;\n  font-display: swap;\n}\n\n\n@font-face {\n  font-family: 'Amita';\n  src: url('../../fonts/3rd Party/Amita/Amita-Regular.woff2') format('woff2'),\n      url('../../fonts/3rd Party/Amita/Amita-Regular.woff2') format('woff');\n  font-style: normal;\n  font-display: swap;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\Aria\src\styles.scss */"./src/styles.scss");


/***/ })

},[[5,"runtime"]]]);
//# sourceMappingURL=styles.js.map