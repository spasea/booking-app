import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'
import store from '../store/store'
import VueLocalStorage from 'vue-localstorage'
import localstorage from './localstorage'
import VueTimepicker from 'vue2-timepicker'
import VeeValidate from 'vee-validate';

window._ = _;

window.Vue = Vue;
Vue.use(VueRouter);

window.store = store;

Vue.use(VueLocalStorage, {
	name: 'ls'
});

window.ls = localstorage;

Vue.use(VueTimepicker);
window.VueTimepicker = VueTimepicker;

Vue.use(VeeValidate);
window.VeeValidate = VeeValidate;