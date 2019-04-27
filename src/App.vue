<template>
  <div id="app">
    <app-interface v-on:addToPhoneBook="addToPhoneBook($event)"></app-interface>
    <app-list :book="book" v-on:deleteItem="deleteItem($event)"></app-list>
  </div>
</template>

<script>

import Interface from './Interface.vue'
import List from './List.vue'

export default {
  name: 'app',
  data() {
    return {
      book: []
    }
  },


  components: {
    "app-interface": Interface,
    "app-list": List
  },
  methods: {
    addToPhoneBook: function (event) {
      this.book = event;
      console.log(this.book)
    },
    deleteItem: function (event) {
      this.book.splice(event,1)
      console.log(this.book)
    },
    sortFavourite: function (event) {
      console.log('sortF - App')
      console.log(event)
    }
  }
}
</script>