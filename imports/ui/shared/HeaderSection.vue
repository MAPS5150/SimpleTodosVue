<template>
    <section class="todoapp">
        <header class="header">
            <h1>Simple todos</h1>
            <input v-model="name" @keypress.enter="addNewTodo" class="new-todo" type="text" autofocus="autofocus" autocomplete="off" placeholder="¿Que tienes planeado hacer hoy...?">
        </header>
    </section>
</template>

<script>
import { Todos } from '../../api/todos';

export default{
    data(){
        return {
            name: ""
        };
    },
    methods: {
        addNewTodo(){
            let newTodo = {
                name: this.name,
                date: new Date(),
                completed: false
            };

            Todos.insert(newTodo);
            this.name="";
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 40px;
}
</style>