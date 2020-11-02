<template>
    <li class="list-group-item d-flex justify-content-between shadow-sm p-3 mb-2 bg-white rounded">
        <span v-bind:class="{complete:task.completed}">
            <input type="checkbox" v-on:change="task.completed = !task.completed" v-bind:checked="task.completed" class="mr-4">
            {{ task.title }}
        </span>
        <button type="button" v-on:click="remove(task.id)" class="btn btn-danger"><i class="fas fa-times-circle"></i></button>
    </li>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    props: {
        task: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        ...mapMutations(['removeTask']),
        remove(id) {
            this.removeTask(id);
        }
    }
}
</script>


<style scoped>
    .complete {
        text-decoration: line-through;
    }
</style>