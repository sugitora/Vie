"use strict";
exports.id = 6827;
exports.ids = [6827];
exports.modules = {

/***/ 56827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72873);
/* harmony import */ var _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(265);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88116);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);










swiper__WEBPACK_IMPORTED_MODULE_4__/* ["default"].use */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_4__/* .Navigation */ .W_, swiper__WEBPACK_IMPORTED_MODULE_4__/* .Parallax */ .VS, swiper__WEBPACK_IMPORTED_MODULE_4__/* .Mousewheel */ .Gk]);

const ShowcasesFullScreenCircleSlide = () => {
  const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);
  const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
    className: "slider circle-slide showcase-carus",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      id: "content-carousel-container-unq-1",
      className: "swiper-container",
      children: !load ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .t, {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        spaceBetween: 500,
        navigation: {
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        },
        onBeforeInit: swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        },
        onSwiper: swiper => {
          setTimeout(() => {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
            }

            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        },
        className: "swiper-wrapper",
        breakpoints: {
          0: {
            spaceBetween: 0
          },
          640: {
            spaceBetween: 0
          },
          768: {
            spaceBetween: 30
          },
          1024: {
            spaceBetween: 500
          }
        },
        children: _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_3__.map(slide => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o, {
          className: "swiper-slide",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "full-width",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "bg-img valign",
              style: {
                backgroundImage: `url(${slide.image})`
              },
              "data-overlay-dark": "1",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "caption ontop valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "o-hidden",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                    "data-swiper-parallax": "-2000",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      href: `/project-details2/project-details2-dark`,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                          className: "stroke",
                          children: slide.title.first
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                          children: slide.title.second
                        })]
                      })
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "copy-cap valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "cap",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                    "data-swiper-parallax": "-2000",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      href: `/project-details2/project-details2-dark`,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                          className: "stroke",
                          children: slide.title.first
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                          children: slide.title.second
                        })]
                      })
                    })
                  })
                })
              })]
            })
          })
        }, slide.id))
      }) : null
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "txt-botm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        ref: navigationNextRef,
        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "Next Slide"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fas fa-chevron-right"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        ref: navigationPrevRef,
        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fas fa-chevron-left"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "Prev Slide"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcasesFullScreenCircleSlide);

/***/ })

};
;