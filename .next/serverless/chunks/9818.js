"use strict";
exports.id = 9818;
exports.ids = [9818];
exports.modules = {

/***/ 32979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = element => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;

    if (element) {
      element.forEach(item => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);

/***/ }),

/***/ 38037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach(item => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);

/***/ }),

/***/ 19818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ intro_with_slider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./src/data/sections/intro.json
const intro_namespaceObject = JSON.parse('[{"id":1,"title":"Original Solutions","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/02.jpg"},{"id":2,"title":"Digital Design Awards","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]');
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 12 modules
var swiper_react = __webpack_require__(72873);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(88116);
// EXTERNAL MODULE: ./src/common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(38037);
// EXTERNAL MODULE: ./src/common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(32979);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Intro-with-slider/intro-with-slider.jsx












swiper_esm/* default.use */.ZP.use([swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Parallax */.VS]);

const IntroWithSlider = ({
  sliderRef
}) => {
  const [load, setLoad] = react.useState(true);
  react.useEffect(() => {
    (0,fadeWhenScroll/* default */.Z)(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      (0,removeSlashpagination/* default */.Z)();
      setLoad(false);
    }, 1000);
  }, []);
  const navigationPrevRef = react.useRef(null);
  const navigationNextRef = react.useRef(null);
  const paginationRef = react.useRef(null);
  return /*#__PURE__*/jsx_runtime.jsx("header", {
    ref: sliderRef,
    className: "slider slider-prlx fixed-slider text-center",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "swiper-container parallax-slider",
      children: [!load ? /*#__PURE__*/jsx_runtime.jsx(swiper_react/* Swiper */.t, {
        speed: 1000,
        parallax: true,
        navigation: {
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        },
        pagination: {
          type: "fraction",
          clickable: true,
          el: paginationRef.current
        },
        onBeforeInit: swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        },
        onSwiper: swiper => {
          setTimeout(() => {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
            }

            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.destroy();
            swiper.pagination.init();
            swiper.pagination.update();
          });
        },
        className: "swiper-wrapper",
        slidesPerView: 1,
        children: intro_namespaceObject.map(slide => /*#__PURE__*/jsx_runtime.jsx(swiper_react/* SwiperSlide */.o, {
          className: "swiper-slide",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "bg-img valign",
            style: {
              backgroundImage: `url(${slide.image})`
            },
            "data-overlay-dark": "6",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "container",
              children: /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "col-lg-8 col-md-10",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "caption center mt-30",
                    children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
                      className: "color-font",
                      children: slide.title
                    }), (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/jsx_runtime.jsx("p", {
                      children: slide.content
                    }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
                      href: "/about/about-dark",
                      children: /*#__PURE__*/jsx_runtime.jsx("a", {
                        className: "butn bord curve mt-30",
                        children: /*#__PURE__*/jsx_runtime.jsx("span", {
                          children: "Look More"
                        })
                      })
                    })]
                  })
                })
              })
            })
          })
        }, slide.id))
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "setone setwo",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          ref: navigationNextRef,
          className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fas fa-chevron-right"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          ref: navigationPrevRef,
          className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fas fa-chevron-left"
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        ref: paginationRef,
        className: "swiper-pagination top botm"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "social-icon",
        children: [/*#__PURE__*/jsx_runtime.jsx("a", {
          href: "#0",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fab fa-facebook-f"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          href: "#0",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fab fa-twitter"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          href: "#0",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fab fa-behance"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("a", {
          href: "#0",
          children: /*#__PURE__*/jsx_runtime.jsx("i", {
            className: "fab fa-pinterest-p"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const intro_with_slider = (IntroWithSlider);

/***/ })

};
;