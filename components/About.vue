<script setup lang="ts">
const page = usePage().value
const props = defineProps<{
  open?: boolean
}>()


/*
const collapsevisible1 = ref(true);
const collapsevisible2 = ref(false);
const collapsevisible3 = ref(false);
const collapse1 = () => {
  if (collapsevisible1.value == true) {
    collapsevisible1.value = false;
  } else {
    collapsevisible1.value = true;
  }
}
const collapse2 = () => {
  if (collapsevisible2.value == true) {
    collapsevisible2.value = false;
  } else {
    collapsevisible2.value = true;
  }
}
const collapse3 = () => {
  if (collapsevisible3.value == true) {
    collapsevisible3.value = false;
  } else {
    collapsevisible3.value = true;
  }
}

const tabvisible1 = ref(false);
const tabvisible2 = ref(false);
const tabvisible3 = ref(false);
const tabs1 = () => {
  if (tabvisible1.value == true) {
    tabvisible1.value = false;
  } else {
    tabvisible1.value = true;
  }
  // console.log("tab 1");
}
const tabs2 = () => {
  if (tabvisible2.value == true) {
    tabvisible2.value = false;
  } else {
    tabvisible2.value = true;
  }
  // console.log("tab 2");
}
const tabs3 = () => {
  if (tabvisible3.value == true) {
    tabvisible3.value = false;
  } else {
    tabvisible3.value = true;
  }
  // console.log("tab 3"); 
}
  */

// Assuming you have a `page` object available in your component
const activeIndexFocusAreas = ref(0) // Track the active focus area index

// Function to set the active focus area index
const setActiveFocusAreas = (index: number) => {
  activeIndexFocusAreas.value = index
}

// Get the focus areas from the page object
const focusAreas = computed(() => page?.aboutfocusareas || [])

// Assuming you have a `page` object available in your component
const activeIndexMethodology = ref(0) // Track the active focus area index

// Function to set the active focus area index
const setActiveMethodology = (index: number) => {
  activeIndexMethodology.value = index
}

// Get the focus areas from the page object
const methodologySections = computed(() => page?.aboutmethodology || [])

// Assuming you have a `page` object available in your component
const activeIndexTeam = ref(0) // Track the active focus area index

// Function to set the active focus area index
const setActiveTeam = (index: number) => {
  activeIndexTeam.value = index
}

// Get the focus areas from the page object
const teamGroups = computed(() => page?.aboutteamgroups || [])
</script>

<template>
  <section :class="{ open }" class="single-section section-about">
    <div class="single-section-inner">
      <NuxtLink to="/about" class="section-header"></NuxtLink>
      <div class="section-title">
        <p>About</p>
      </div>
      <div v-if="open" class="section-content">
        <div class="block-about-main-text">
          <p v-html="page?.aboutmaintext"></p>
        </div>
        <div class="block-about-focus-areas">
          <div class="block-title">
            <p v-html="page?.aboutfocusareastext"></p>
          </div>
          <div class="block-about-focus-areas-list">
            <ul class="nav nav-pills">
              <li
                v-for="(focusarea, index) in focusAreas"
                :key="index"
                :class="{ active: activeIndexFocusAreas === index }"
                class="nav-item"
                @click="setActiveFocusAreas(index)"
              >
                <button
                  class="nav-link"
                  :class="{ 'button-active': activeIndexFocusAreas === index }"
                >
                  {{ focusarea.focusareaname }}
                </button>
              </li>
            </ul>

            <div class="tab-content">
              <div
                v-for="(focusarea, index) in focusAreas"
                v-show="activeIndexFocusAreas === index"
                :key="index"
                class="tab-pane active"
                :class="{ 'tab-active': activeIndexFocusAreas === index }"
              >
                <div class="focus-title">
                  <p v-html="focusarea.focusareabigtext"></p>
                </div>
                <div class="focus-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 focus-question">
                      <p v-html="focusarea.focusarealefttext"></p>
                    </div>
                    <div class="col-lg-9 col-12 focus-answer">
                      <p v-html="focusarea.focusarearighttext"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-strengths">
          <div class="block-title">
            <p v-html="page?.aboutstrengthstext"></p>
          </div>
          <div class="block-about-strengths-text">
            <p v-html="page?.aboutstrengthsbigtext"></p>
          </div>
          <div class="block-about-strengths-images">
            <div
              v-for="strengths in page?.aboutstrengthsslider"
              :key="strengths.id"
              class="strength-image"
            >
              <img :src="strengths?.aboutstrengthssliderimage?.url" />
              <div class="caption">
                <p v-html="strengths.aboutstrengthsslidercaption"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-methodology">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <p v-html="page?.aboutmethodologytext"></p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-about-methodology-list">
            <ul class="nav nav-pills mb-3" role="tablist">
              <li
                v-for="(methodology, index) in methodologySections"
                :key="index"
                :class="{ active: activeIndexMethodology === index }"
                class="nav-item"
                @click="setActiveMethodology(index)"
              >
                <button
                  class="nav-link"
                  :class="{ 'button-active': activeIndexMethodology === index }"
                >
                  {{ methodology.methodologyname }}
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div
                v-for="(methodology, index) in methodologySections"
                v-show="activeIndexMethodology === index"
                :key="index"
                class="tab-content-inner active"
                :class="{ 'tab-active': activeIndexMethodology === index }"
              >
                <div class="methodology-title">
                  <p v-html="methodology.methodologyname"></p>
                </div>
                <div class="methodology-content">
                  <div
                    v-for="methodologycontent in methodology.methodologysections"
                    :key="methodologycontent.id"
                    class="tab-pane"
                  >
                    <div class="row">
                      <div class="col-lg-3 col-12 methodology-question">
                        <p
                          v-html="
                            methodologycontent.methodologysectionslefttext
                          "
                        ></p>
                      </div>
                      <div class="col-lg-9 col-12 methodology-answer">
                        <p
                          v-html="
                            methodologycontent.methodologysectionsrighttext
                          "
                        ></p>
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
                <p v-html="page?.aboutteamtext"></p>
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
                @click="setActiveTeam(index)"
              >
                <p v-html="team.aboutteamgroupname"></p>
              </div>
              <div
                v-show="activeIndexTeam === index"
                class="group-people"
                :class="{ 'tab-active': activeIndexTeam === index }"
              >
                <div class="row">
                  <div
                    v-for="teamperson in team.aboutteamgrouppeople"
                    :key="teamperson.id"
                    class="col-lg-4 col-12 single-person"
                  >
                    <img :src="teamperson.aboutteamgrouppeopleimage?.url" />
                    <div class="person-info">
                      <div class="person-name">
                        <p v-html="teamperson.aboutteamgrouppeoplename"></p>
                      </div>
                      <div class="person-role">
                        <p v-html="teamperson.aboutteamgrouppeoplerole"></p>
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
                <p v-html="page?.aboutnetworktext"></p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-network-list">
            <p
              v-for="network in page?.aboutnetworklist"
              :key="network.id"
              class=""
            >
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
