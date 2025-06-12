<script setup lang="ts">
const page = await useAboutPage();

setPage(page.value)
</script>

<template>
  <div class="page-about">
    <Home :open="false" />
    <Works :open="false" />
    <Clients :open="false" />
    <About :open="true" />
    <Contact :open="false" />
  </div>
</template>