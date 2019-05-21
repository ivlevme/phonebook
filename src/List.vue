<template>
    <div>
        <div  v-mydirective="[onePeople.favourite, flag]" v-for="(onePeople, index) in book" :key="onePeople.id" class="name">
            Имя: {{book[index].name}}  Фамилия: {{book[index].surname}} Отчество - {{book[index].otv}} Телефон - {{book[index].tel}} Избранное - {{book[index].favourite}}
            <button @click="addToFavourite(index)">{{book[index].favourite == true ? 'Удалить из избранного' : 'Добавить в избранное'}}</button>
            <button @click="deleteItem(index)">Удалить</button>
            <br>
        </div>
        <button @click="flag = !flag">
          {{flag == false ? 'Подсветить избранные контакты' : 'Убрать подсветку избарнных'}}
        </button>
    </div>
</template>

<script>

export default {
  data () {
      return {
        textButton: 'Добавить в избранное',
        textButtonStatus: false,
        flag: false
      }
    },
  props: {
      name: String,
      surname: String,
      textButtonInterface: String,
      book: Array
  },
    methods: {
        addToFavourite: function (index) {
            this.book[index].favourite = !this.book[index].favourite;

                // Сортировка по избранному
            this.book.sort(function (a,b) {
                if (a.favourite === true) {
                    return -1;
                }
                if (a.favourite === false) {
                    return 1
                }
                if (a.favourite === true && b.favourite === true) {
                    return 0
                }
            })
        },
        deleteItem: function (index) {
            this.$emit('deleteItem', index)
        }
    }
}
</script>
