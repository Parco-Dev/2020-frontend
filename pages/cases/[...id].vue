<script setup lang="ts">
import { getCaseQuery } from '~/queries'

const kirbyPath = useRoute().path
const { queryApi, queryParams } = useQueryParams(getCaseQuery(kirbyPath))
const { data } = await useFetch(queryApi, queryParams)
const page = (data?.value as any)?.result

setPage(page)
setProject(page)
</script>

<template>
  <div class="page-case">
    <Home :open="false" :visible="false" />
    <Case :open="true" :visible="true" />
    <About :open="false" />
    <Cases :open="false" />
    <Contact :open="false" />
  </div>
</template>

<style scoped lang="scss"></style>
