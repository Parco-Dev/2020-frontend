<script setup lang="ts">
import { siteQuery } from '~/queries'

defineProps<{ open: boolean }>()

const page = await useHomePage();

const siteQueryData = useQueryParams(siteQuery)
// console.log(siteQueryData)
const { data: site } = await useFetch<{ result: any }>(
  siteQueryData.queryApi,
  siteQueryData.queryParams
)
// watchEffect(() => console.log(site.value))

// const latestcases = computed(() =>
//   page.value.homelatestcases?.map((item: any) => {
//     return {
//       ...item.case[0],
//       columns: item.columns,
//     }
//   })
// )

const shortbio = computed(() => site.value?.result?.shortbio || '');

/* FOCUS AREAS */

const openIndex = ref<number | null>(null)
const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}


const route = useRoute()

const setMinHeight = () => {
  nextTick(() => {
    const button = document.querySelector('.focus-area-button')
    const target = document.querySelector('.single-focus-area')
    if (button && target) {
      target.style.minHeight = `${button.offsetHeight}px`
    }
  })
}

const handleResize = () => {
  setMinHeight()
}

onMounted(() => {
  setMinHeight()
  window.addEventListener('resize', handleResize)
})

// Optional: update on route change
watch(() => route.fullPath, () => {
  setMinHeight()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

/* VIDEO */

const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

function playVideo() {
  isPlaying.value = true
  videoRef.value?.play()
}



</script>

<template>
  <section :class="{ open }" class="single-section section-home">
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header"></NuxtLink>
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
      <div class="section-content">
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
          <div v-if="page?.homevideo?.url" class="video-container-video">
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
            <p v-html="page?.homephilosophytext"></p>
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
                v-show="openIndex === index"
                class="focus-area-content"
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
            <NuxtLink to="/about" class="button">{{ page?.homefocusareasbutton }}</NuxtLink>
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
