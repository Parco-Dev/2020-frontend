<script setup lang="ts">
import { CasesQuery, homeQuery, siteQuery } from '~/queries'

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
</script>

<template>
  <section :class="{ open }" class="single-section section-home">
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header"></NuxtLink>
      <div class="site-header">
        <div class="site-header-heading">
          <img :src="site?.result.sitelogo?.url" />
          <p>
            Our studio is an experiential strategy company based between
            Melbourne, Los Angeles and London.
          </p>
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
              <div class="col-lg-7 col-12">
                <!-- <p>{{ page?.homeabouttext }} -1</p> -->
                <!-- <p v-html="`${page?.homeabouttext}`"></p> -->
                <p v-html="page?.homeabouttext"></p>

                <NuxtLink to="/about" class="button">About us</NuxtLink>
                <!-- page.homeaboutlink > deve prendere solo la parte dopo la root > /about e non l'url completo -->
              </div>
              <div class="col-lg-5 col-12"></div>
            </div>
          </div>
          <!-- <img src="https://davideg29.sg-host.com/2020/media/pages/home/02d9fc5d33-1702825771/gruppo-di-maschere-118.jpg" /> -->
          <img :src="page?.homeaboutimage?.url" />
        </div>

        <div class="block-experience">
          <div class="experience-circle"></div>
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <p v-html="page?.homeexperience"></p>
                <!-- <p>EXPERIENCE VISION<br>Through the 3 pillars of Culture, Place & Technology we bring clarity and creativity to the most ambitious aspirations.</p> -->
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="experience-section">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="experience-word">
                  <p v-html="page?.homeculturetitle"></p>
                </div>
                <div class="experience-text">
                  <p v-html="page?.homeculturetext"></p>
                </div>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="experience-section">
            <div class="row">
              <div class="col-lg-6 col-12"></div>
              <div class="col-lg-6 col-12">
                <div class="experience-word">
                  <p v-html="page?.homeplacetitle"></p>
                </div>
                <div class="experience-text">
                  <p v-html="page?.homeplacetext"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="experience-section">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="experience-word">
                  <p v-html="page?.hometechnologytitle"></p>
                </div>
                <div class="experience-text">
                  <p v-html="page?.hometechnologytext"></p>
                </div>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
        </div>

        <div class="block-latest-cases">
          <div class="block-main-text">
            <p v-html="page?.homelatestcasestitle"></p>
          </div>
          <div class="block-latest-cases-list">
            <div
              v-for="cases in latestcases"
              :key="cases?.id"
              :class="`featured-project single-case columns-${cases?.columns}`"
            >
              <NuxtLink :to="`/cases/${cases?.url}`">
                <div class="case-image">
                  <!-- <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/ce7ebaa011-1703171913/gruppo-di-maschere-137.jpg"> -->
                  <img :src="cases?.casethumbnail?.url" />
                </div>
                <div class="case-info">
                  <div class="case-title">
                    <p>{{ cases?.title }}</p>
                  </div>
                  <div class="case-subtitle">
                    <p v-html="cases?.casesubtitle"></p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- <a href="#" class="button">View all</a> -->
          <NuxtLink :to="`/cases/`" class="cta">View all</NuxtLink>
        </div>

        <div class="block-outcomes">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <p v-html="page?.homeoutcomes"></p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-outcomes-list">
            <div
              v-for="outcomes in page?.homeoutcomeslinks"
              :key="outcomes.id"
              class="single-outcome"
            >
              <!--<a :href="outcomes.homeoutcomeslinkslink" target="_blank">{{
                outcomes.homeoutcomeslinkstext
              }}</a>-->
              <p>{{ outcomes.homeoutcomeslinkstext }}</p>
            </div>
          </div>
          <NuxtLink :to="`${page?.homeoutcomeslink}`" class="cta">{{
            page?.homeoutcomeslinktext
          }}</NuxtLink>
        </div>

        <div class="block-clients">
          <div class="block-title">
            <p v-html="page?.homeclientstitle"></p>
          </div>
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-8 col-12">
                <p v-html="page?.homeclientstext"></p>
              </div>
              <div class="col-lg-4 col-12"></div>
            </div>
          </div>
          <div class="block-clients-list">
            <div class="row">
              <div
                v-for="clients in page?.homeclients"
                :key="clients.id"
                class="col-lg-4 col-6 single-client"
              >
                <div class="client-image">
                  <img :src="clients?.homeclientslogo?.url" />
                </div>
                <div class="client-name">
                  <p v-html="clients?.homeclientsname"></p>
                </div>
                <div class="client-description">
                  <p v-html="clients?.homeclientsdescription"></p>
                </div>
              </div>
            </div>
          </div>
          <!--<NuxtLink :to="`${page?.homeclientslink}`" class="cta">{{
            page?.homeclientslinktext
          }}</NuxtLink>-->
        </div>

        <div class="block-team">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <p v-html="page?.hometeamtext"></p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-team-image">
            <img :src="page?.hometeamimage?.url" />
          </div>
          <NuxtLink :to="`${page?.hometeamlink}`" class="cta">{{
            page?.hometeamlinktext
          }}</NuxtLink>
        </div>

        <div class="block-newsletter">
          <div class="block-title">
            <p v-html="page?.homenewsletter"></p>
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  </section>
</template>
