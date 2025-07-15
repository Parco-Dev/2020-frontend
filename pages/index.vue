<script setup lang="ts">
const page = await useHomePage();

setPage(page.value)
</script>

<template>
  <div class="page-home">
    <Home :open="true" />
    <Works :open="false" />
    <Clients :open="false" />
    <About :open="false" />
    <Contact :open="false" />
  </div>
</template>