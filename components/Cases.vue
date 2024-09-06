<script setup lang="ts">
const page = usePage().value;
const props = defineProps<{
  open: boolean,
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
          <div v-for="{ id, title, url, slug, casethumbnail, casesubtitle } of page?.children" :key="id" class="single-case">
            <NuxtLink :to="`/${id}`">
              <div class="case-image">
                <img :src="casethumbnail?.url" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p>{{ title }}</p>
                </div>
                <div class="case-subtitle">
                  <p v-html="casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
