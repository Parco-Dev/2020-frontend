<script setup lang="ts">
import { getWorkQuery } from '~/queries'

const kirbyPath = useRoute().path
const { queryApi, queryParams } = useQueryParams(getWorkQuery(kirbyPath))
const { data } = await useFetch(queryApi, queryParams)
const page = (data?.value as any)?.result

setPage(page)
setProject(page)
</script>

<template>
  <div class="page-case">
    <Home :open="false" />
    <Work :open="true" :visible="true" />
    <Works :open="false" />
    <Clients :open="false" />
    <About :open="false" />
    <Contact :open="false" />
  </div>
</template>

<style scoped lang="scss"></style>
