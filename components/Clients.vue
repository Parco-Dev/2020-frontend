<script setup lang="ts">
import { clientsQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(clientsQuery)
// TODO: type any
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)

defineProps<{
  open: boolean
}>()

// Inject the closeMenuMobile method provided by the parent component
const closeMenuMobile = inject<() => void>('closeMenuMobile');

// Define a function to call closeMenuMobile when the button is clicked
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};

</script>

<template>
  <section :class="{ open }" class="single-section section-clients">
    <div class="single-section-inner">
      <NuxtLink to="/clients" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Clients</p>
      </div>
      <div class="section-content">
        <div class="block-clients-text">
          <p v-html="page?.clientstext"></p>
        </div>
        <div class="clients-logos">
          <div
            v-for="client in page?.clients"
            :key="client.id"
            class="single-client"
          >
            <a :href="client.clientslink">
              <img :src="client.clientslogo?.url" />
            </a>
          </div>
        </div>
      </div>
      
    </div>

    <!--
    <div class="single-section-inner">
      <NuxtLink to="/contact" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Clients</p>
      </div>
      <div class="section-content">
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
            <span v-html="page?.contactsocial"></span>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
    -->
  </section>
</template>
