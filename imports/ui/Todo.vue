<template>
    <li :class="{completed: todo.completed}" class="todo">
        <div class="view">
            <input v-if="todo.completed" class="toggle" type="checkbox" checked @click="toggleCheck">
            <input v-else type="checkbox" class="toggle" @click="toggleCheck">
            <label>{{todo.name}}</label>
            <button class="destroy" @click="removeTodo"></button>
        </div>
    </li>
</template>

<script>
export default{
    props: ['todo'],
    methods: {
        toggleCheck() {
            this.$emit('toggleCheck', {
                id: this.todo._id,
                completed: !this.todo.completed
            });
        },
        removeTodo(){
            this.$emit("removeTodo", this.todo._id)
        }
    }
};
</script>

<style>

</style>