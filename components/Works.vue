<script setup lang="ts">
import imagesLoaded from 'imagesloaded';

// Declare Isotope type for TypeScript
declare global {
  interface Window {
    Isotope: any;
  }
}

const props = defineProps<{ open: boolean }>()

const page = await useWorksPage();


// Inject the closeMenuMobile method provided by the parent component
const closeMenuMobile = inject<() => void>('closeMenuMobile');

// Define a function to call closeMenuMobile when the button is clicked
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};

// Add a class to the body when the button is clicked
// const toggleBodyClass = (className: string) => {
//   const body = document.body;
//   if (body) {
//     if (body.classList.contains(className)) {
//       body.classList.remove(className);
//     } else {
//       body.classList.add(className);
//     }
//   } else {
//     console.warn('Body element is not available');
//   }
// };

const masonryGrid = ref<HTMLElement | null>(null)
const transitionContainer = ref<HTMLElement | null>(null)
const route = useRoute()
let isotopeInstance: any = null

// Check if Isotope is loaded
const isIsotopeLoaded = () => {
  return typeof window.Isotope !== 'undefined'
}

// Initialize Isotope with safety checks
const initializeIsotope = () => {
  if (!masonryGrid.value || window.innerWidth < 992 || isotopeInstance || !isIsotopeLoaded()) return
  
  // Wait for images to load
  imagesLoaded(masonryGrid.value, () => {
    isotopeInstance = new window.Isotope(masonryGrid.value, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.grid-item',
      },
      transitionDuration: '0.4s'
    })
    
    console.log('Isotope initialized')
    
    // Double layout to ensure proper rendering
    setTimeout(() => {
      isotopeInstance?.layout()
      setTimeout(() => isotopeInstance?.layout(), 50)
    }, 100)
  })
}

// Destroy instance
const destroyIsotope = () => {
  if (isotopeInstance) {
    isotopeInstance.destroy()
    isotopeInstance = null
    console.log('Isotope destroyed')
  }
}

// Handle viewport changes
const checkViewportWidth = debounce(() => {
  if (window.innerWidth < 992) {
    destroyIsotope()
  } else if (!isotopeInstance && isIsotopeLoaded()) {
    initializeIsotope()
  }
}, 100)

// Relayout Isotope
const relayoutIsotope = () => {
  if (isotopeInstance) {
    isotopeInstance.layout()
  }
}

// Handle transitions
const handleTransitionEnd = (event: TransitionEvent) => {
  if (event.propertyName === 'width' && transitionContainer.value?.contains(event.target as Node)) {
    relayoutIsotope()
  }
}

// Debounce helper
function debounce(fn: Function, delay: number) {
  let timeout: NodeJS.Timeout
  return function() {
    clearTimeout(timeout)
    // eslint-disable-next-line prefer-rest-params
    timeout = setTimeout(() => fn.apply(this, arguments), delay)
  }
}

onMounted(() => {
  // Wait for Isotope to load if it's not immediately available
  const checkIsotope = setInterval(() => {
    if (isIsotopeLoaded()) {
      clearInterval(checkIsotope)
      initializeIsotope()
    }
  }, 100)

  // Set up event listeners
  window.addEventListener('resize', checkViewportWidth)
  
  if (transitionContainer.value) {
    transitionContainer.value.addEventListener('transitionend', handleTransitionEnd)
  }

  onUnmounted(() => {
    destroyIsotope()
    window.removeEventListener('resize', checkViewportWidth)
    if (transitionContainer.value) {
      transitionContainer.value.removeEventListener('transitionend', handleTransitionEnd)
    }
  })
})

// Watch for route changes
watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    
    if (props.open) {
      destroyIsotope()
      if (isIsotopeLoaded()) {
        initializeIsotope()
      }
    }
  }
)

// Watch for open prop changes
watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      nextTick(() => {
        destroyIsotope()
        if (isIsotopeLoaded()) {
          initializeIsotope()
        }
      })
    }
  }
)


</script>

<template>
  <section ref="transitionContainer" :class="{ open }" class="single-section section-works">
    <div class="single-section-inner">
      <NuxtLink to="/works" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Works</p>
      </div>
      <div class="section-content">
        <div class="works-text-text">
          <p>How we add real-world <strong>value</strong> through experience strategy <sup>tm</sup></p>
        </div>
        <div ref="masonryGrid" class="works-list grid">
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
