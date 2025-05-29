<script setup lang="ts">
import { aboutQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(aboutQuery)
const { data } = await useFetch(queryApi, queryParams)
const page = (data?.value as any)?.result
const site = useSite()

setPage(page)
// console.log(page)
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

<style scoped lang="scss"></style>
