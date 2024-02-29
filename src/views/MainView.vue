
import BaseListVue from '@/components/BaseList.vue';
<template>
    <main>
        <div class="container">
            <div>
                <BaseList title="ON-HOLD" :cards="cards.cardsOnHold" />
            </div>
            <div>
                <BaseList title="IN-PROGRESS" :cards="cards.cardsInProgress" />
            </div>
            <div>
                <BaseList title="NEEDS-REVIEW" :cards="cards.cardsNeedsReview" />
            </div>
            <div>
                <BaseList title="APPROVED" :cards="cards.cardsApproved" />
            </div>
        </div>
    </main>
</template>

<script setup>
import BaseList from '@/components/BaseList.vue'
import { useCards } from '@/stores/cards.js'

const cards = useCards();

</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
</style>