<script setup lang="ts">
const page = await useContactPage();

setPage(page.value)
</script>

<template>
  <div class="page-contact">
    <Home :open="false" />
    <Works :open="false" />
    <Clients :open="false" />
    <About :open="true" />
    <Contact :open="true" />
  </div>
</template>