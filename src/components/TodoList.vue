<template>
  <div>
    <ul v-for="(todo, index) in todos">
      <TodoItem @delete-item="delete_item" :index="index" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props: {
    todos: {
      type: Object,
      required: true
    }
  },
  components: {
    TodoItem
  },
  methods: {
    delete_item(id) {
      this.$emit('delete-item', id)
    }
  }
}
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: bold;
}
 
</style>