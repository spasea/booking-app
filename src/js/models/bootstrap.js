import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'
window._ = _;

window.Vue = Vue;
Vue.use(VueRouter);

import store from '../store/store'
window.store = store;

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage, {
	name: 'ls'
});

import localstorage from './localstorage'
window.ls = localstorage;

import VueConfigManager from 'vue-config-manager'
import settings from './settings'
Vue.use(VueConfigManager, settings);