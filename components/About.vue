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

/* Networks */
const firstThreeNetworks = computed(() => page.value?.aboutnetworklist.slice(0, 3) || [])
const remainingNetworks = computed(() => page.value?.aboutnetworklist.slice(3) || [])
const showAllNetworks = ref(false)
const toggleNetworksVisibility = () => {
  showAllNetworks.value = !showAllNetworks.value
}

/* TEAM */

const teamGroups = computed(() => page.value?.aboutteamgroups || []);

// Reactive variables
const activeIndexTeam = ref<number | null>(null);
const groupPeopleRefs = ref<HTMLElement[]>([]);
const activePersons = ref<Record<number, number | null>>({});

// Function to set the active team
function setActiveTeam(index: number) {
  activeIndexTeam.value = activeIndexTeam.value === index ? null : index;
}

function handleTitleClick(index: number, event: MouseEvent) {
  event.stopPropagation(); // Stop the event from reaching the document level
  setActiveTeam(index);
}

// Function to handle clicks outside
function handleClickOutside(event: MouseEvent) {
  groupPeopleRefs.value.forEach((group, index) => {
    const horizontalScroll = group.querySelector('.horizontal-scroll .single-person');
    
    if (horizontalScroll && !horizontalScroll.contains(event.target as Node)) {
      if (group.classList.contains('tab-active')) {
        group.classList.remove('tab-active');
        if (activeIndexTeam.value === index) {
          activeIndexTeam.value = null;
        }
      }
    }
  });
}

// Function to handle ESC key press
function handleEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    groupPeopleRefs.value.forEach((group, index) => {
      if (group.classList.contains('tab-active')) {
        group.classList.remove('tab-active');
        if (activeIndexTeam.value === index) {
          activeIndexTeam.value = null;
        }
      }
    });
  }
}

// Add event listener on mount and clean up on unmount
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscapeKey);
});

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



const activeIndex = ref<number | null>(null)
function toggleCollapse(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}

</script>

<template>
  <section :class="{ open }" class="single-section section-about">
    <div class="single-section-inner">
      <NuxtLink to="/about" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>About</p>
      </div>
      <div class="section-content">
        <div class="block-about-text">
          <div class="about-text-main">
            <p v-html="page?.aboutmaintext"></p>
          </div>
          <div class="about-text">
            <p v-html="page?.abouttext"></p>
          </div>
        </div>
        <div class="block-approach">
          <div class="block-approach-title">
            <p v-html="page?.aboutapproachtitle"></p>
          </div>
          <div class="block-approach-text">
            <p v-html="page?.aboutapproachtext"></p>
          </div>
          <div class="block-approach-inner">
            <div class="collapses-container">
              <div
                v-for="(approach, index) in page?.aboutapproach"
                :key="index"
                class="single-collapse"
                :class="{ opencollapse: activeIndex === index }"
              >
                <div class="collapse-link">
                  <a href="#" @click.prevent="toggleCollapse(index)">
                    {{ approach.aboutapproachword }}
                  </a>
                </div>
                <div
                  class="collapse-content"
                  :class="{ open: activeIndex === index }"
                >
                  <div class="approach-text">
                    <p v-html="approach.aboutapproachtexttop"></p>
                  </div>
                  <div class="approach-icon">
                    <img :src="approach.aboutapproachicon?.url" />
                  </div>
                  <div class="approach-text">
                    <p v-html="approach.aboutapproachtextbottom"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-team">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="block-team-title">
                <p v-html="page?.aboutteamtitle"></p>
              </div>
              <div class="block-team-text">
                <p v-html="page?.aboutteamtext"></p>
              </div>
            </div>
            <div class="col-lg-6 col-12"></div>
          </div>
          <div class="block-team-inner">
            
            <div
              v-for="(person, personIndex) in page?.aboutteampeople"
              :key="person.id"
              class="single-person"
              :class="{ active: isActiveBio[personIndex] }"
              @click="toggleBio(personIndex)"
            >
              <div class="single-person-inner">
                <img :src="person.aboutteampeopleimage?.url" />
                <div class="person-info">
                  <div class="person-name">
                    <p v-html="person.aboutteampeoplename"></p>
                  </div>
                  <div class="person-role">
                    <p v-html="person.aboutteampeoplerole"></p>
                  </div>
                </div>
                <div class="person-biography">
                  <div class="person-name">
                    <p v-html="person.aboutteampeoplename"></p>
                  </div>
                  <div class="person-contact">
                    <p v-html="person.aboutteampeoplecontact"></p>
                  </div>
                  <div class="person-bio">
                    <p v-html="person.aboutteampeoplebio"></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
       
      </div>
      
    </div>
    <!--
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
            <div
              v-for="(team, index) in teamGroups"
              :key="team.id"
              :class="{ active: activeIndexTeam === index }"
              class="block-team-group"
            >
              <div
                class="group-title"
                :class="{ 'button-active': activeIndexTeam === index }"
                @click="handleTitleClick(index, $event)"
              >
                <span v-html="team.aboutteamgroupname"></span>
              </div>

              <div
                :ref="el => groupPeopleRefs[index] = el as HTMLElement"
                class="group-people"
                :class="{ 'tab-active': activeIndexTeam === index }"
              >
                <div class="horizontal-scroll">
                  <div
                    v-for="(teamperson, personIndex) in team.aboutteamgrouppeople"
                    :key="teamperson.id"
                    class="single-person"
                    :class="{ active: isActiveBio[personIndex] }"
                    @click="toggleBio(personIndex)"
                  >
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

            <p v-for="(network) in firstThreeNetworks" :key="network.id" class="">
              <a :href="network.aboutnetworklistlink" target="_blank">
                {{ network.aboutnetworklistlinktext }}
              </a>
            </p>

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
    -->
  </section>
</template>
