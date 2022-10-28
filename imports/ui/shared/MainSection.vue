<template>
    <section class="main">
        <input type="checkbox" class="toggle-all">
        <todo-list :todos="todos" :filter="filter"></todo-list>
    </section>
</template>

<script>
import TodoList from "../TodoList";

export default{
    components: {
        TodoList
    },
    props: ['todos', 'filter']
};
</script>

<style>

</style>