<script setup lang="ts">
import { contactQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(contactQuery)
// TODO: type any
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)

defineProps<{
  open: boolean
}>()
</script>

<template>
  <section :class="{ open }" class="single-section section-contact">
    <div class="single-section-inner">
      <NuxtLink to="/contact" class="section-header"></NuxtLink>
      <div class="section-title">
        <p>Contacts</p>
      </div>
      <div v-if="open" class="section-content">
        <div class="block-address">
          <div class="block-title">
            <p>Los Angeles</p>
          </div>
          <div class="block-content">
            <p v-html="page?.contactlosangeles"></p>
          </div>
        </div>
        <div class="block-address">
          <div class="block-title">
            <p>Dubai</p>
          </div>
          <div class="block-content">
            <p v-html="page?.contactdubai"></p>
          </div>
        </div>
        <div class="block-email">
          <div class="block-title">
            <p>Email</p>
          </div>
          <div class="block-content">
            <a :href="`mailto:${page?.contactemail}`">{{
              page?.contactemail
              }}</a>
          </div>
        </div>
        <div class="block-social">
          <div class="block-title">
            <p>Social</p>
          </div>
          <div class="block-content">
            <p v-html="page?.contactsocial"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
