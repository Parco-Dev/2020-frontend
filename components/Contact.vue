<script setup lang="ts">
const page = usePage().value;
const props = defineProps<{
  open: boolean,
}>()

</script>

<template>
    <section :class="{open}" class="single-section section-contact">
      <div class="single-section-inner">
        <NuxtLink to="/contact" class="section-header"></NuxtLink>
        <div class="section-title">
          <p>Contacts</p>
        </div>
        <div v-if="open" class="section-content">
          <div class="block-address">
            <div class="block-title">
              <p>Los Angeles</p>
            </div>
            <div class="block-content">
              <p>Ste 2020. 1019 E 4th Pl, CA 90013</p>
            </div>
          </div>
          <div class="block-address">
            <div class="block-title">
              <p>Dubai</p>
            </div>
            <div class="block-content">
              <p>Ste 2020. One Central 8th and 9th Floor - DWTC - Trade Centre 2, UAE</p>
            </div>
          </div>
          <div class="block-email">
            <div class="block-title">
              <p>Email</p>
            </div>
            <div class="block-content">
              <a href="mailto:info@20-20.studio">info@20-20.studio</a>
            </div>
          </div>
          <div class="block-email">
            <div class="block-title">
              <p>Social</p>
            </div>
            <div class="block-content">
              <a href="#" target="_blank">Instagram</a>
              <a href="#" target="_blank">Facebook</a>
              <a href="#" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
