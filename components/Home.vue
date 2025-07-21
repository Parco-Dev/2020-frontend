<script setup lang="ts">
import { homeQuery, siteQuery } from '~/queries'

defineProps<{ open: boolean }>()

const { queryApi, queryParams } = useQueryParams(homeQuery)
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data!.value!.result)

const siteQueryData = useQueryParams(siteQuery)
// console.log(siteQueryData)
const { data: site } = await useFetch<{ result: any }>(
  siteQueryData.queryApi,
  siteQueryData.queryParams
)
// watchEffect(() => console.log(site.value))

const latestcases = computed(() =>
  page.value.homelatestcases?.map((item: any) => {
    return {
      ...item.case[0],
      columns: item.columns,
    }
  })
)

const shortbio = computed(() => site.value?.result?.shortbio || '');

/* FOCUS AREAS */

const openIndex = ref<number | null>(null)
const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}


const route = useRoute()

const focusAreas = ref<NodeListOf<HTMLElement>>()
const buttons = ref<NodeListOf<HTMLElement>>()

const setMinHeights = (): void => {
  nextTick(() => {
    buttons.value = document.querySelectorAll('.focus-area-button')
    focusAreas.value = document.querySelectorAll('.single-focus-area')
    
    focusAreas.value?.forEach((target: HTMLElement, index: number) => {
      const button = buttons.value?.[index]
      if (button && target) {
        target.style.minHeight = `${button.offsetHeight}px`
      }
    })
  })
}

// Add a small debounce to handle rapid resizes
const debouncedResize = useDebounceFn(() => {
  setMinHeights()
}, 100)

