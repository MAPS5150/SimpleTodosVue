import { Meteor } from "meteor/meteor";
import Vue from "vue";
import VueTracker from "vue-meteor-tracker";

Vue.use(VueTracker);

import App from "../imports/ui/App.vue"

import {Todos} from '../imports/api/todos';

Meteor.startup(() => {
    new Vue({
        render: h => h(App)
    }).$mount("app");
});