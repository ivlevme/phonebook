<template>
    <div>
        <input type="text" v-model="name" placeholder="Имя">
        <input type="text" placeholder="Фамилия" v-model="surname">
        <input type="text" placeholder="Отчество" v-model="otv">
        <input type="text" placeholder="Телефон" v-model="tel">
        <button id="test" @click="addToPhoneBook">Добавить в телефонную книгу</button>
        <button @click="sortToSurname">Сортировать по фамилии</button>
        <button @click="sortToName">Сортировать по имени</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      otv: "",
      tel: "",
      book: [],
      textButtonStatus: false,
      favourite: false,
      flag: true
    };
  },

  methods: {
    addToPhoneBook: function() {
      this.book.push({
        name: this.name,
        surname: this.surname,
        otv: this.otv,
        tel: this.tel,
        favourite: this.favourite
      });
      this.$emit('addToPhoneBook', this.book)
    },
    sortToSurname: function() {
      this.book.sort((a, b) => (a.surname >= b.surname ? 1 : -1));
      this.$emit('sortFavourite', console.log(this.book))

      console.log(this.book);
    },
    sortToName: function() {
      this.book.sort(function(a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        if (a.name == b.name) {
          return 0;
        }
      });
      console.log(this.book);
    },
    testDirective: function () {
      this.derectiveFlag = !this.derectiveFlag;
    }
  }
};
</script>
