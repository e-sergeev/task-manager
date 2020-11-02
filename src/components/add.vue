<template>

        <form v-on:submit.prevent="submit">
            <div class="input-group mb-4">
                <input v-model="text" type="text" class="form-control" name="task" placeholder="Add new task">
                <button type="submit" class="btn btn-primary ml-1">Create</button>
                </div>
        </form>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        submit() {
            if(this.text !== '') {
                const newTask = {
                    id: Date.now(),
                    title: this.text,
                    completed: false
                }
            this.addTask(newTask)
            this.text = ''
            }
        }
    }
}
</script>