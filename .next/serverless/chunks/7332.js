"use strict";
exports.id = 7332;
exports.ids = [7332];
exports.modules = {

/***/ 82879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_form)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/data/sections/form-info.json
const form_info_namespaceObject = JSON.parse('{"TN":"Let\'s Talk.","Do":"Email@example.com","m7":"+4.930.705.5448","xh":{"P":"295 Witting Streets Suite 666,","E":"Melbourne, Australia"}}');
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Contact-form/contact-form.jsx






const ContactForm = () => {
  const messageRef = react.useRef(null);

  function validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  const sendMessage = ms => new Promise(r => setTimeout(r, ms));

  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: "contact section-padding",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "form md-mb50",
            children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
              className: "fw-700 color-font mb-50",
              children: "Get In Touch."
            }), /*#__PURE__*/jsx_runtime.jsx(dist.Formik, {
              initialValues: {
                name: "",
                email: "",
                message: ""
              },
              onSubmit: async values => {
                await sendMessage(500);
                alert(JSON.stringify(values, null, 2)); // show message

                messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon."; // Reset the values

                values.name = "";
                values.email = "";
                values.message = ""; // clear message

                setTimeout(() => {
                  messageRef.current.innerText = '';
                }, 2000);
              },
              children: ({
                errors,
                touched
              }) => /*#__PURE__*/(0,jsx_runtime.jsxs)(dist.Form, {
                id: "contact-form",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "messages",
                  ref: messageRef
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "controls",
                  children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/jsx_runtime.jsx(dist.Field, {
                      id: "form_name",
                      type: "text",
                      name: "name",
                      placeholder: "Name",
                      required: "required"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime.jsx(dist.Field, {
                      validate: validateEmail,
                      id: "form_email",
                      type: "email",
                      name: "email",
                      placeholder: "Email"
                    }), errors.email && touched.email && /*#__PURE__*/jsx_runtime.jsx("div", {
                      children: errors.email
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "form-group",
                  children: /*#__PURE__*/jsx_runtime.jsx(dist.Field, {
                    as: "textarea",
                    id: "form_message",
                    name: "message",
                    placeholder: "Message",
                    rows: "4",
                    required: "required"
                  })
                }), /*#__PURE__*/jsx_runtime.jsx("button", {
                  type: "submit",
                  className: "butn bord",
                  children: /*#__PURE__*/jsx_runtime.jsx("span", {
                    children: "Send Message"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-lg-5 offset-lg-1",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "cont-info",
            children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
              className: "fw-700 color-font mb-50",
              children: "Contact Info."
            }), /*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "wow",
              "data-splitting": true,
              children: form_info_namespaceObject.TN
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "item mb-40",
              children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "#0",
                  children: form_info_namespaceObject.Do
                })
              }), /*#__PURE__*/jsx_runtime.jsx("h5", {
                children: form_info_namespaceObject.m7
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "wow",
              "data-splitting": true,
              children: "Visit Us."
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "item",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                children: [form_info_namespaceObject.xh.P, /*#__PURE__*/jsx_runtime.jsx("br", {}), form_info_namespaceObject.xh.E]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "social mt-50",
              children: [/*#__PURE__*/jsx_runtime.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "fab fa-facebook-f"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "fab fa-twitter"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "fab fa-pinterest"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("a", {
                href: "#0",
                className: "icon",
                children: /*#__PURE__*/jsx_runtime.jsx("i", {
                  className: "fab fa-behance"
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const contact_form = (ContactForm);

/***/ }),

/***/ 62107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_header)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/config/particle-config.js
var particle_config = __webpack_require__(14746);
// EXTERNAL MODULE: ./src/config/pr-s-black.js
var pr_s_black = __webpack_require__(40654);
// EXTERNAL MODULE: ./node_modules/react-tsparticles/index.js
var react_tsparticles = __webpack_require__(26868);
var react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(react_tsparticles);
;// CONCATENATED MODULE: ./src/data/sections/contact-header.json
const contact_header_namespaceObject = JSON.parse('{"T":{"P":"Let\'s talk","E":"about your project."},"k":"Feel free to ask me any question or let’s do to talk about our future collaboration."}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Contact-header/contact-header.jsx








const ContactHeader = ({
  sliderRef,
  blackStar
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
    ref: sliderRef,
    className: "pages-header circle-bg valign position-re",
    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-lg-9 col-md-11",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "capt",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h1", {
                className: "color-font mb-10 fw-700",
                children: [contact_header_namespaceObject.T.P, " ", /*#__PURE__*/jsx_runtime.jsx("br", {}), contact_header_namespaceObject.T.E]
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                children: contact_header_namespaceObject.k
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx((react_tsparticles_default()), {
      id: "particles-js",
      options: blackStar ? pr_s_black/* default */.Z : particle_config/* default */.Z
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "circle-color",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "gradient-circle"
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "gradient-circle two"
      })]
    })]
  });
};

/* harmony default export */ const contact_header = (ContactHeader);

/***/ })

};
;