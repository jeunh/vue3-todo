<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup() {
      // data
      const items = ref([]);

      // methods
      function fecthTodos() {
        for (let i = 0; i < localStorage.length; i++) {
          const todoItem = localStorage.key(i);
          items.value.push(todoItem);
        }
      }

      fecthTodos();

      return { items, fecthTodos }
    }
  }
</script>

<style lang="scss" scoped>

</style>