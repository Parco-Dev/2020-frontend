<script setup lang="ts">
const page = usePage().value
const props = defineProps<{
  open: boolean
}>()
</script>

<template>
  <section :class="{ open }" class="single-section section-cases">
    <div class="single-section-inner">
      <NuxtLink to="/cases" class="section-header"></NuxtLink>
      <div class="section-title">
        <p>Case studies</p>
      </div>
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
