(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2263:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__hLzfs",
	"container--narrow": "Container_container--narrow__7UqV1",
	"container--wide": "Container_container--wide__Ahxjj",
	"lead": "Container_lead__FBHnz"
};


/***/ }),

/***/ 3910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CalloutBox_CalloutBox)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Icon/index.ts
var Icon = __webpack_require__(7621);
;// CONCATENATED MODULE: ./src/components/CalloutBox/CalloutBox.tsx


const CalloutBox = ({ title , body , iconType  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "callout-block",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "callout-block__icon",
                children: /*#__PURE__*/ jsx_runtime.jsx(Icon/* default */.Z, {
                    type: iconType
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "callout-block__details",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "callout-block__title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: body
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CalloutBox_CalloutBox = (CalloutBox);

;// CONCATENATED MODULE: ./src/components/CalloutBox/index.ts




/***/ }),

/***/ 2710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Testimonial_Testimonial)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/Testimonial/Testimonial.tsx

const Testimonial = ({ quote , author  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "testimonial",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: quote
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "testimonial__author",
                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: author
                })
            })
        ]
    });
};
/* harmony default export */ const Testimonial_Testimonial = (Testimonial);

;// CONCATENATED MODULE: ./src/components/Testimonial/index.ts




/***/ }),

/***/ 7598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Container_Container)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/layout/Container/Container.module.scss
var Container_module = __webpack_require__(2263);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./src/layout/Container/Container.tsx



const Container = ({ children , narrow , wide  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${(Container_module_default()).container} ${narrow ? (Container_module_default())["container--narrow"] : ""} ${wide ? (Container_module_default())["container--wide"] : ""}`,
        children: children
    });
};
/* harmony default export */ const Container_Container = (Container);

;// CONCATENATED MODULE: ./src/layout/Container/index.ts




/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4144);
/* harmony import */ var _layout_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7598);
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9147);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7621);
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4928);
/* harmony import */ var _components_FancyHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(314);
/* harmony import */ var _components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3910);
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2710);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2682);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_2__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const getStaticProps = ()=>{
    let projects = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getAllProjectPostsData */ .pm)();
    projects = JSON.parse(JSON.stringify(projects));
    return {
        props: {
            projects
        }
    };
};
const Home = ({ projects  })=>{
    const featuredProjects = projects.filter((project)=>project.params.featured);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_11__.NextSeo, {
                title: "Home",
                description: "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
                openGraph: {
                    url: "https://www.traekwells.com"
                },
                canonical: "https://www.traekwells.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "header header--home",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    narrow: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "home-header",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "home-header__content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "eyebrow",
                                        children: "Howdy, I'm Traek. \uD83D\uDC1C"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "home-header__highlight",
                                            children: "I build beautiful websites that work."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "lead",
                                        children: [
                                            "I'm a freelance web designer and developer, specializing in helping small businesses build an online presence, while putting the ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "user first"
                                            }),
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-inline",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/projects",
                                                className: "button button--primary mr-2",
                                                children: [
                                                    "See My Work ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        type: "arrowRight"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/contact-me",
                                                className: "button button--ghost",
                                                children: "Contact Me"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "home-header__image-container fancy-image",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "home-header__image",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../images/about-me-hero-image.jpg",
                                            className: "home-header__image",
                                            alt: "An image of Traek Wells"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                            className: "text-small text-center mt-15",
                                            children: "No one told me that my tie clip was crooked."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            narrow: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "lead",
                                    children: [
                                        "The goal isn’t just to simply ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: "build"
                                        }),
                                        " a website. The goal is to craft an experience that your",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "users will love"
                                        }),
                                        "."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-grid-two-columns",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-grid__column",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "service-image",
                                                src: "../images/homepage-featured-image.jpg",
                                                alt: "Picture of mobile wireframes"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-grid__column",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "It's far too easy to fall into the trap of designing a digital product that meet the needs of just the designer. Ultimately though, the goal shouldx be to design and build something that caters to your users."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "That's where I come in."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "I pride myself in creating websites that:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "Optimize digital usability"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "Give the users what their looking for"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: "Meet the needs of the business"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        secondary: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            narrow: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FancyHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: "Skills I Have"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead",
                                    children: "I've spent a lot of time over the years working hard to get better at both design and development, in order to deliver the best possible product."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "callout-blocks",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            iconType: "design",
                                            title: "UI Design",
                                            body: "Meticulously designing good looking websites for an existing brand, or a brand new one."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            iconType: "development",
                                            title: "Web Development",
                                            body: "Taking an existing design or one I've created and building that into to an interactive, usable website."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            iconType: "user",
                                            title: "User Experience",
                                            body: "Making the digital product as usable and enjoyable as possible for the user. This is very important."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/services",
                                    className: "read-more",
                                    children: [
                                        "Learn more about my services ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            type: "arrowRight"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            narrow: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FancyHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: "Projects I've Built"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead",
                                    children: "I've had the great pleasure of working on some amazing projects."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "projects",
                                    children: featuredProjects.map((project, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            previewImage: project.params.previewImage,
                                            title: project.params.title,
                                            slug: project.params.slug,
                                            summary: project.params.summary
                                        }, index);
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        secondary: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            narrow: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FancyHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: "Beliefs"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead mb-4",
                                    children: "Over the years, I've gathered a few things that I've come to prioritize in the work I do. I approach every project with these in mind."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "callout-blocks",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            iconType: "user",
                                            title: "Users come first",
                                            body: "Optimizing websites for the user is absolutely critical in earning their trust and building credibility."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            iconType: "communication",
                                            title: "Focused attention",
                                            body: "I only work with one or two clients at a time which allows me to give clients the attention they need."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CalloutBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            iconType: "fun",
                                            title: "Honesty",
                                            body: "I'm transparent about what I can and can't do. You can trust me to give you an honest quote for your project."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/about-me",
                                    className: "read-more",
                                    children: [
                                        "Learn more about me ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            type: "arrowRight"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            narrow: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-center",
                                    children: "What others have said about me"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lead text-center centered-block",
                                    children: "Here are some kind words from people I've worked with in the past."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "testimonials",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        quote: "Traek created a website for me where I can share my artwork, blogs, and accomplishments with the world. He really pulled off a design that fits my personality and passion, so if anyone is looking for a website designer. He’s the perfect person to work with",
                                        author: "– Emeche Wells"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            narrow: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToAction__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 8214:
/***/ ((module) => {

"use strict";
module.exports = require("mdx-bundler");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,290,928,861,314,682], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();