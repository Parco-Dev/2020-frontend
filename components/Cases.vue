<script setup lang="ts">
const page = usePage().value;
const props = defineProps<{
  open: boolean,
}>()

</script>

<template>
    <section :class="{open}" class="single-section section-cases">
      <div class="single-section-inner">
        <NuxtLink to="/cases" class="section-header"></NuxtLink>
        <div class="section-title">
          <p>Cases</p>
        </div>
        <div v-if="open" class="section-content">
          <div class="cases-list">
            <div class="single-case">
              <NuxtLink to="/cases/jasmine-cove">
                <div class="case-image">
                  <img src="http://2020-backend.test/media/pages/cases/jasmine-cove/d8e7cb0881-1703232297/gruppo-di-maschere-150.jpg">
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
                  <img src="http://2020-backend.test/media/pages/cases/jasmine-cove/9ca984b770-1702830845/gruppo-di-maschere-138.jpg">
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
                  <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/ce7ebaa011-1703171913/gruppo-di-maschere-137.jpg">
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
            <div class="single-case">
              <NuxtLink to="/cases">
                <div class="case-image">
                  <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/df190ca522-1703171939/schermata-2023-12-17-alle-17.28.03.png">
                </div>
                <div class="case-info">
                  <div class="case-title">
                    <p>Yas beach</p>
                  </div>
                  <div class="case-subtitle">
                    <p>A beach lifestyle concept</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>