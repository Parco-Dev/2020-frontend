<script setup lang="ts">
import { getWorkQuery } from '~/queries'

defineProps<{
  open: boolean
}>()

const route = useRoute()
const { queryApi, queryParams } = useQueryParams(getWorkQuery(route.path))
// TODO: type any
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)
watchEffect(() => console.log(page.value))
</script>

<template>
  <section :class="{ open }" class="single-section section-work">
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header"></NuxtLink>
      <div class="site-header">
        <p>Case study</p>
      </div>
      <div class="section-content">
        <div class="work-title">
          <h1>{{ page?.title }}</h1>
        </div>
        <div class="work-info">
          <div class="row">
            <div class="col-lg-6 col-12 work-subtitle">
              <span v-html="page?.worksubtitle"></span>
            </div>
            <div class="col-lg-2 col-6">
              <div class="meta-location single-meta">
                <p class="work-meta-label">Location</p>
                <span v-html="page?.worklocation"></span>
              </div>
              <div class="meta-year single-meta">
                <p class="work-meta-label">Year</p>
                <span>
                  <p>{{ page?.workyear }}</p>
                </span>
              </div>
            </div>
            <div class="col-lg-2 col-6">
              <div class="meta-client single-meta">
                <p class="work-meta-label">Client</p>
                <span v-html="page?.workclient"></span>
              </div>
              <div class="meta-collaborators single-meta">
                <p class="work-meta-label">Collaborators</p>
                <span v-html="page?.workcollaborators"></span>
              </div>
            </div>
            <div class="col-lg-2 col-6">
              <p class="work-meta-label">Services</p>
              <span v-html="page?.workservices"></span>
            </div>
          </div>
        </div>
        <div class="work-image">
          <img :src="page?.workmainimage?.url" />
        </div>
        <div class="work-content">
          <div v-for="block in page?.workcontentblocks" :key="block.id" class="single-module" :class="block.type">
            <div v-if="block.type === 'textblock'" class="module-text-one-column">
              <div class="row">
                <div class="col-lg-3 col-12 column-title">
                  <span v-html="block.blocktitle"></span>
                </div>
                <div class="col-lg-9 col-12 column-content">
                  <span v-html="block.paragraph"></span>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'imageblock'" class="module-image">
              <div class="row">
                <div class="col-lg-3 col-12"></div>
                <div class="col-lg-9 col-12">
                  <img :src="block.image.url" alt="Image">
                  <div class="caption">
                    <span v-html="block.caption"></span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'spacerblock'" class="module-spacer"></div>
          </div>
        </div>
      </div>
      <div class="section-related">
        <div class="block-main-text">
          <p>LATEST CASE STUDIES</p>
        </div>
        <div class="block-related-works-list">
          <div
            v-for="(works, index) in page?.worksrelated"
            :key="index"
            :class="`single-work columns-${works?.columns}`"
          >
            <NuxtLink :to="`/works/${works?.work[0]?.url}`">
              <div class="work-image">
                <img :src="works?.work[0]?.workthumbnail?.url" />
              </div>
              <div class="work-info">
                <div class="work-title">
                  <p>{{ works?.work[0]?.title }}</p>
                </div>
                <div class="work-subtitle">
                  <p v-html="works?.work[0]?.worksubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/works" class="button">View all</NuxtLink>
      </div>
      <AppFooter />
    </div>
    <!--
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header"></NuxtLink>
      <div class="site-header">
        <img src="https://davideg29.sg-host.com/2020/media/site/145c3ed371-1702824530/logo-2020.svg" />
        <p>Work</p>
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
                <span>
                  <p>{{ page?.caseyear }}</p>
                </span>
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
          <div
            v-for="(cases, index) in page?.casesrelated"
            :key="index"
            :class="`single-case columns-${cases?.columns}`"
          >
            <NuxtLink :to="`/works/${cases?.case[0]?.url}`">
              <div class="case-image">
                <img :src="cases?.case[0]?.casethumbnail?.url" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p>{{ cases?.case[0]?.title }}</p>
                </div>
                <div class="case-subtitle">
                  <p v-html="cases?.case[0]?.casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/works" class="button">View all</NuxtLink>
      </div>

      <AppFooter />
    </div>
    -->
  </section>
</template>
