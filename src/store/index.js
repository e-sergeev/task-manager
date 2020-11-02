import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async fetchData(context) {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => context.commit('fillData', json))
        }
    },
    mutations: {
        fillData(state, tasks) {
            state.tasks = tasks
        },
        addTask(state, task) {
            state.tasks.push(task)
        },
        removeTask(state, id) {
            state.tasks = state.tasks.filter(item => item.id !== id)
        }
    },
    state: {
        tasks: []
    },
    getters: {
        getTasks(state) {
            return state.tasks
        }
    },
})