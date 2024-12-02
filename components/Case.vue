<script setup lang="ts">
import { getCaseQuery } from '~/queries'

defineProps<{
  open: boolean
}>()

const route = useRoute()
const { queryApi, queryParams } = useQueryParams(getCaseQuery(route.path))
// TODO: type any
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)
watchEffect(() => console.log(page.value))
</script>

<template>
  <section :class="{ open }" class="single-section section-case">
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header"></NuxtLink>
      <div class="site-header">
        <img src="https://davideg29.sg-host.com/2020/media/site/145c3ed371-1702824530/logo-2020.svg" />
        <p>Case study</p>
      </div>
      <div class="section-content">
        <div class="case-title">
          <h1>{{ page?.title }}</h1>
        </div>
        <div class="case-info">
          <div class="row">
            <div class="col-lg-6 col-12 case-subtitle">
              <span v-html="page?.casesubtitle"></span>
            </div>
            <div class="col-lg-2 col-6">
              <div class="meta-location single-meta">
                <p class="case-meta-label">Location</p>
                <span v-html="page?.caselocation"></span>
              </div>
              <div class="meta-year single-meta">
                <p class="case-meta-label">Year</p>
                <span v-html="page?.caseyear"></span>
              </div>
            </div>
            <div class="col-lg-2 col-6">
              <div class="meta-client single-meta">
                <p class="case-meta-label">Client</p>
                <span v-html="page?.caseclient"></span>
              </div>
              <div class="meta-collaborators single-meta">
                <p class="case-meta-label">Collaborators</p>
                <span v-html="page?.casecollaborators"></span>
              </div>
            </div>
            <div class="col-lg-2 col-6">
              <p class="case-meta-label">Services</p>
              <span v-html="page?.caseservices"></span>
            </div>
          </div>
        </div>
        <div class="case-image">
          <img :src="page?.casemainimage?.url" />
        </div>
        <div class="case-content">
          <div v-for="block in page?.casecontentblocks" :key="block.id" class="single-module" :class="block.type">
            <div v-if="block.type === 'textblock'" class="module-text-one-column">
              <div class="row">
                <div class="col-lg-3 col-12 column-title">
                  <span v-html="block.blocktitle"></span>
                </div>
                <div class="col-lg-9 col-12 column-content">
                  <span v-html="block.paragraph" />
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'imageblock'" class="module-image">
              <div class="row">
                <div class="col-lg-3 col-12"></div>
                <div class="col-lg-9 col-12">
                  <!-- <img :src="page?.casecontentblocksimage.find(b => b.id === block.id).image.url" alt="Image" /> -->
                  <img :src="block.image.url" alt="Image">
                  <div class="caption">
                    <span v-html="block.caption"></span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'doubletextblock'" class="module-text-two-columns">
              <div class="row">
                <div class="col-lg-3 col-12"></div>
                <div class="col-lg-9 col-12">
                  <div class="row">
                    <div class="col-lg-6 col-12 single-column">
                      <span v-html="block.paragraphleft"></span>
                    </div>
                    <div class="col-lg-6 col-12 single-column">
                      <span v-html="block.paragraphright"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'doubleimageblock'" class="module-double-image">
              <div class="row">
                <div class="col-lg-3 col-12"></div>
                <div class="col-lg-9 col-12">
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <img :src="block.imageleft?.url" />
                      <div class="caption">
                        <span v-html="block.captionleft"></span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <img :src="block.imageright?.url" />
                      <div class="caption">
                        <span v-html="block.captionright"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'imagesblock'" class="module-images">
              <div v-for="blockimage in block.imagesblockimages" :key="blockimage.id" class="single-image">
                <img :src="blockimage.imagesblockimagesimage.url" alt="Image" />
                <div class="caption">
                  <span v-html="blockimage.imagesblockimagescaption"></span>
                </div>
                {{  }}
              </div>
            </div>
            <div v-else-if="block.type === 'spacerblock'" class="module-spacer"></div>
          </div>
        </div>
      </div>

      <div class="section-related">
        <div class="block-main-text">
          <p>RELATED CASE STUDIES</p>
        </div>
        <div class="block-related-cases-list">
          <div class="single-case">
            <NuxtLink to="/cases/jasmine-cover">
              <div class="case-image">
                <img
                  src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/ce7ebaa011-1703171913/gruppo-di-maschere-137.jpg" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p>Jasmine Cove</p>
                </div>
                <div class="case-subtitle">
                  <p>A peaceful hidden gem</p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="single-case">
            <NuxtLink to="/cases">
              <div class="case-image">
                <img
                  src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/90e8de4098-1703171960/gruppo-di-maschere-149.jpg" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p>The new marina</p>
                </div>
                <div class="case-subtitle">
                  <p>The land that lies in-between</p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="single-case">
            <NuxtLink to="/cases">
              <div class="case-image">
                <img
                  src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/ce7ebaa011-1703171913/gruppo-di-maschere-137.jpg" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p>Split</p>
                </div>
                <div class="case-subtitle">
                  <p>The land that lies in-between</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/cases" class="button">View all</NuxtLink>
      </div>

      <AppFooter />
    </div>
  </section>
</template>
