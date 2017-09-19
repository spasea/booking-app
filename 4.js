webpackJsonp([4],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _category = __webpack_require__(237);

var _category2 = _interopRequireDefault(_category);

var _searchFilm = __webpack_require__(238);

var _searchFilm2 = _interopRequireDefault(_searchFilm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {};
	},

	computed: {
		category: _category2.default,
		searchFilm: _searchFilm2.default,
		filmsList: function filmsList() {
			var _this = this;

			var filmsList = ls.get('films', this);
			filmsList = filmsList.filter(function (value) {
				return new RegExp(_this.searchFilm, 'i').test(value.title);
			});
			if (!this.category) return filmsList;

			return filmsList.filter(function (value) {
				return value.categoryId === _this.category;
			});
		}
	}
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "columns is-wrapped"
  }, _vm._l((_vm.filmsList), function(item, index) {
    return _c('div', {
      staticClass: "column center-content is-3"
    }, [_c('router-link', {
      key: index,
      attrs: {
        "tag": "a",
        "to": ("/order-ticket/" + (item.id)),
        "exact": ""
      }
    }, [_c('img', {
      staticClass: "film-preview film-preview--large",
      attrs: {
        "src": item.logo[0],
        "alt": "film.title"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(item.title))])])], 1)
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "breadcrumb",
    attrs: {
      "aria-label": "breadcrumbs"
    }
  }, [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Movies")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61b0919b", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(224),
  /* template */
  __webpack_require__(225),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\OpenServer\\domains\\booking-app\\src\\js\\views\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61b0919b", Component.options)
  } else {
    hotAPI.reload("data-v-61b0919b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});