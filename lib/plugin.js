import Vue from 'vue'
import vSelect from 'vue-select'

export default function ({ router, store }) {
  Vue.component('nuxt-search-select', vSelect)
}
