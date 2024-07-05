<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
    try {
        const { users: fetchedUsers } = await fetch('https://dummyjson.com/users').then(res => res.json());
        users.value = fetchedUsers;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
    </ul>
</template>