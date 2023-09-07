"use strict";
exports.id = 6257;
exports.ids = [6257];
exports.modules = {

/***/ 16257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ numbers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/data/sections/fun-fact.json
const fun_fact_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","content":"People who are commited to their management tasks.","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","content":"Signed projects that have been confirmed complete!","value":"133"},{"id":3,"icon":"pe-7s-medal","content":"International awards and cups for design projects.","value":"46"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(51514);
// EXTERNAL MODULE: ./node_modules/react-countup/build/index.js
var build = __webpack_require__(17857);
// EXTERNAL MODULE: ./node_modules/react-visibility-sensor/dist/visibility-sensor.js
var visibility_sensor = __webpack_require__(33082);
var visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(visibility_sensor);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Numbers/numbers.jsx








const Numbers = () => {
  react.useEffect(() => {
    console.clear();
  });
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: "number-sec section-padding",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "FUN FACTS"
            }), /*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "wow color-font",
              children: "Pleasure in the job puts perfection in the work."
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "row",
        children: fun_fact_namespaceObject.map(item => /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item no-bord sm-mb50",
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: `icon ${item.icon}`
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
              className: "",
              children: ["\xA0", /*#__PURE__*/jsx_runtime.jsx(build/* default */.ZP, {
                redraw: true,
                end: item.value,
                duration: "3",
                children: ({
                  countUpRef,
                  start
                }) => /*#__PURE__*/jsx_runtime.jsx((visibility_sensor_default()), {
                  onChange: start,
                  delayedCall: true,
                  children: /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "count",
                    ref: countUpRef
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: item.content
              })
            })]
          })
        }, item.id))
      })]
    })
  });
};

/* harmony default export */ const numbers = (Numbers);

/***/ })

};
;