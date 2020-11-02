<template>
  <div id="app">
    <div class="p-3 mb-2 bg-light text-dark">
      <h1 class="text-uppercase text-center">task-manager</h1>
    </div>
    <add />
    <select v-model="filter" class="form-control mb-4" id="task-select">
      <option value="all">Show all</option>
      <option value="done">Show done</option>
      <option value="undone">Show undone</option>
    </select>
    <taskList 
      v-if="filterTask.length"
      v-bind:tasks="filterTask"
    />
    <p v-else class="text-center">Your task list is empty</p>
  </div>
</template>

<script>
import taskList from '@/components/taskList'
import add from '@/components/add'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
    data() {
      return {
        filter: 'all'
      }
    },
  mounted() {
    this.$store.dispatch('fetchData')
  },
  components: {
    taskList,
    add
  },
  computed: {
    ...mapGetters(['getTasks']),
    filterTask() {
      if(this.filter === 'all') {
        return this.getTasks
      }
      if(this.filter === 'done') {
        return this.getTasks.filter(item => item.completed == true)
      }
      if(this.filter === 'undone') {
        return this.getTasks.filter(item => item.completed == false)
      }
    }
  },
}
</script>