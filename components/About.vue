<script setup lang="ts">
const page = usePage().value;
const props = defineProps<{
  open?: boolean,
}>()

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
  console.log("tab 1");
}
const tabs2 = () => {
  if (tabvisible2.value == true) {
    tabvisible2.value = false;
  } else {
    tabvisible2.value = true;
  }
  console.log("tab 2");
}
const tabs3 = () => {
  if (tabvisible3.value == true) {
    tabvisible3.value = false;
  } else {
    tabvisible3.value = true;
  }
  console.log("tab 3"); 
}
</script>

<template>
  <section :class="{open}" class="single-section section-about">
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
              <li v-for="focusareas in page?.homelatestfocusareas" :key="focusareas.id" class="nav-item">
                <button class="nav-link" @click="tabs1()">{{ page?.focusareaname }}</button>
              </li>
            </ul>
            <div class="tab-content">
              <div v-for="focusareas in page?.homelatestfocusareas" :key="focusareas.id" class="tab-pane">
                <div v-if="tabvisible1" class="">
                  <div class="focus-title">
                    <p v-html="page?.focusareabigtext"></p>
                  </div>
                  <div class="focus-content">
                    <div class="row">
                      <div class="col-lg-3 col-12 focus-question">
                        <p v-html="page?.focusarealefttext"></p>
                      </div>
                      <div class="col-lg-9 col-12 focus-answer">
                        <p v-html="page?.focusarearighttext"></p>
                      </div>
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
            <div v-for="strengths in page?.aboutstrengthsslider" :key="strengths.id" class="strength-image">
              <img :src="strengths.aboutstrengthssliderimage?.url" />
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
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li v-for="methodology in page?.aboutmethodology" :key="methodology.id" class="nav-item">
                <button class="nav-link" @click="tabs1()">{{ methodology.methodologyname }}</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div v-for="methodology in page?.aboutmethodology" :key="methodology.id" class="tab-pane">
                <div class="methodology-title">
                  <p v-html="page?.methodologyname"></p>
                </div>
                <div class="methodology-content">
                  <div v-for="methodologycontent in methodology.methodologysections" :key="methodologycontent.id" class="tab-pane">
                    <div class="row">
                      <div class="col-lg-3 col-12 methodology-question">
                        <p v-html="methodologycontent.methodologysectionslefttext"></p>
                      </div>
                      <div class="col-lg-9 col-12 methodology-answer">
                        <p v-html="methodologycontent.methodologysectionsrighttext"></p>
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
            <div v-for="team in page?.aboutteamgroups" :key="team.id" class="block-team-group">
              <div class="group-title" @click="collapse1()">
                <p v-html="page?.aboutteamgroupname"></p>
              </div>
              <div v-if="collapsevisible1" class="group-people">
                <div class="row">
                  <div v-for="teamperson in team.aboutteamgrouppeople" :key="teamperson.id" class="col-lg-4 col-12 single-person">
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
            <p v-for="network in page?.aboutnetworklist" :key="network.id" class="">
              <a :href="network.aboutnetworklistlink?.url">{{ network.aboutnetworklistlinktext }}</a>
            </p>
          </div>
          <NuxtLink :to="`${page?.aboutnetworklink}`">{{ page?.aboutnetworklinktext }}</NuxtLink>
        </div>
        <AppFooter/>
      </div>
    </div>
  </section>
</template>