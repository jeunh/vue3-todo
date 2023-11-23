<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
// import { watch } from 'vue';

  export default {
    props: ['todoItems'],
    setup(props, context) {
      function removeTodo(item, index) {
        context.emit('remove', item, index);
      }

      // 최대한 사용하지 않는 것이 좋음 - 데이터 변경 시 추적이 어려울 수 있고, 관리가 어려울 수 있음
      // watch(props.todoItems, (newValue) => {
      //   console.log(newValue);
      // })

      return { removeTodo }
    }
  }
</script>

<style lang="scss" scoped>

</style>