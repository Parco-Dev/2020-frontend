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
