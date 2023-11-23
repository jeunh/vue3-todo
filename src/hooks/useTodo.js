import { ref } from "vue";

function useTodo() {
  // data
  const todoItems = ref([]);

  // methods
  function fecthTodos() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const todoItem = localStorage.key(i);
      // items.value.push(todoItem);
      result.push(todoItem);
    }
    return result;
  }

  function addTodoItem(todo) {
    todoItems.value.push(todo);
    localStorage.setItem(todo, todo);
  }

  return { todoItems, fecthTodos, addTodoItem }
}

export { useTodo }