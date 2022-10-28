<template>
    <ul class="todo-list">
        <todo v-for="todo in todos" :key="todo._id" :todo="todo" @toggleCheck="handleCheck" @removeTodo="deleteTodo"></todo>
    </ul>
</template>

<script>
import Todo from './Todo'

import { Todos } from '../api/todos';

export default{
    components: {
        Todo
    },
    props: ['todos', 'filter'],
    methods: {
        handleCheck(todo) {
            Todos.update(todo.id, {$set: {completed: todo.completed} });
        },
        deleteTodo(id) {
            Todos.remove(id);
        }
    },
    computed: {
        filteredTodos() {
            switch (this.filter) {
                case 'all':
                    return this.todos;
                    break;

                case 'active':
                    return this.todos.filter(todo => todo.completed===false);
                    break;

                case 'completed':
                    return this.todos.filter(todo => todo.completed===true);
                    break;
                default:
                    return this.todos;
                    break;
            }
        }
    }
};
</script>

<style>

</style>