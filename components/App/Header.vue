<script setup lang="ts">
import { BASE_DELAY } from '~/data/constants';

const route = useRoute()
const site = useSite()
const page = usePage();
const project = useProject() as any;

</script>

<template>
<div></div>
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
  &-bio, &-filters, &-project {
    position: fixed;
    width: 100%;
    animation: fade-from-top .75s ease-in-out 1;
  }
}

.header {
  padding: 20px;

  &__nav {
    display: flex;
  }

  &__item {
    [aria-current="page"] {
      text-decoration: underline;
    }
  }
}

@keyframes fade-from-top {
  0%   { opacity: 0; transform: translateY(-10px); }
  50%  { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
