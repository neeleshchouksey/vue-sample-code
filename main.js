// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import App from './App'
import { router } from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import moment from 'moment'
import VueClipboard from 'vue-clipboard2'
import './assets/css/bootstrap.css'
import LaravelVuePagination from 'laravel-vue-pagination'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/fonts/avenir-font.css'
import VueChatScroll from 'vue-chat-scroll'
import Multiselect from 'vue-multiselect'
import HighchartsVue from "highcharts-vue";

global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $
Vue.use(VueClipboard)
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueChatScroll)
Vue.component('pagination', LaravelVuePagination)
Vue.component('multiselect', Multiselect)
Vue.use(HighchartsVue);

Vue.config.productionTip = false


Vue.filter('timeAgo', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY HH:mm:ss')
  }
});
Vue.filter('fromNow', function (value) {
  if (value) {
    return moment(String(value)).fromNow()
  }
});

Vue.filter('timeStampToDate', function (value) {
  if (value) {
    return moment.unix(value).format('MM/DD/YYYY HH:mm:ss')
  }
});

Vue.filter('replaceUndescore', function (value) {
  if (value) {
    return value.replaceAll('_', ' ')
  }
});

Vue.filter('totalAmount', function (value) {
  // let formatted = new Intl.NumberFormat('tr-TR', { currency: 'USD', minimumFractionDigits: 2}).format(value);
  // let arr = formatted.split(',');

  // return arr[0] + ',' + arr[1] + '';
  return value.toLocaleString()
});
Vue.filter('replaceDescription', function (value) {
  return '<i class="fa fa-check"></i>' + value.replace(/(?:\r\n|\r|\n)/g, '<br /> <i class="fa fa-check"></i> ')
});

Vue.filter('removeTimestampFromFileName', function (value) {
  if (value) {
    let res = value.split('_')
    return res[res.length - 1]
    console.log(res)
    console.log(res.shift())

  }
});

Vue.filter('truncate', function (data, num) {
  let reqdString = ''
  if (data.length > num) {
    for (let i = 0; i < num; i++) {
      reqdString += data[i]
    }
    return reqdString + '...';
  } else {
    return data
  }
});

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '5e314755f239abbafcd9', //Add your pusher key here
  cluster: 'ap2',
  forceTLS: true,
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import './assets/css/employee-style.css'
import './assets/css/style.css'
import './assets/css/custom.css'