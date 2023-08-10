<template>
    <h2>Todos</h2>
    <AddTodo @add-todo="add_todo"/>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <TodoList 
      v-if="!loading"
      :todos="filteredTodos"
      @delete-item="delete_item"
    />  
    <Loading v-else/>
</template>
  
<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodoComponent'
import Loading from '@/components/Loading'


export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Купить хлеб', completed: false},
        {id: 2, title: 'Купить молоко', completed: false},
        {id: 3, title: 'Купить масло', completed: false},
      ],
      loading: true,
      filter: 'all',
    }
  },
  computed: {
    filteredTodos() {
      const filter = this.filter
      if (filter == 'all') {
        return this.todos
      }
      if (filter == 'completed') {
        return this.todos.filter(t => t.completed == true)
      }
      if (filter == 'not-completed') {
        return this.todos.filter(t => t.completed == false)
      }
    }
  },
  components: {
     TodoList, AddTodo, Loading
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => {console.log(response); return response.json()})
    .then(json => {this.loading=false; this.todos = json})
    
  },
  methods: {
    delete_item(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    add_todo(todo) {
      this.todos.push(todo) 
    },
    change_filter(value) {
      console.log(value)
      if (value == "all") {
        this.filteredTodos = this.todos
      }
      if (value = "completed") {
        this.filteredTodos = this.todos.filter(t => t.completed == true)
      }
      if (value = "not-completed") {
        this.filteredTodos = this.todos.filter(t => t.completed == false)
      }
      console.log(this.filteredTodos)
    }
  }
}
</script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  