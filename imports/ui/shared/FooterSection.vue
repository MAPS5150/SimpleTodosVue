<template>
    <footer class="footer">
        <span class="todo-count">
            <strong>{{todos.length}} active todo(s)</strong>
            <ul>
                <li>
                    <a :class="{selected: currentFilter==='all'}" @click="handleFilter('all')">All</a>
                </li>
                <li>
                    <a :class="{selected: currentFilter==='active'}" @click="handleFilter('active')">Active</a>
                </li>
                <li>
                    <a :class="{selected: currentFilter==='completed'}" @click="handleFilter('completed')">Completed</a>
                </li>
                <button class="clear-completed"></button>
            </ul>
        </span>
    </footer>
</template>

<script>
export default{
    data() {
        return {
            currentFilter: "all"
        };
    },

    props: ['todos'],
    methods: {
        handleFilter(filterValue) {
            this.currentFilter = filterValue;
            this.$emit('handleFilter', this.currentFilter);
        }
    }
};
</script>

<style scoped>
button {
    display: none;
}
a {
    cursor: pointer;
}
</style>