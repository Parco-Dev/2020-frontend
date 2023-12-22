<script setup lang="ts">
import { contactQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(contactQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;
const site = useSite();

setPage(page);

</script>

<template>
  <div class="page-contact">
    <Home :open="true"/>
    <About :open="false"/>
    <Cases :open="false"/>
    <Contact :open="true"/>
  </div>
</template>

<style scoped lang="scss">

</style>