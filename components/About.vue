<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ open?: boolean }>()

const page = await useAboutPage();

/* Focus areas */
// const activeIndexFocusAreas = ref(0)
// const setActiveFocusAreas = (index: number) => {
//   activeIndexFocusAreas.value = index
// }
// const focusAreas = computed(() => page.value?.aboutfocusareas || [])

/* Methodology */
// const activeIndexMethodology = ref(0) 
// const setActiveMethodology = (index: number) => {
//   activeIndexMethodology.value = index
// }
// const methodologySections = computed(() => page.value?.aboutmethodology || [])



/* Close mobile navigation */
const closeMenuMobile = inject<() => void>('closeMenuMobile');
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};

/* Networks */
// const firstThreeNetworks = computed(() => page.value?.aboutnetworklist.slice(0, 3) || [])
// const remainingNetworks = computed(() => page.value?.aboutnetworklist.slice(3) || [])
// const showAllNetworks = ref(false)
// const toggleNetworksVisibility = () => {
//   showAllNetworks.value = !showAllNetworks.value
// }

/* TEAM */

// const teamGroups = computed(() => page.value?.aboutteamgroups || []);

// Reactive variables
const activeIndexTeam = ref<number | null>(null);
const groupPeopleRefs = ref<HTMLElement[]>([]);
// const activePersons = ref<Record<number, number | null>>({});

// Function to set the active team
// function setActiveTeam(index: number) {
//   activeIndexTeam.value = activeIndexTeam.value === index ? null : index;
// }

// function handleTitleClick(index: number, event: MouseEvent) {
//   event.stopPropagation(); // Stop the event from reaching the document level
//   setActiveTeam(index);
// }

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
        <ClientOnly>

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

        </ClientOnly>
        <AppFooter/>
      </div>
    </div>
   
  </section>
</template>
