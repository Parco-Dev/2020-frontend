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
                <p v-html="page?.homeabouttext"></p>
                <NuxtLink to="/about" class="button">Learn more</NuxtLink>
              </div>
              <div class="col-lg-2 col-12"></div>
            </div>
          </div>
        </div>
        <div class="block-video">
          <div class="video-container">
            <div class="video-container-image">
              <img :src="page?.homevideoimage?.url" />
            </div>
            <div class="video-container-text">
              <p v-html="page?.homevideotext"></p>
              <div class="video-container-text-button">
                <p v-html="page?.homevideobutton"></p>
              </div>
            </div>
          </div>
          <div class="video-container-video">
            <video controls>
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
                class="focus-area-content"
                v-show="openIndex === index"
              >
                <div class="gradient-overlay-top"></div>
                <div class="focus-area-content-image">
                  <img :src="focusareas.homefocusareasimage?.url" />
                </div>
                <div class="focus-area-content-info">
                  <p v-html="focusareas.homefocusareastext"></p>
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
            <p v-html="page?.hometext"></p>
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  </section>
</template>
