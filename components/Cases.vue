<script setup lang="ts">
import { casesQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(casesQuery)

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

const handleButtonClick = () => {
  toggleBodyClass('expand-cases-active');
};

const masonryGrid = ref(null);
const transitionContainer = ref(null);
let isotopeInstance: any = null;

// Initialize Isotope
const initializeIsotope = () => {
  if (masonryGrid.value && window.innerWidth >= 992) {
    isotopeInstance = new Isotope(masonryGrid.value, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.grid-item',
      },
    });
    console.log('Isotope initialized');
  }
};

// Destroy Isotope instance
const destroyIsotope = () => {
  if (isotopeInstance) {
    isotopeInstance.destroy();
    isotopeInstance = null;
    console.log('Isotope destroyed');
  }
};

// Check viewport width and toggle Isotope
const checkViewportWidth = () => {
  if (window.innerWidth < 992) {
    destroyIsotope();
  } else if (!isotopeInstance) {
    initializeIsotope();
  }
};

// Recalculate Isotope layout
const relayoutIsotope = () => {
  if (isotopeInstance) {
    isotopeInstance.layout();
    console.log('Isotope layout recalculated');
  }
};

// Handle `transitionend` event
const handleTransitionEnd = (event: TransitionEvent) => {
  if (event.propertyName === 'width' && transitionContainer.value?.contains(event.target)) {
    relayoutIsotope();
    console.log('Transition ended, Isotope layout recalculated');
  }
};

// Handle `expand-cases-active` class change
const handleClassChange = () => {
  if (document.body.classList.contains('expand-cases-active')) {
    checkViewportWidth();
  } else {
    destroyIsotope();
  }
};

onMounted(() => {
  // Attach `transitionend` listener
  if (transitionContainer.value) {
    transitionContainer.value.addEventListener('transitionend', handleTransitionEnd);
  }

  // Initialize Isotope if the class is already present and screen is wide enough
  if (document.body.classList.contains('expand-cases-active')) {
    checkViewportWidth();
  }

  // Observe changes to the body's class attribute
  const observer = new MutationObserver(() => {
    handleClassChange();
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // Attach `resize` event listener
  window.addEventListener('resize', checkViewportWidth);

  // Cleanup
  onUnmounted(() => {
    destroyIsotope();
    observer.disconnect();
    if (transitionContainer.value) {
      transitionContainer.value.removeEventListener('transitionend', handleTransitionEnd);
    }
    window.removeEventListener('resize', checkViewportWidth);
  });
});

</script>

<template>
  <section :class="{ open }" class="single-section section-cases" ref="transitionContainer">
    <div class="single-section-inner">
      <NuxtLink to="/cases" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Case studies</p>
      </div>
      <div class="section-content">
        <div class="cases-list grid" ref="masonryGrid">
          <div
            v-for="{ id, title, casethumbnail, casethumbnailsize, casesubtitle } of page?.children"
            :key="id"
            class="single-case"
            :class="`grid-item ${casethumbnailsize}`"
          >
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
        <div class="cases-view-all">
          <div class="cta expand-cases-button" @click="handleButtonClick">
            <span class="view-all">View all</span>
            <span class="view-less">View less</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