onMounted(() => {
  setMinHeights()
  window.addEventListener('resize', debouncedResize)
  
  // This ensures it runs when coming back to the page
  useNuxtApp().hook('page:transition:finish', () => {
    setMinHeights()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debouncedResize)
})

// Watch route changes with nextTick to ensure DOM is ready
watch(() => useRoute().path, () => {
  nextTick(() => {
    setMinHeights()
  })
})

/* VIDEO */

const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

function playVideo() {
  isPlaying.value = true
  videoRef.value?.play()
}

/* Business */

const activeSection = ref(null)

const toggleSection = (sectionName) => {
  if (activeSection.value === sectionName) {
    activeSection.value = null
  } else {
    activeSection.value = sectionName
  }
}

</script>

<template>
  <section :class="{ open }" class="single-section section-home">
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header" @mouseenter="useHomePage()"></NuxtLink>
      <div class="site-header">
        <div class="site-header-heading">
          <img :src="site?.result.sitelogo?.url" />
          <client-only>
            <p v-if="shortbio" v-html="shortbio"></p>
          </client-only>
        </div>
        <div class="site-header-mobile">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div v-if="open" class="section-content">
        <div class="block-about">
          <div class="about-text">
            <div class="row">
              <div class="col-lg-10 col-12">
                <client-only>
                  <p v-html="page?.homeabouttext"></p>
                </client-only>
                <NuxtLink to="/about" class="button">Learn more</NuxtLink>
              </div>
              <div class="col-lg-2 col-12"></div>
            </div>
          </div>
        </div>
        <div class="block-video">
          <div
          class="video-container"
          :class="{ hidden: isPlaying }"
          @click="playVideo">
            <div class="video-container-image">
              <img :src="page?.homevideoimage?.url" />
            </div>
            <div class="video-container-text">
              <client-only>
                <p v-html="page?.homevideotext"></p>
              </client-only>
              <div class="video-container-text-button">
                <p v-html="page?.homevideobutton"></p>
              </div>
            </div>
          </div>
          <div class="video-container-video">
            <video ref="videoRef">
              <source :src="`${page?.homevideo?.url}`" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="block-philosophy">
          <div class="block-philosophy-title">
            <p v-html="page?.homephilosophytitle"></p>
          </div>
          <div class="block-philosophy-text">
            <p>We Unite: 
              <span ref="businessWord" class="word">
                Business
                <span class="philosophy-text philosophy-text-business" :class="{ visible: activeSection === 'business' }">
                  <p>business text Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </span>
                <span class="plus plus-business" @click="toggleSection('business')" :class="{ active: activeSection === 'business' }">
                  <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.1 21.6" style="enable-background:new 0 0 29.1 21.6;" xml:space="preserve"> <polygon points="29.1,9.3 16,9.3 16,0 13,0 13,9.3 0,9.3 0,12.3 13,12.3 13,21.6 16,21.6 16,12.3 29.1,12.3 "/> </svg>
                </span>
              </span>, 
              <span class="word">
                Space
                <span class="philosophy-text philosophy-text-space" :class="{ visible: activeSection === 'space' }">
                  <p>business text Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </span>
                <span class="plus plus-space" @click="toggleSection('space')" :class="{ active: activeSection === 'space' }">
                  <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.1 21.6" style="enable-background:new 0 0 29.1 21.6;" xml:space="preserve"> <polygon points="29.1,9.3 16,9.3 16,0 13,0 13,9.3 0,9.3 0,12.3 13,12.3 13,21.6 16,21.6 16,12.3 29.1,12.3 "/> </svg>
                </span>
              </span> &amp; 
              <span class="word">
                Emotion
                <span class="philosophy-text philosophy-text-emotion" :class="{ visible: activeSection === 'emotion' }">
                  <p>business text Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </span>
                <span class="plus plus-emotion" @click="toggleSection('emotion')" :class="{ active: activeSection === 'emotion' }">
                  <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.1 21.6" style="enable-background:new 0 0 29.1 21.6;" xml:space="preserve"> <polygon points="29.1,9.3 16,9.3 16,0 13,0 13,9.3 0,9.3 0,12.3 13,12.3 13,21.6 16,21.6 16,12.3 29.1,12.3 "/> </svg>
                </span>
              </span>
            </p>
            <!--
            <p v-html="page?.homephilosophytext"></p>
            <div class="philosphy-text philosophy-text-business" style="display: none;">
              <p v-html="page?.homephilosophybusiness"></p>
            </div>
            <div class="philosphy-text philosophy-text-space" style="display: none;">
              <p v-html="page?.homephilosophyspace"></p>
            </div>
            <div class="philosphy-text philosophy-text-emotion" style="display: none;">
              <p v-html="page?.homephilosophyemotion"></p>
            </div>
            -->
          </div>
          <div class="block-philosophy-subtitle">
            <p v-html="page?.homephilosophysubtitle"></p>
          </div>
        </div>
        <div class="block-focus-areas">
          <div class="block-title">
            <p v-html="page?.homefocusareastitle"></p>
          </div>
          <div
            v-for="(focusareas, index) in page?.homefocusareas"
            :key="focusareas.id"
            class="single-focus-area"
            :class="{ 'is-open': openIndex === index }"
          >
            <div class="focus-area-button" @click="toggle(index)">
              <div class="focus-area-button-title">
                <p>{{ focusareas.homefocusareastitletitle }}</p>
              </div>
              <div class="focus-area-button-subtitle">
                <p>{{ focusareas.homefocusareassubtitle }}</p>
              </div>
            </div>
            <transition name="collapse">
              <div
                class="focus-area-content"
                v-show="openIndex === index"
              >
                <div class="gradient-overlay-top"></div>
                <div class="focus-area-content-image">
                  <img :src="focusareas.homefocusareasimage?.url" />
                </div>
                <div class="focus-area-content-info">
                  <div class="focus-area-content-info-list">
                    <div class="list-item">
                      <div class="list-number">
                        <p>1</p>
                      </div>
                      <div class="list-text">
                        <p v-html="focusareas.homefocusareasfeatureone"></p>
                      </div>
                    </div>
                    <div class="list-item">
                      <div class="list-number">
                        <p>2</p>
                      </div>
                      <div class="list-text">
                        <p v-html="focusareas.homefocusareasfeaturetwo"></p>
                      </div>
                    </div>
                    <div class="list-item">
                      <div class="list-number">
                        <p>3</p>
                      </div>
                      <div class="list-text">
                        <p v-html="focusareas.homefocusareasfeaturethree"></p>
                      </div>
                    </div>
                  </div>
                  <div class="focus-area-content-info-text">
                    <p v-html="focusareas.homefocusareastext"></p>
                  </div>
                </div>
                <div class="gradient-overlay-bottom"></div>
              </div>
            </transition>
          </div>
          <div class="focus-areas-button">
            <NuxtLink to="/works" class="button">{{ page?.homefocusareasbutton }}</NuxtLink>
          </div>
        </div>
        <div class="block-big-text">
          <div class="big-text">
            <client-only>
              <p v-html="page?.hometext"></p>
            </client-only>
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  </section>
</template>
