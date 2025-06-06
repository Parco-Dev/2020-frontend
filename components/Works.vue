<script setup lang="ts">
import imagesLoaded from 'imagesloaded';
import { worksQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(worksQuery)

const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)

const props = defineProps<{
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

// Add a class to the body when the button is clicked
const toggleBodyClass = (className: string) => {
  const body = document.body;
  if (body) {
    if (body.classList.contains(className)) {
      body.classList.remove(className);
    } else {
      body.classList.add(className);
    }
  } else {
    console.warn('Body element is not available');
  }
};

const masonryGrid = ref(null);
const transitionContainer = ref(null);
const route = useRoute();
let isotopeInstance: any = null;

// Initialize Isotope after images are loaded
const initializeIsotope = () => {
  if (!masonryGrid.value || window.innerWidth < 992) return;

  imagesLoaded(masonryGrid.value, () => {
    isotopeInstance = new Isotope(masonryGrid.value, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.grid-item',
      },
    });
    console.log('Isotope initialized after images loaded');
  });
};

// Destroy instance
const destroyIsotope = () => {
  if (isotopeInstance) {
    isotopeInstance.destroy();
    isotopeInstance = null;
    console.log('Isotope destroyed');
  }
};

const checkViewportWidth = () => {
  if (window.innerWidth < 992) {
    destroyIsotope();
  } else if (!isotopeInstance) {
    initializeIsotope();
  }
};

const relayoutIsotope = () => {
  if (isotopeInstance) {
    isotopeInstance.layout();
  }
};

const handleTransitionEnd = (event: TransitionEvent) => {
  if (event.propertyName === 'width' && transitionContainer.value?.contains(event.target)) {
    relayoutIsotope();
  }
};

onMounted(() => {
  destroyIsotope();

  nextTick(() => {
    initializeIsotope();
  });

  window.addEventListener('resize', checkViewportWidth);

  if (transitionContainer.value) {
    transitionContainer.value.addEventListener('transitionend', handleTransitionEnd);
  }

  onUnmounted(() => {
    destroyIsotope();
    window.removeEventListener('resize', checkViewportWidth);
    if (transitionContainer.value) {
      transitionContainer.value.removeEventListener('transitionend', handleTransitionEnd);
    }
  });
});

// 🔁 WATCH ROUTE CHANGE IN COMPONENT (because Nuxt page keeps component mounted)
watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    destroyIsotope();

    // Delay a bit to ensure DOM + images are ready
    setTimeout(() => {
      initializeIsotope();
    }, 100);
  }
);

</script>

<template>
  <section :class="{ open }" class="single-section section-works" ref="transitionContainer">
    <div class="single-section-inner">
      <NuxtLink to="/works" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Works</p>
      </div>
      <div class="section-content">
        <div class="works-text-text">
          <p>How we add real-world <strong>value</strong> through experience strategy <sup>tm</sup></p>
        </div>
        <div class="works-list grid" ref="masonryGrid">
          <div
            v-for="{ id, title, casethumbnail, casethumbnailsize, casesubtitle } of page?.children"
            :key="id"
            class="single-work"
            :class="`grid-item ${casethumbnailsize}`"
          >
            <NuxtLink :to="`/${id}`">
              <div class="work-image">
                <img :src="casethumbnail?.url" />
              </div>
              <div class="work-info">
                <div class="work-title">
                  <p>{{ title }}</p>
                </div>
                <div class="work-subtitle">
                  <p v-html="casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <AppFooter/>
      </div>
    </div>
  </section>
</template>
