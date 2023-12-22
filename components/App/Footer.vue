<script setup lang="ts">
const site = useSite()

</script>

<template>
  <footer class="site-footer">
    <div class="top-footer">
      <div class="footer-logo">
        <img src="https://davideg29.sg-host.com/2020/media/site/3a37f09b57-1703171845/logo-2020.svg">
      </div>
      <div class="footer-menu">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/cases">Case studies</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <div class="footer-social">
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>
    </div>
    <div class="bottom-footer">
      <div class="row">
        <div class="col-lg-2 col-12">
          <p>©2023 All rights reserved</p>
          <p>20-20 studio</p>
        </div>
        <div class="col-lg-7 col-12">
          <p>Los Angeles Ste 2020. 1019 E 4th Pl, CA 90013</p>
          <p>Dubai Ste 2020. One Central 8th and 9th Floor - DWTC - Trade Centre 2, UAE</p>
        </div>
        <div class="col-lg-3 col-12">
          <p>EMAIL <a href="mailto:studio@20-20.studio">studio@20-20.studio</a></p>
          <p><a href="#">Privacy cookies</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
</style>