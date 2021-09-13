(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Navigation.js




const Navigation = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container px-4 mx-auto lg:max-w-4xl flex items-center justify-between",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white",
          children: "Amelia Huertos Mugica"
        })
      })
    })
  });
};

/* harmony default export */ const components_Navigation = (Navigation);
;// CONCATENATED MODULE: ./components/Footer.js




const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-4xl px-4 mx-auto text-gray-800 dark:text-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-between lg:flex-row items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "ameliahuertos@gmail.com"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.instagram.com/ameliahuertos/",
            className: "transition-colors hover:text-green-500",
            target: "_blank",
            rel: "noreferrer",
            children: "Instagram"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.linkedin.com/in/amelia-h-550b4a12a/",
            className: "transition-colors hover:text-green-500",
            target: "_blank",
            rel: "noreferrer",
            children: "LinkedIn"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://estudio-lahoguera.es/",
            className: "transition-colors hover:text-green-500",
            target: "_blank",
            rel: "noreferrer",
            children: "LaHoguera"
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,664], () => (__webpack_exec__(694)));
module.exports = __webpack_exports__;

})();