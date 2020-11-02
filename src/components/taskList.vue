<template>
    <div>
        <ul class="list-group">
            <task 
                v-for="task of tasks" :key="task.id"
                v-bind:task="task"
            />
        </ul>
    </div>
</template>

<script>
import task from '@/components/task'

export default {
    props: ['tasks'],
    components: {
        task
    },
}
</script>