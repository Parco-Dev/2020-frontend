<script setup lang="ts">
import { contactQuery } from '~/queries'
import Clock from '~/components/Clock.vue'

const { queryApi, queryParams } = useQueryParams(contactQuery)
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
  <section :class="{ open }" class="single-section section-contact">
    <div class="single-section-inner">
      <NuxtLink to="/contact" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Contact</p>
      </div>
      <div class="section-content">
        <div class="close-button">
          <NuxtLink to="/">
            <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15.6 15.6" style="enable-background:new 0 0 15.6 15.6;" xml:space="preserve">
              <polygon class="st0" points="15.6,1.4 14.2,0 7.8,6.4 1.4,0 0,1.4 6.4,7.8 0,14.2 1.4,15.6 7.8,9.2 14.2,15.6 15.6,14.2 9.2,7.8 "/>
            </svg>
          </NuxtLink>
        </div>
        <div class="block-contacts">
          <client-only>
            <p v-html="page?.contactgeneral"></p>
          </client-only>
        </div>
        <div class="block-address">
          <div class="block-address-text">
            <div class="block-address-text-title">
              <p>Los Angeles</p>
            </div>
            <div class="block-address-text-content">
              <client-only>
                <p v-html="page?.contactlosangeles"></p>
              </client-only>
            </div>
          </div>
          <div class="block-address-clock">
            <Clock timezone="America/Los_Angeles" />
          </div>
        </div>
        <div class="block-address">
          <div class="block-address-text">
            <div class="block-address-text-title">
              <p>Dubai</p>
            </div>
            <div class="block-address-text-content">
              <client-only>
                <p v-html="page?.contactdubai"></p>
              </client-only>
            </div>
          </div>
          <div class="block-address-clock">
            <Clock timezone="Asia/Dubai" />
          </div>
        </div>
        <div class="block-address">
          <div class="block-address-text">
            <div class="block-address-text-title">
              <p>Sydney</p>
            </div>
            <div class="block-address-text-content">
              <client-only>
                <p v-html="page?.contactsydney"></p>
              </client-only>
            </div>
          </div>
          <div class="block-address-clock">
            <Clock timezone="Australia/Sydney" />
          </div>
        </div>
        <AppFooter/>
      </div>
    </div>
  </section>
</template>
