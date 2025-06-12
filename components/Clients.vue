<script setup lang="ts">

defineProps<{ open: boolean }>()

const page = await useClientsPage();

// Inject the closeMenuMobile method provided by the parent component
const closeMenuMobile = inject<() => void>('closeMenuMobile');

// Define a function to call closeMenuMobile when the button is clicked
const closeMenu = () => {
  if (closeMenuMobile) {
    closeMenuMobile();
  }
};

</script>

<template>
  <section :class="{ open }" class="single-section section-clients">
    <div class="single-section-inner">
      <NuxtLink to="/clients" class="section-header" @click="closeMenu"></NuxtLink>
      <div class="section-title">
        <p>Clients</p>
      </div>
      <div class="section-content">
        <ClientOnly>

          <div class="block-clients-text">
            <client-only>
              <p v-html="page?.clientstext"></p>
            </client-only>
          </div>
          <div class="clients-logos">
            <div
              v-for="client in page?.clients"
              :key="client.id"
              class="single-client"
            >
              <a :href="client.clientslink">
                <img :src="client.clientslogo?.url" />
              </a>
            </div>
          </div>

        </ClientOnly>
        <AppFooter/>
      </div>
    </div>

  </section>
</template>
