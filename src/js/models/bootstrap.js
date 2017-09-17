import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'lodash';
window._ = _;

window.Vue = Vue;
Vue.use(VueRouter);

import store from '../store/store';
window.store = store;