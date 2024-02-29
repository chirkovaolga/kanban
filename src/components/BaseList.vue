<template>
    <h2>{{ title }}</h2>
    <BaseItem v-for="card in cards" :key="card.id" :card="card" />
    <input v-if="input" type="textarea" placeholder="Введите заголовок для этой карточки" v-model.trim="inputName">
    <button @click="addCard">Добавить карточку</button>
</template>

<script setup>
import BaseItem from './BaseItem.vue';
import { ref } from 'vue';
import { useCards } from '@/stores/cards.js';
import { storeToRefs } from 'pinia';

const postCard = storeToRefs(useCards());

const props = defineProps({
    title: {
        type: String
    },
    cards: {
        type: Array
    }
})

const rowNumber = () => {
    let row = '';
    if (props.title === "ON-HOLD") {
        row = "0"
    }
    if (props.title === "IN-PROGRESS") {
        row = "1"
    }
    if (props.title === "NEEDS-REVIEW") {
        row = "2"
    }
    if (props.title === "APPROVED") {
        row = "3"
    }
    return row
}

const inputName = ref();

const input = ref(false);

const newCard = ref({
    name: inputName,
    row: rowNumber()
})

const addCard = () => {
    input.value = !input.value;

    if (input.value && inputName.value) {
        postCard(newCard)
    }
}


</script>