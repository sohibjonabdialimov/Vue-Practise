<template>
  <h2>
    Child Component {{ count.count }}
  </h2>
</template>
<script setup>
import { inject } from "vue";

  const count = inject("count");

</script>