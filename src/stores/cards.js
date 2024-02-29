import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const useCards = defineStore("cards", () => {
  const cards = ref([
    { name: "first", row: "0" },
    { name: "second", row: "2" },
    { name: "third", row: "0" },
    { name: "fours", row: "1" },
    { name: "fifth", row: "3" },
  ]);

  const cardsOnHold = ref([]);
  const cardsInProgress = ref([]);
  const cardsNeedsReview = ref([]);
  const cardsApproved = ref([]);

  const loadErr = ref();

  function loadCards() {
    axios
      .get(API_BASE_URL + `cards/`)
      .then((response) => (cards.value = response.data))
      .catch((response) => (loadErr.value = response.message));
  }

  //   loadCards();

  function filterCards() {
    const arr = [];
    cards.value.forEach((card) => {
      if (card.row === "0") {
        cardsOnHold.value.push(card);
      }
      if (card.row === "1") {
        cardsInProgress.value.push(card);
      }
      if (card.row === "2") {
        cardsNeedsReview.value.push(card);
      }
      if (card.row === "3") {
        cardsApproved.value.push(card);
      }
    });
  }

  filterCards();

  function postCard(newCard) {
    axios.post(API_BASE_URL + `cards/`, {
      params: {
        row: newCard.row,
        text: newCard.name,
      },
    });
  }

  return {
    cards,
    cardsOnHold,
    cardsInProgress,
    cardsNeedsReview,
    cardsApproved,
    loadErr,
    postCard,
  };
});
