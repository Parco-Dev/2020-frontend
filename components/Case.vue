<script setup lang="ts">
const page = usePage().value
const site = useSite()
console.log(page)
const props = defineProps<{
  open: boolean
}>()

console.log(page)
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
              <p v-html="page?.casesubtitle"></p>
            </div>
            <div class="col-lg-2 col-12">
              <p class="case-meta-label">Location</p>
              <p v-html="page?.caselocation"></p>
              <p class="case-meta-label">Year</p>
              <p v-html="page?.caseyear"></p>
            </div>
            <div class="col-lg-2 col-12">
              <p class="case-meta-label">Client</p>
              <p v-html="page?.caseclient"></p>
              <p class="case-meta-label">Collaborators</p>
              <p v-html="page?.casecollaborators"></p>
            </div>
            <div class="col-lg-2 col-12">
              <p class="case-meta-label">Services</p>
              <p v-html="page?.caseservices"></p>
            </div>
          </div>
        </div>
        <div class="case-image">
          <img :src="page?.casemainimage?.url" />
        </div>
        <div class="case-content">
          <div v-for="block in page?.casecontentblocks" :key="block.id" class="single-module">
            <div v-if="block.type === 'textblock'" class="module-text-one-column">
              <div class="row">
                <div class="col-lg-3 col-12 column-title">
                  <p v-html="block.content.blocktitle"></p>
                </div>
                <div class="col-lg-9 col-12 column-content">
                  <p v-html="block.content.paragraph"></p>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'imageblock'" class="module-image">
              <div class="row">
                <div class="col-lg-3 col-12"></div>
                <div class="col-lg-9 col-12">
                  <img :src="block.content.image.url" />
                  <div class="caption">
                    <p v-html="block.content.caption"></p>
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
                      <p v-html="block.content.paragraphleft"></p>
                    </div>
                    <div class="col-lg-6 col-12 single-column">
                      <p v-html="block.content.paragraphright"></p>
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
                      <img :src="block.content.imageleft.url" />
                      <div class="caption">
                        <p v-html="block.content.captionleft"></p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <img :src="block.content.imageright.url" />
                      <div class="caption">
                        <p v-html="block.content.captionright"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="block.type === 'imagesblock'" class="module-images">
              <div v-for="blockimage in block.content.imagesblockimages" :key="blockimage.id" class="single-image">
                <!-- <img :src="blockimage.imagesblockimagesimage" /> -->
                <!-- {{ block.content.imagesblockimages.imagesblockimagesimage.url }} -->
                <!-- <div class="caption">
                  <p v-html="blockimage.imagesblockimagescaption"></p>
                </div> -->
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
        <a href="#" class="button">View all</a>
      </div>

      <AppFooter />
    </div>
  </section>
</template>
