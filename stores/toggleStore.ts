import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToggleStore = defineStore('toggle', () => {
  const isClassActive = ref(false);

  const toggleBodyClass = () => {
    isClassActive.value = !isClassActive.value;
  };

  return { isClassActive, toggleBodyClass };
});