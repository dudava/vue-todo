<template>
  <form @submit.prevent="onSubmit">
    <input placeholder="New task" type="text" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      'title': ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    justify-content: space-between;
    width: 750px
  }
  input {
    width: 70%;
  }
  button {
    width: 20%;
    font-weight: bold;
    color: #2c3e50;
    border: 2px solid #2c3e50;
    background: transparent;
    border-radius: 5%;
  }
</style>