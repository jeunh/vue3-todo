<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @add="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
// import { onBeforeMount, onMounted, ref } from 'vue';
import { onBeforeMount } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodo } from "./hooks/useTodo";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  data() {
    return {
      title: '할일 앱'
    }
  },
  setup() {
    const { todoItems, addTodoItem, fecthTodos } = useTodo();

    // 라이프 사이클 API와 같은 동작 - beforeCreate, created
    // console.log('1 : setup called');

    // 라이프 사이클 API
    onBeforeMount(() => {
      // console.log('2 : onBeforeMount called');
      todoItems.value = fecthTodos();
    })

    // onMounted(() => {
    //   console.log('3 : onMounted called');
    // })

    
    // function removeTodoItem(item, index) {
    //   todoItems.value.splice(index, 1);
    //   localStorage.removeItem(item);
    // }

    return { todoItems, addTodoItem }
  },
  methods: {
    removeTodoItem(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>