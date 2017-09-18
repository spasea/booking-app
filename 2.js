webpackJsonp([2,1],{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _film = __webpack_require__(91);

var _film2 = _interopRequireDefault(_film);

var _FilmField = __webpack_require__(233);

var _FilmField2 = _interopRequireDefault(_FilmField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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
		return {
			rows: this.fill(5),
			columns: this.fill(8),
			selected: []
		};
	},

	computed: {
		film: _film2.default,
		filmSelected: function filmSelected() {
			var _this = this;

			return ls.get('films', this).filter(function (item) {
				return item.id === _this.film;
			})[0];
		},
		genre: function genre() {
			var _this2 = this;

			return ls.get('categories', this).filter(function (item) {
				return item.id === _this2.filmSelected.categoryId;
			})[0];
		}
	},
	methods: {
		fill: function fill(limit) {
			var arr = [];
			for (var i = 1; i <= limit; i++) {
				arr.push(i);
			}
			return arr;
		},
		isFree: function isFree(row, column) {
			if (!ls.get(['sold', this.film], this)) return true;

			return !this.checkRowColumn(ls.get(['sold', this.film], this), row, column);
		},
		isSelected: function isSelected(row, column) {
			return this.checkRowColumn(this.selected, row, column);
		},
		checkRowColumn: function checkRowColumn(arr, row, column) {
			return arr.filter(function (value) {
				return value.row === row && value.column === column;
			}).length;
		},
		select: function select(row, column) {
			if (this.isFree(row, column)) {
				this.selected.push({ row: row, column: column });
			}
		},
		book: function book() {
			if (this.selected.length) {
				var sold = ls.get('sold', this);
				var prevContent = ls.get('sold', this)[this.film] ? ls.get('sold', this)[this.film] : [];
				sold[this.film] = [].concat(_toConsumableArray(prevContent), _toConsumableArray(this.selected));
				ls.set('sold', sold, this, false);
				alert('Tickets were bought successfully');
				this.selected = [];
				return;
			}
			alert('There aren\'t any seats selected or there aren\'t any seats available');
		}
	},
	components: {
		FilmField: _FilmField2.default
	}
};

/***/ }),

/***/ 227:
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
  }, [_c('film-field', {
    attrs: {
      "title": "title",
      "text": _vm.filmSelected.title
    }
  }), _vm._v(" "), _c('film-field', {
    attrs: {
      "title": "description",
      "text": _vm.filmSelected.description
    }
  }), _vm._v(" "), _c('film-field', {
    attrs: {
      "title": "genre",
      "text": _vm.genre.title
    }
  }), _vm._v(" "), _c('film-field', {
    attrs: {
      "title": "start time",
      "text": _vm.filmSelected.time
    }
  }), _vm._v(" "), _c('film-field', {
    attrs: {
      "title": "duration",
      "text": ((_vm.filmSelected.duration) + " min")
    }
  }), _vm._v(" "), _c('film-field', {
    attrs: {
      "title": "date of release",
      "text": _vm.filmSelected.date
    }
  }), _vm._v(" "), _c('film-field', {
    attrs: {
      "title": "ticket price",
      "text": ((_vm.filmSelected.price) + " UAH")
    }
  })], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l((_vm.rows), function(row) {
    return _c('div', {
      staticClass: "columns is-wrapped is-50"
    }, [_c('div', {
      staticClass: "column is-2"
    }, [_vm._v("Row " + _vm._s(row))]), _vm._v(" "), _vm._l((_vm.columns), function(column) {
      return _c('div', {
        staticClass: "column center-content seat"
      }, [_c('span', {
        class: {
          'center-content': true,
          'disabled': !_vm.isFree(row, column),
            'selected': _vm.isSelected(row, column)
        },
        on: {
          "click": function($event) {
            _vm.select(row, column)
          }
        }
      }, [_vm._v(_vm._s(column))])])
    })], 2)
  }), _vm._v(" "), _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.book
    }
  }, [_vm._v("Buy")])], 2)
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

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(235),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\OpenServer\\domains\\booking-app\\src\\js\\views\\layout-parts\\FilmField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FilmField.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a60d1c0", Component.options)
  } else {
    hotAPI.reload("data-v-6a60d1c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
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
	props: ['title', 'text']
};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "message is-dark"
  }, [_c('div', {
    staticClass: "message-header is-capitalized"
  }, [_c('p', [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "message-body"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.text) + "\n\t")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a60d1c0", module.exports)
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(226),
  /* template */
  __webpack_require__(227),
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

/***/ 91:
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

/***/ })

});