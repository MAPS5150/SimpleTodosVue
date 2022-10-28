
<template>
  <section class="todoapp">
    <header-section></header-section>
    <main-section :todos="todos" :filter="filter"></main-section>
    <footer-section :todos="todos" @handleFilter="setFilter"></footer-section>
  </section>
</template>

<script>
import Header from './shared/HeaderSection';
import Main from './shared/MainSection';
import Footer from './shared/FooterSection';

import {Todos} from "../api/todos";

export default{
  data() {
    return {
      filter: 'all'
    };
  },
  components: {
        "header-section": Header,
        "main-section": Main,
        "footer-section": Footer
    },
    meteor: {
        data: {
            todos(){
                return Todos.find({}, {sort: {date: 1}}).fetch();
            }
        }
    },
    methods: {
        setFilter(filter) {
            return (this.filter = filter);
        }
    }
};
</script>

<style>

</style>