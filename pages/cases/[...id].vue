<script setup lang="ts">
import { getCaseQuery } from '~/queries'
import { BASE_DELAY } from '~/data/constants'

const kirbyPath = useRoute().path
const { queryApi, queryParams } = useQueryParams(getCaseQuery(kirbyPath))
const { data } = await useFetch(queryApi, queryParams)
const page = (data?.value as any)?.result

setPage(page)
setProject(page)
console.log(page)

onMounted(() => {})
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
