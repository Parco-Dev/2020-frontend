<script setup lang="ts">
import { homeQuery } from '~/queries';

const { queryApi, queryParams } = useQueryParams(homeQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);
console.log(queryApi);
console.log(queryParams);
// console.log(homeQuery);
// console.log(data?.value);
// console.log(page);



</script>

<template>
  <div class="page-home">
    <Home :open="true"/>
    <About :open="false"/>
    <Cases :open="false"/>
    <Contact :open="false"/>
  </div>
</template>
