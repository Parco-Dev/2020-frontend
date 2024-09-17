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
    <Home :open="true" />
    <About :open="true" />
    <Cases :open="false" />
    <Contact :open="false" />
  </div>
</template>

<style scoped lang="scss"></style>
