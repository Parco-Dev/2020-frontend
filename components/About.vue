<script setup lang="ts">
import { aboutQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(aboutQuery)
// TODO: type any
const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)
defineProps<{
  open?: boolean
}>()

// Assuming you have a `page` object available in your component
const activeIndexFocusAreas = ref(0) // Track the active focus area index

// Function to set the active focus area index
const setActiveFocusAreas = (index: number) => {
  activeIndexFocusAreas.value = index
}

// Get the focus areas from the page object
const focusAreas = computed(() => page.value?.aboutfocusareas || [])

// Assuming you have a `page` object available in your component
const activeIndexMethodology = ref(0) // Track the active focus area index

// Function to set the active focus area index
const setActiveMethodology = (index: number) => {
  activeIndexMethodology.value = index
}

// Get the focus areas from the page object
const methodologySections = computed(() => page.value?.aboutmethodology || [])

// Assuming you have a `page` object available in your component
const activeIndexTeam = ref(0) // Track the active focus area index

// Function to set the active focus area index
const setActiveTeam = (index: number) => {
  activeIndexTeam.value = index
}

// Get the focus areas from the page object
const teamGroups = computed(() => page.value?.aboutteamgroups || [])


// Inject the closeMenuMobile method provided by the parent component
const closeMenuMobile = inject<() => void>('closeMenuMobile');

// Define a function to call closeMenuMobile when the button is clicked
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};



// Create a reactive array to track the active state for each person
const isActiveBio = ref<boolean[]>([]);

// Ensure the isActiveBio array has the same length as team.aboutteamgrouppeople
const team = {
  aboutteamgrouppeople: [
    /* Array of team person objects */
  ]
};

team.aboutteamgrouppeople.forEach(() => {
  isActiveBio.value.push(false);
});

// Toggle the active state for a specific person by index
const toggleBio = (index: number) => {
  isActiveBio.value[index] = !isActiveBio.value[index];
};

</script>

<template>
  <section :class="{ open }" class="single-section section-about">
    <div class="single-section-inner">
      <NuxtLink to="/about" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>About</p>
      </div>
      <div v-if="open" class="section-content">
        <div class="block-about-main-text">
          <span v-html="page?.aboutmaintext"></span>
        </div>
        <div class="block-about-focus-areas">
          <div class="block-title">
            <span v-html="page?.aboutfocusareastext"></span>
          </div>
          <div class="block-about-focus-areas-list">
            <ul class="nav nav-pills">
              <li v-for="(focusarea, index) in focusAreas" :key="index"
                :class="{ active: activeIndexFocusAreas === index }" class="nav-item"
                @click="setActiveFocusAreas(index)">
                <button class="nav-link" :class="{ 'button-active': activeIndexFocusAreas === index }">
                  {{ focusarea.focusareaname }}
                </button>
              </li>
            </ul>

            <div class="tab-content">
              <div v-for="(focusarea, index) in focusAreas" v-show="activeIndexFocusAreas === index" :key="index"
                class="tab-pane active" :class="{ 'tab-active': activeIndexFocusAreas === index }">
                <div class="focus-title">
                  <span v-html="focusarea.focusareabigtext"></span>
                </div>
                <div class="focus-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 focus-question">
                      <span v-html="focusarea.focusarealefttext"></span>
                    </div>
                    <div class="col-lg-9 col-12 focus-answer">
                      <span v-html="focusarea.focusarearighttext"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-strengths">
          <div class="block-title">
            <span v-html="page?.aboutstrengthstext"></span>
          </div>
          <div class="block-about-strengths-text">
            <span v-html="page?.aboutstrengthsbigtext"></span>
          </div>
          <div class="block-about-strengths-images">
            <div v-for="strengths in page?.aboutstrengthsslider" :key="strengths.id" class="strength-image">
              <img :src="strengths?.aboutstrengthssliderimage?.url" />
              <div class="caption">
                <span v-html="strengths.aboutstrengthsslidercaption"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-methodology">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <span v-html="page?.aboutmethodologytext"></span>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-about-methodology-list">
            <ul class="nav nav-pills mb-3" role="tablist">
              <li v-for="(methodology, index) in methodologySections" :key="index"
                :class="{ active: activeIndexMethodology === index }" class="nav-item"
                @click="setActiveMethodology(index)">
                <button class="nav-link" :class="{ 'button-active': activeIndexMethodology === index }">
                  {{ methodology.methodologyname }}
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div v-for="(methodology, index) in methodologySections" v-show="activeIndexMethodology === index"
                :key="index" class="tab-content-inner active"
                :class="{ 'tab-active': activeIndexMethodology === index }">
                <div class="methodology-title">
                  <span v-html="methodology.methodologyname"></span>
                </div>
                <div class="methodology-content">
                  <div v-for="methodologycontent in methodology.methodologysections" :key="methodologycontent.id" class="tab-pane">
                    <div class="row">
                      <div class="col-lg-3 col-12 methodology-question">
                        <span v-html="methodologycontent.methodologysectionslefttext"></span>
                      </div>
                      <div class="col-lg-9 col-12 methodology-answer">
                        <span v-html="methodologycontent.methodologysectionsrighttext"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-team">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <span v-html="page?.aboutteamtext"></span>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-about-team-list">
            <div v-for="(team, index) in teamGroups" :key="team.id" :class="{ active: activeIndexTeam === index }" class="block-team-group">
              <div class="group-title" :class="{ 'button-active': activeIndexTeam === index }"
                @click="setActiveTeam(index)">
                <span v-html="team.aboutteamgroupname"></span>
              </div>
              <div v-show="activeIndexTeam === index" class="group-people" :class="{ 'tab-active': activeIndexTeam === index }">
                <div class="row">
                  <div v-for="(teamperson, index) in team.aboutteamgrouppeople" :key="teamperson.id" class="col-lg-4 col-12 single-person" :class="{ active: isActiveBio[index] }" @click="toggleBio(index)">
                    <div class="single-person-inner">
                      <img :src="teamperson.aboutteamgrouppeopleimage?.url" />
                      <div class="person-info">
                        <div class="person-name">
                          <span v-html="teamperson.aboutteamgrouppeoplename"></span>
                        </div>
                        <div class="person-role">
                          <span v-html="teamperson.aboutteamgrouppeoplerole"></span>
                        </div>
                      </div>
                      <div class="person-biography">
                        <div class="person-name">
                          <span v-html="teamperson.aboutteamgrouppeoplename"></span>
                        </div>
                        <div class="person-role">
                          <span v-html="teamperson.aboutteamgrouppeoplerole"></span>
                        </div>
                        <div class="person-bio">
                          <span v-html="teamperson.aboutteamgrouppeoplebio"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-network">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <span v-html="page?.aboutnetworktext"></span>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-network-list">
            <p v-for="network in page?.aboutnetworklist" :key="network.id" class="">
              <a :href="network.aboutnetworklistlink">{{
                network.aboutnetworklistlinktext
                }}</a>
            </p>
          </div>
          <NuxtLink :to="`${page?.aboutnetworklink}`" class="cta">{{
            page?.aboutnetworklinktext
            }}</NuxtLink>
        </div>
        <AppFooter />
      </div>
    </div>
  </section>
</template>
