(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7298:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_62cce2', '__Inter_Fallback_62cce2'","fontStyle":"normal"},
	"className": "__className_62cce2"
};


/***/ }),

/***/ 89:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Q5T55"
};


/***/ }),

/***/ 5888:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "Logo_logo__Fpa8_"
};


/***/ }),

/***/ 433:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation-wrapper": "Navbar_navigation-wrapper__o9DIv",
	"active": "Navbar_active__y7mWe",
	"navigation__list": "Navbar_navigation__list__s1Jy7",
	"navigation": "Navbar_navigation__ofXZ4",
	"navigation__item": "Navbar_navigation__item__Yylw3",
	"navigation__link": "Navbar_navigation__link__1Y_ZD"
};


/***/ }),

/***/ 9276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/layout/SiteLayout/SiteLayout.tsx","import":"Inter","arguments":[{"weight":["400","600","800"],"subsets":["latin"]}],"variableName":"bodyFont"}
var SiteLayout_tsx_import_Inter_arguments_weight_400_600_800_subsets_latin_variableName_bodyFont_ = __webpack_require__(7298);
var SiteLayout_tsx_import_Inter_arguments_weight_400_600_800_subsets_latin_variableName_bodyFont_default = /*#__PURE__*/__webpack_require__.n(SiteLayout_tsx_import_Inter_arguments_weight_400_600_800_subsets_latin_variableName_bodyFont_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Logo/Logo.module.scss
var Logo_module = __webpack_require__(5888);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
;// CONCATENATED MODULE: ./src/components/Logo/Logo.tsx


const Logo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        version: "1.1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 879.2 561.3",
        xmlSpace: "preserve",
        className: (Logo_module_default()).logo,
        "aria-label": "Logo",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                className: "st0",
                style: {
                    fill: "hsl(var(--color-primary-500))"
                },
                d: "M586.1,271.8c0,9.3-3.8,18.1-10.5,24.5l-87.2,83.2v-58.5h-97.7v58.5l-87.2-83.2c-6.7-6.4-10.5-15.3-10.5-24.5 v-76.4h-97.7v97.2c0,22.7,9.3,44.4,25.7,60.1l218.5,208.6l218.5-208.6c16.4-15.7,25.7-37.3,25.7-60.1v-97.2h-97.7V271.8z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                className: "st1",
                style: {
                    fill: "hsl(var(--color-primary-900))"
                },
                d: "M878.3,97.7c-3-24-13.6-45.5-29.3-62.3c-16.6-17.9-39.1-30.2-64.3-34c-1-0.2-2.1-0.3-3.1-0.5 C777,0.4,767.7,0,767.7,0h-83.9H195.4c0,0-93.2,0.4-97.7,0.9c-1,0.1-2.1,0.3-3.1,0.5c-25.3,3.8-47.7,16.2-64.3,34 C14.5,52.1,3.9,73.7,0.9,97.7c-0.6,4.6-0.9,9.3-0.9,14v21.9c0,5.1,2.1,10,5.8,13.6l91.9,87.7V111c0.4-7.4,6.5-13.3,14-13.3h279.1 v125.7h48.9h48.9V97.7h279.1c7.5,0,13.6,5.9,14,13.3v123.9l91.9-87.7c3.7-3.5,5.8-8.4,5.8-13.6v-21.9 C879.2,106.9,878.9,102.3,878.3,97.7z"
            })
        ]
    });
};
/* harmony default export */ const Logo_Logo = (Logo);

;// CONCATENATED MODULE: ./src/components/Logo/index.ts



// EXTERNAL MODULE: ./src/components/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(433);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx
var Icon = __webpack_require__(2290);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.tsx







