<template>
  <div>
    Number is {{ numberStore.number }}
    <br />
  </div>
  <div>
    <button @click="numberStore.decrement">-</button>
    <button @click="numberStore.increment">+</button>
    <button @click="numberStore.reset">0</button>
  </div>
  <div>This number is {{ oddOrEven }}</div>
</template>

<script setup>
import { computed, ref } from "vue";
import {useNumberStore} from "@/store/Number";
const numberStore = useNumberStore();
const number = ref(0);
const increment = (e) => {
  number.value++;
};
const decrement = () => {
  number.value--;
};
const reset = () => {
  number.value = 0;
};

const oddOrEven = computed(() => {
  if (number.value % 2 === 0) {
    return "even";
  }
  return "odd";
});
</script>
