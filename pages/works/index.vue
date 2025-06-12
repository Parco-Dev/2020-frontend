<script setup lang="ts">
await useHomePage();
const page = await useWorksPage();

setPage(page.value)
</script>

<template>
  <div class="page-cases">
    <Home :open="false" />
    <Works :open="true" />
    <Clients :open="false" />
    <About :open="false" />
    <Contact :open="false" />
  </div>
</template>