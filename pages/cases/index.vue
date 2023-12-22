<script setup lang="ts">
import { CasesQuery } from '~/queries';
import { BASE_DELAY } from '~/data/constants';

const { isMobile } = useDevice();
const { queryApi, queryParams } = useQueryParams(CasesQuery());
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;
const hoveredProject = ref(-1);

setPage(page);


onMounted(() => {
 
})

onUnmounted(() => {
  
})

</script>

<template>
    <div class="page-cases">
        <Home :open="false"/>
        <About :open="false"/>
        <Cases :open="true"/>
        <Contact :open="false"/>
    </div>
</template>
