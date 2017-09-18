webpackJsonp([7],{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	get: function get() {
		return store.getters.filmId;
	},
	set: function set(id) {
		store.dispatch('filmId', id);
	}
};

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(256),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\OpenServer\\domains\\booking-app\\src\\js\\views\\OrderTicket.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrderTicket.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1ba0124", Component.options)
  } else {
    hotAPI.reload("data-v-b1ba0124", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _film = __webpack_require__(253);

var _film2 = _interopRequireDefault(_film);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			fields: ['title', 'description', 'date', 'time', 'duration', 'price']
		};
	},

	computed: {
		film: _film2.default,
		filmSelected: function filmSelected() {
			var _this = this;

			return ls.get('films', this).filter(function (item) {
				return item.id === _this.film;
			})[0];
		}
	},
	created: function created() {}
}; //
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
//

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-4 center-content"
  }, [_c('img', {
    staticClass: "film-preview film-preview--large",
    attrs: {
      "src": _vm.filmSelected.logo[0],
      "alt": _vm.filmSelected.title
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-7 is-offset-1"
  }, _vm._l((_vm.filmSelected), function(item, key) {
    return (_vm.fields.includes(key)) ? _c('article', {
      staticClass: "message is-dark"
    }, [_c('div', {
      staticClass: "message-header is-capitalized"
    }, [_c('p', [_vm._v(_vm._s(key))])]), _vm._v(" "), _c('div', {
      staticClass: "message-body"
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(item) + "\n\t\t\t\t")])]) : _vm._e()
  }))]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('blockquote', [_vm._v("Description")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('blockquote', [_vm._v("Buy ticket")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b1ba0124", module.exports)
  }
}

/***/ })

});