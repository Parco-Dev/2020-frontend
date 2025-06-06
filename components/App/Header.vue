<script setup lang="ts">
import { BASE_DELAY } from '~/data/constants'
import { useToggleStore } from '@/stores/toggleStore';
import { siteQuery } from '~/queries'
import { contactQuery } from '~/queries'
import Clock from '~/components/Clock.vue'

const { toggleBodyClass } = useToggleStore();

const route = useRoute()
// const page = usePage()
const project = useProject() as any

const siteQueryData = useQueryParams(siteQuery)
// console.log(siteQueryData)
const { data: site } = await useFetch<{ result: any }>(
  siteQueryData.queryApi,
  siteQueryData.queryParams
)

const { queryApi, queryParams } = useQueryParams(contactQuery)
// TODO: type any
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)

const shortbio = computed(() => site.value?.result?.shortbio || '');

onMounted(() => {
  document.querySelectorAll('.mobile-menu .mobile-menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('active-class')
    })
  })
})


</script>

<template>
  <div>
    <div class="mobile-navigation">
      <div class="site-heading">
        <NuxtLink to="/" class="mobile-home-link">
          <img :src="site?.result.sitelogo?.url" />
          <client-only>
            <p v-if="shortbio" v-html="shortbio"></p>
          </client-only>
        </NuxtLink>
      </div>
      <div class="menu-toggle" @click="toggleBodyClass">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    </div>
    <div class="mobile-menu">
      <div class="mobile-menu-links">
        <NuxtLink to="/works">Work</NuxtLink>
        <NuxtLink to="/clients">Clients</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
      <div class="mobile-menu-contact">
        <client-only>
          <p v-html="page?.contactgeneral"></p>
        </client-only>
      </div>
      <div class="mobile-menu-addresses">
        <div class="block-address">
          <div class="block-address-clock">
            <Clock timezone="America/Los_Angeles" />
          </div>
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
        </div>
        <div class="block-address">
          <div class="block-address-clock">
            <Clock timezone="Asia/Dubai" />
          </div>
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
        </div>
        <div class="block-address">
          <div class="block-address-clock">
            <Clock timezone="Australia/Sydney" />
          </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-enter-active,
.top-leave-active {
  transition: all 0.5s;
}

.top-enter-active {
  transition-delay: 0.5s;
}

.top-enter-from,
.top-leave-to {
  /* opacity: 0;
  transform: translateY(-10px); */
}

.top-leave-to {
  .animated-text {
    opacity: 0;
    &:after {
      width: 101%;
    }
  }
  li.active:before {
    width: 0%;
  }
}

.top-header {
  &-bio,
  &-filters,
  &-project {
    position: fixed;
    width: 100%;
    animation: fade-from-top 0.75s ease-in-out 1;
  }
}

.header {
  padding: 20px;

  &__nav {
    display: flex;
  }

  &__item {
    [aria-current='page'] {
      text-decoration: underline;
    }
  }
}

@keyframes fade-from-top {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
