<template>
  <Modal />
  <button @click="increment(1, $event)">+</button>
  <p>{{ dataObj.count }}</p>
  <button @click="decrement(1, $event)">-</button>
  <p>{{ oddOrEven }}</p>
  <input
    type="text"
    v-model="data"
    placeholder="Eneter your name"
    v-nimadurfocus
  />
</template>

<script setup>
import { computed, provide, reactive, ref, watch } from "vue";
import Modal from "@/components/Modal.vue";

const data = ref(20);
const dataObj = reactive({
  count: 0,
});
provide("count", dataObj);

const vNimadurfocus = {
  mounted: (el) => {
    el.value = 10;
    el.focus();
    console.log(el.value);
  },
};
watch(
  () => dataObj.count,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    if (newValue === 10) {
      alert("STOP");
    }
  }
);
const oddOrEven = computed(() => {
  if (data.value % 2 === 0) {
    return "even";
  }

  return "odd";
});

const increment = (amount, e) => {
  dataObj.count += amount;
};
const decrement = (amount, e) => {
  dataObj.count -= amount;
};
</script>
