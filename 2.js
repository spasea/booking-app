webpackJsonp([2],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(34),
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

/***/ 33:
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
			filmFields: {
				title: '',
				description: ''
			},
			genre: this.genres[0]['id']
		};
	},

	computed: {
		genres: function genres() {
			return ls.get('categories', this);
		}
	},
	methods: {
		addFilm: function addFilm() {
			var id = ls.get('films', this) ? ++ls.get('films', this).length : 1;
			ls.set('films', [{
				id: id,
				categoryId: 1,
				title: this.filmFields.title,
				description: this.filmFields.description
			}], this);
			for (var field in this.filmFields) {
				this.filmFields[field] = '';
			}
		}
	}
});

/***/ }),

/***/ 34:
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
  }, [_vm._v("Title")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.filmFields.title),
      expression: "filmFields.title"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Film title"
    },
    domProps: {
      "value": (_vm.filmFields.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.filmFields.title = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Description")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.filmFields.description),
      expression: "filmFields.description"
    }],
    staticClass: "textarea",
    attrs: {
      "placeholder": "Film description"
    },
    domProps: {
      "value": (_vm.filmFields.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.filmFields.description = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Genre")]), _vm._v(" "), _c('div', {
    staticClass: "control columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "select is-100"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.genre),
      expression: "genre"
    }],
    staticClass: "is-100",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.genre = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.genres), function(genre) {
    return _c('option', {
      domProps: {
        "value": genre.id
      }
    }, [_vm._v(_vm._s(genre.title))])
  }))])])])]), _vm._v(" "), _c('div', {
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