const Navbar = ()=>{
    const route = (0,router_.useRouter)();
    const [mobileMenuOpen, setMobileMenuOpen] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setMobileMenuOpen(false);
    }, [
        route
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${(Navbar_module_default())["navigation-wrapper"]} ${mobileMenuOpen ? (Navbar_module_default()).active : ""} `,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: `${(Navbar_module_default()).navigation}`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    style: {
                        borderBottom: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(Logo_Logo, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: (Navbar_module_default()).navigation__list,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: (Navbar_module_default()).navigation__item,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: (Navbar_module_default()).navigation__link,
                                    children: "Projects"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: (Navbar_module_default()).navigation__item,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/services",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: (Navbar_module_default()).navigation__link,
                                    children: "Services"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: (Navbar_module_default()).navigation__item,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/about-me",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: (Navbar_module_default()).navigation__link,
                                    children: "About Me"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: (Navbar_module_default()).navigation__item,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/blog",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: (Navbar_module_default()).navigation__link,
                                    children: "Writing"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: "/contact-me",
                    className: "button button--ghost",
                    "data-navigation-contact-me": true,
                    children: [
                        "Contact Me ",
                        /*#__PURE__*/ jsx_runtime.jsx(Icon/* default */.Z, {
                            type: "arrowRight"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "button button--ghost",
                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                    "data-mobile-menu-toggle": true,
                    children: !mobileMenuOpen ? "Menu" : "Close"
                })
            ]
        })
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Navbar/index.ts



// EXTERNAL MODULE: ./src/components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(89);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            className: (Footer_module_default()).footer,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container container--narrow",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-grid-two-columns",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-grid__column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                            children: "About me"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "I'm a freelance web designer and developer, focusing on helping small businesses build an online presence, while putting the user first."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "d-grid__column",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "d-grid-two-columns",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-grid__column",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                        children: "Pages"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/services",
                                                                children: "Services"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/projects",
                                                                children: "Projects"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/process",
                                                                children: "Process"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/faq",
                                                                children: "FAQ"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/about-me",
                                                                children: "About Me"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-grid__column",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                        children: "Social media"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "https://twitter.com/TraekWells",
                                                                target: "_blank",
                                                                children: "Twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "https://www.linkedin.com/in/traekwells/",
                                                                target: "_blank",
                                                                children: "LinkedIn"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "https://www.instagram.com/traekwells/",
                                                                target: "_blank",
                                                                children: "Instagram"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "https://dribbble.com/TraekWells",
                                                                target: "_blank",
                                                                children: "Dribbble"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "https://github.com/TraekWells",
                                                                target: "_blank",
                                                                children: "GitHub"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-center mt-4",
                        children: [
                            "\xa9 Traek Wells ",
                            new Date().getFullYear(),
                            ". Built with",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "https://nuxt.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Nuxt"
                            }),
                            ".",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "https://github.com/TraekWells/personal-dev-site",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Source Code"
                            }),
                            "\uD83D\uDC1C"
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.ts



;// CONCATENATED MODULE: ./src/layout/SiteLayout/SiteLayout.tsx





const SiteLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            jsx_runtime.jsx((style_default()), {
                id: "3d79000c7e72a584",
                dynamic: [
                    (SiteLayout_tsx_import_Inter_arguments_weight_400_600_800_subsets_latin_variableName_bodyFont_default()).style.fontFamily
                ],
                children: `html{font-family:${(SiteLayout_tsx_import_Inter_arguments_weight_400_600_800_subsets_latin_variableName_bodyFont_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Navbar_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const SiteLayout_SiteLayout = (SiteLayout);

;// CONCATENATED MODULE: ./src/layout/SiteLayout/index.ts



// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./next-seo.config.ts
const SEO = {
    titleTemplate: "%s | UX Designer & Front-end Developer",
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://www.traekwells.com/",
        siteName: "Traek Wells | UX Designer & Front-end Developer"
    },
    twitter: {
        handle: "@TraekWells",
        site: "@TraekWells",
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const next_seo_config = (SEO);

;// CONCATENATED MODULE: external "next-plausible"
const external_next_plausible_namespaceObject = require("next-plausible");
var external_next_plausible_default = /*#__PURE__*/__webpack_require__.n(external_next_plausible_namespaceObject);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(1007);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx((external_next_plausible_default()), {
        domain: "traekwells.com",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SiteLayout_SiteLayout, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(external_next_seo_.DefaultSeo, {
                    ...next_seo_config
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}


/***/ }),

/***/ 1007:
/***/ (() => {



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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,290], () => (__webpack_exec__(9276)));
module.exports = __webpack_exports__;

})();