<template>
    <li>
        <p><span>id</span>: {{ card.id }}</p>
        <p>{{ card.name }}</p>
    </li>
</template>

<script setup>
const props = defineProps({
    card: {
        type: Object
    }
})
</script>