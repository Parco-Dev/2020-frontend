<script setup lang="ts">
import { CasesQuery } from '~/queries'

defineProps<{ open: boolean }>()

const { queryApi, queryParams } = useQueryParams(CasesQuery())
const { data: page } = await useFetch(queryApi, queryParams)

watchEffect(() => console.log(page.value.children))
</script>

<template>
  <section :class="{ open }" class="single-section section-cases">
    <div class="single-section-inner">
      <NuxtLink to="/cases" class="section-header"></NuxtLink>
      <div class="section-title">
        <p>Case studies</p>
      </div>
      <p v-for="{ id, title, url } of page?.result.children" :key="id">{{ title }}</p>
      <div v-if="open" class="section-content">
        <div class="cases-list">
          <div class="single-case">
            <NuxtLink to="/cases/jasmine-cove">
              <div class="case-image">
                <img :src="page?.casethumbnail?.url" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p v-html="page?.title"></p>
                </div>
                <div class="case-subtitle">
                  <p v-html="page?.casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="single-case">
            <NuxtLink to="/cases">
              <img :src="page?.casethumbnail?.url" />
              <div class="case-image">
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p v-html="page?.title"></p>
                </div>
                <div class="case-subtitle">
                  <p v-html="page?.casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="single-case">
            <NuxtLink to="/cases">
              <div class="case-image">
                <img :src="page?.casethumbnail?.url" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p v-html="page?.title"></p>
                </div>
                <div class="case-subtitle">
                  <p v-html="page?.casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="single-case">
            <NuxtLink to="/cases">
              <div class="case-image">
                <img :src="page?.casethumbnail?.url" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p v-html="page?.title"></p>
                </div>
                <div class="case-subtitle">
                  <p v-html="page?.casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
