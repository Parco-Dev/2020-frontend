<script setup lang="ts">
import { clientsQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(clientsQuery)
const { data } = await useFetch(queryApi, queryParams)
const page = (data?.value as any)?.result
const site = useSite()

setPage(page)
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

<style scoped lang="scss"></style>
