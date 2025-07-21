<script setup lang="ts">
  import { useToggleStore } from '@/stores/toggleStore';
  import { watch } from 'vue';

  const toggleStore = useToggleStore();

  // Watch the `isClassActive` state and apply/remove class to/from <body>
  watch(() => toggleStore.isClassActive, (newValue) => {
    if (newValue) {
      document.body.classList.add('active-class');
    } else {
      document.body.classList.remove('active-class');
    }
  });

  const closeMenuMobile = () => {
    document.body.classList.remove('active-class');
  };

  provide('closeMenuMobile', closeMenuMobile);

</script>

<template>
  <Html lang="en">
    <Head>
      <Link rel="icon" href="/favicon.jpg" type="image/jpeg" />
      <link rel="preload" href="/fonts/Baikal-VF.ttf" as="font" type="font/ttf" crossorigin="anonymous">
    </Head>

    <Body class="expand-cases-active">
      <div class="page">
        <AppHeader />
        <NuxtPage />
        <AppFooter />
      </div>
    </Body>
  </Html>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all .5s;
}

.page-leave-active {
  .section-content {
    animation: fade-out 2s linear 1;
    transition: all 0.5s;
    opacity: 0;
  }
}

.page-enter-active {
  .section-content {
    transition: all 0.25s;
    opacity: 1;
  }
}

.page-enter-from {
  .section-content {
    transition: all 0.25s;
    opacity: 0;
  }
  /* opacity: 0;
  transform: translateY(5px); */
}

.page-leave-to {
  .animated-image {
    opacity: 0 !important;
  }

  .animated-text {
    opacity: 0;
    &:after {
      width: 101%;
    }
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
