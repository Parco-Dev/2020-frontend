<script setup lang="ts">
import { casesQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(casesQuery)

const { data } = await useFetch<{ result: any }>(queryApi, queryParams)
const page = computed(() => data.value?.result)

const props = defineProps<{
  open: boolean
}>()

// Inject the closeMenuMobile method provided by the parent component
const closeMenuMobile = inject<() => void>('closeMenuMobile');

// Define a function to call closeMenuMobile when the button is clicked
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};

// Add a class to the body when the button is clicked
const toggleBodyClass = (className: string) => {
  const body = document.body;
  if (body) {
    if (body.classList.contains(className)) {
      body.classList.remove(className);
    } else {
      body.classList.add(className);
    }
  } else {
    console.warn('Body element is not available');
  }
};

// Ensure DOM is ready before toggling the class
onMounted(() => {
  console.log('DOM is ready, body available:', !!document.body);
});

// Attach the event to the button
const handleButtonClick = () => {
  toggleBodyClass('expand-cases-active');
  console.log("click");
};

</script>

<template>
  <section :class="{ open }" class="single-section section-cases">
    <div class="single-section-inner">
      <NuxtLink to="/cases" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Case studies</p>
      </div>
      <div class="section-content">
        <div class="cases-list">
          <div
            v-for="{ id, title, casethumbnail, casesubtitle } of page?.children"
            :key="id"
            class="single-case"
          >
            <NuxtLink :to="`/${id}`">
              <div class="case-image">
                <img :src="casethumbnail?.url" />
              </div>
              <div class="case-info">
                <div class="case-title">
                  <p>{{ title }}</p>
                </div>
                <div class="case-subtitle">
                  <p v-html="casesubtitle"></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="cases-view-all">
          <div class="cta expand-cases-button" @click="handleButtonClick">
            <span class="view-all">View all</span>
            <span class="view-less">View less</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
