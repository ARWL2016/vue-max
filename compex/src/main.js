import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.component('my-header', Header);
Vue.component('my-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
