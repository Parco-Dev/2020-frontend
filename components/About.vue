<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { aboutQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(aboutQuery)

const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)
defineProps<{
  open?: boolean
}>()

/* Focus areas */
const activeIndexFocusAreas = ref(0)
const setActiveFocusAreas = (index: number) => {
  activeIndexFocusAreas.value = index
}
const focusAreas = computed(() => page.value?.aboutfocusareas || [])

/* Methodology */
const activeIndexMethodology = ref(0) 
const setActiveMethodology = (index: number) => {
  activeIndexMethodology.value = index
}
const methodologySections = computed(() => page.value?.aboutmethodology || [])



/* Close mobile navigation */
const closeMenuMobile = inject<() => void>('closeMenuMobile');
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};

/* Team person biographies toggle */
const isActiveBio = ref<boolean[]>([]);
const team = {
  aboutteamgrouppeople: [
    
  ]
};
team.aboutteamgrouppeople.forEach(() => {
  isActiveBio.value.push(false);
});
const toggleBio = (index: number) => {
  isActiveBio.value[index] = !isActiveBio.value[index];
};

/* Networks */
const firstThreeNetworks = computed(() => page.value?.aboutnetworklist.slice(0, 3) || [])
const remainingNetworks = computed(() => page.value?.aboutnetworklist.slice(3) || [])
const showAllNetworks = ref(false)
const toggleNetworksVisibility = () => {
  showAllNetworks.value = !showAllNetworks.value
}

/* TEAM */

const teamGroups = computed(() => page.value?.aboutteamgroups || []);
const activeIndexTeam = ref<number | null>(0); // Initially set to 0 or `null` if no group is initially visible
const groupPeopleRefs = ref<HTMLElement[]>([]);

function setActiveTeam(index: number) {
  if (activeIndexTeam.value === index) {
    // If the clicked group is already visible, remove the `visible` class
    groupPeopleRefs.value[activeIndexTeam.value]?.classList.remove('visible');
    activeIndexTeam.value = null; // Reset active index
  } else {
    // Remove 'visible' class from previously active group, if any
    if (activeIndexTeam.value !== null && groupPeopleRefs.value[activeIndexTeam.value]) {
      groupPeopleRefs.value[activeIndexTeam.value].classList.remove('visible');
    }

    // Update the active index to the clicked group
    activeIndexTeam.value = index;

    // Add 'visible' class to the new active group
    groupPeopleRefs.value[activeIndexTeam.value]?.classList.add('visible');
  }
}

// Ensure the initial group is visible on mount if `activeIndexTeam` is set
onMounted(() => {
  if (activeIndexTeam.value !== null && groupPeopleRefs.value[activeIndexTeam.value]) {
    groupPeopleRefs.value[activeIndexTeam.value].classList.add('visible');
  }
});


</script>

<template>
  <section :class="{ open }" class="single-section section-about">
    <div class="single-section-inner">
      <NuxtLink to="/about" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>About</p>
      </div>
      <div class="section-content">
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
              <!-- v-show="activeIndexFocusAreas === index" -->
              <div v-for="(focusarea, index) in focusAreas" :key="index" class="tab-pane active" :class="{ 'tab-active': activeIndexFocusAreas === index }">
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
            <div class="focus-areas-footer">
              <div v-for="(focusarea, index) in focusAreas" 
              :key="index"
              class="circle"
              :class="{
                circle: true,
                'active-circle': activeIndexFocusAreas === index,
                'inactive-circle': activeIndexFocusAreas !== index
              }"
              ></div>
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
              <div v-for="(methodology, index) in methodologySections" :key="index" class="tab-content-inner active"
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
            <div class="methodology-footer">
              <div v-for="(methodology, index) in methodologySections" 
              :key="index"
              class="circle"
              :class="{
                circle: true,
                'active-circle': activeIndexMethodology === index,
                'inactive-circle': activeIndexMethodology !== index
              }"
              ></div>
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
              <div class="group-title" :class="{ 'button-active': activeIndexTeam === index }" @click="setActiveTeam(index)">
                <span v-html="team.aboutteamgroupname"></span>
              </div>
              <div :ref="el => groupPeopleRefs[index] = el as HTMLElement" class="group-people" :class="{ 'tab-active': activeIndexTeam === index }">
                <div class="horizontal-scroll">
                  <div v-for="(teamperson, index) in team.aboutteamgrouppeople" :key="teamperson.id" class="single-person" :class="{ active: isActiveBio[index] }" @click="toggleBio(index)">
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

            <!--<p v-for="network in page?.aboutnetworklist" :key="network.id" class="">
              <a :href="network.aboutnetworklistlink">{{
                network.aboutnetworklistlinktext
                }}</a>
            </p>-->

            <p v-for="(network) in firstThreeNetworks" :key="network.id" class="">
              <a :href="network.aboutnetworklistlink" target="_blank">
                {{ network.aboutnetworklistlinktext }}
              </a>
            </p>

            <!-- Wrap the remaining items in a hidden div -->
            <div :class="['networks-hidden', { visible: showAllNetworks }]">
              <p v-for="network in remainingNetworks" :key="network.id" class="">
                <a :href="network.aboutnetworklistlink" target="_blank">
                  {{ network.aboutnetworklistlinktext }}
                </a>
              </p>
            </div>
            
          </div>
          <div :class="['show-all-networks', { visible: showAllNetworks }]" @click="toggleNetworksVisibility">
            <p>
              <span class="opened">Less</span>
              <span class="closed">More</span>
            </p>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  </section>
</template>
