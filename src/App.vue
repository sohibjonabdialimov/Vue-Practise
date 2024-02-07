<template>
  <h1>Hello world</h1>
  <button @click="increment(1, $event)">+</button>
  <p>{{dataObj.count}}</p>
  <button @click="decrement(1, $event)">-</button>
  <p>{{oddOrEven}}</p>
  <!-- <input type="text" v-model="data">
  <input type="text" v-model="data"> -->
</template>

<script setup>
import {computed, reactive, ref, watch} from "vue";

const data = ref(0);
const dataObj = reactive({
  count: 0
})
watch(() => dataObj.count, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  if(newValue === 10){
    alert("STOP");
  }
})
const oddOrEven = computed(() => {
  if(data.value % 2 === 0){
    return "even"
  }

  return "odd";
})

const increment = (amount, e) => {
  console.log(e);
  dataObj.count += amount;
}
const decrement = (amount, e) => {
  console.log(e);
  dataObj.count -= amount;
}
</script>

<style scoped></style>
