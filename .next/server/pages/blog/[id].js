"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4144);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1228);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7557);
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9147);
/* harmony import */ var _layout_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7598);
/* harmony import */ var _components_FancyHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(314);
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4928);
/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5247);
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(999);
/* harmony import */ var _components_TableOfContents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8148);
/* harmony import */ var _hooks_useGetHeaders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9253);
/* harmony import */ var _hooks_useGetWordCount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1788);
/* harmony import */ var _components_MetaData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4403);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_2__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const getStaticProps = async ({ params  })=>{
    // Get the review for this dynamic URL
    let blog = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getSingleBlogPostData */ .Bg)(params.id);
    blog = JSON.parse(JSON.stringify(blog));
    // Get all reviews and pass to Post
    let blogs = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getAllBlogPostsData */ .OQ)();
    blogs = JSON.parse(JSON.stringify(blogs));
    return {
        props: {
            ...blog,
            blogs
        }
    };
};
const getStaticPaths = ()=>{
    const paths = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getAllBlogPostsData */ .OQ)();
    return {
        paths,
        fallback: false
    };
};
const BlogPost = ({ code , frontmatter , blogs  })=>{
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const pageHeaders = (0,_hooks_useGetHeaders__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const wordCount = (0,_hooks_useGetWordCount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const Component = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>(0,mdx_bundler_client__WEBPACK_IMPORTED_MODULE_3__.getMDXComponent)(code), [
        code
    ]);
    const moreBlogs = blogs.filter((blog)=>blog.params.draft === false).filter((blog)=>blog.params.title !== frontmatter.title).sort(()=>0.5 - Math.random());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MetaData__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                title: frontmatter.title,
                description: frontmatter.summary,
                image: `https://www.traekwells.com/images/${frontmatter.image}`,
                type: "article",
                url: `https://www.traekwells.com${route.asPath}`,
                createdAt: frontmatter.createdAt
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: frontmatter.title,
                tags: frontmatter.tags,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "lead",
                    children: frontmatter.summary
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "post",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            narrow: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content__text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "content__info",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "About a ",
                                                        wordCount,
                                                        " minute read."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                components: {
                                                    Note: _components_Note__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "content__sidebar",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableOfContents__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            headers: pageHeaders
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            narrow: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FancyHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: "More stuff I've written"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "blogs",
                                    children: moreBlogs.map((blog, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            title: blog.params.title,
                                            slug: blog.params.slug,
                                            summary: blog.params.summary
                                        }, index);
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Section__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            narrow: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

/***/ }),

/***/ 1228:
/***/ ((module) => {

module.exports = require("mdx-bundler/client");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,290,557,928,861,314,247,132,677], () => (__webpack_exec__(778)));
module.exports = __webpack_exports__;

})();