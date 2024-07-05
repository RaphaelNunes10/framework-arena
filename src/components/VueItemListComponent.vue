<script setup>
const users = [
    'Rodrigo',
    'Maria',
    'José',
    'Raphael',
    'Ugo'
];
</script>

<template>
    <ul>
        <li v-for="user in users" :key="user">{{ user }}</li>
    </ul>
</template>