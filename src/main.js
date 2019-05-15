import Vue from 'vue'
import App from './App.vue'
import MyDirective from './mydirective'

Vue.directive('mydirective', MyDirective);

new Vue({
  el: '#app',
  render: h => h(App)
})
