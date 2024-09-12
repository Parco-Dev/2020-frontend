<script setup lang="ts">
import { BASE_DELAY } from '~/data/constants'
import { useToggleStore } from '@/stores/toggleStore';
import { siteQuery } from '~/queries'

const { toggleBodyClass } = useToggleStore();

const route = useRoute()
const page = usePage()
const project = useProject() as any

const siteQueryData = useQueryParams(siteQuery)
// console.log(siteQueryData)
const { data: site } = await useFetch<{ result: any }>(
  siteQueryData.queryApi,
  siteQueryData.queryParams
)

</script>

<template>
  <div class="mobile-navigation">
    <div class="site-heading">
      <NuxtLink to="/" class="mobile-home-link">
        <img :src="site?.result.sitelogo?.url" />
        <p>
          Our studio is an experiential strategy company based between
          Melbourne, Los Angeles and London.
        </p>
      </NuxtLink>
    </div>
    <div class="menu-toggle" @click="toggleBodyClass">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
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
