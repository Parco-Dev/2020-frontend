<script setup lang="ts">
const page = await useClientsPage();

setPage(page.value)
</script>

<template>
  <div class="page-clients">
    <Home :open="false" />
    <Works :open="false" />
    <Clients :open="true" />
    <About :open="false" />
    <Contact :open="false" />
  </div>
</template>