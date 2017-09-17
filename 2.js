webpackJsonp([2],{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(31),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\OpenServer\\domains\\booking-app\\src\\js\\views\\AddFilm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddFilm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05e26db9", Component.options)
  } else {
    hotAPI.reload("data-v-05e26db9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			title: 'AddFilm',
			filmTitle: ''
		};
	},

	methods: {
		addFilm: function addFilm() {
			ls.set('comedy', [{
				title: this.filmTitle
			}], this);
			this.filmTitle = '';
		}
	}
});

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "columns"
  }, [_c('section', {
    staticClass: "column is-half is-offset-one-quarter"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('section', {
    staticClass: "column is-half is-offset-one-quarter"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.filmTitle),
      expression: "filmTitle"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Text input"
    },
    domProps: {
      "value": (_vm.filmTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.filmTitle = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.addFilm
    }
  }, [_vm._v("Submit")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05e26db9", module.exports)
  }
}

/***/ })

});