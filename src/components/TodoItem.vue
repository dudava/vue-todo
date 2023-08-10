<template>
  <li>
    <span :class="{
      done: todo.completed
    }">
      <input type="checkbox" @click="todo.completed=!todo.completed" :checked="todo.completed">
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button class="rm" @click="$emit('delete-item', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
}
</script>

<style>
li {
  border: 2px;
  display: flex;
  justify-content: space-between;
  max-width: 40%;
  padding: .5rem 2rem;
  margin-bottom: 20px;
}
.rm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  padding: 0;
  width: 30px;
  height: 30px;
  font-weight: bold;
  background-color: transparent;
  color: #2c3e50;
  border-radius: 50%;
  border: 2px solid #2c3e50;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
</style>