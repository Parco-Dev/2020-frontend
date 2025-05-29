<script setup lang="ts">
import { homeQuery } from '~/queries'
import { worksQuery } from '~/queries'
import { BASE_DELAY } from '~/data/constants'

const { isMobile } = useDevice()
const { queryApi, queryParams } = useQueryParams(worksQuery)
const { data } = await useFetch(queryApi, queryParams)
const page = (data?.value as any)?.result
const hoveredProject = ref(-1)

setPage(page)

onMounted(() => {})

onUnmounted(() => {})
</script>

<template>
  <div class="page-cases">
    <Home :open="false" />
    <Works :open="true" />
    <Clients :open="false" />
    <About :open="false" />
    <Contact :open="false" />
  </div>
</template>
