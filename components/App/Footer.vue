<script setup lang="ts">
const site = useSite()
</script>

<template>
  <footer class="site-footer">
    <div class="top-footer">
      <div class="footer-logo">
        <img
          src="https://davideg29.sg-host.com/2020/media/site/3a37f09b57-1703171845/logo-2020.svg"
        />
      </div>
      <div class="footer-menu">
        <NuxtLink to="/works">Work</NuxtLink>
        <NuxtLink to="/clients">Clients</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <div class="footer-social">
        <a v-for="(socialItem, index) in site?.social" :key="index" :href="socialItem.url" target="_blank" rel="noopener noreferrer">{{ socialItem.name }}</a>
      </div>
    </div>
    <div class="bottom-footer bottom-footer-desktop">
      <div class="row">
        <div class="col-lg-2 col-12">
          <p class="copyright" v-html="site?.copyright"></p>
          <p v-html="site?.sitetitle"></p>
        </div>
        <div class="col-lg-7 col-12">
          <div v-html="site?.address"></div>
          <!-- <p><a href="https://www.google.com/maps/search/LOS+ANGELES+Ste+2020.+1019+E+4th+Pl,+CA+90013/@34.0420548,-118.2358482,981m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Los Angeles Ste 2020. 1019 E 4th Pl, CA 90013</a></p>
          <p><a href="https://www.google.com/maps/place/WeWork+-+Office+Space+%26+Coworking/@25.219781,55.2830169,1071m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f432d6a37d4bf:0x315c77c169e5a12d!8m2!3d25.219781!4d55.2855918!16s%2Fg%2F11j34kpxzd?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Dubai Ste 2020. One Central 8th and 9th Floor - DWTC - Trade Centre 2, UAE</a></p> -->
        </div>
        <div class="col-lg-3 col-12">
          <p v-html="site?.footeremail"></p>
          <p v-if="site?.privacycookies" v-html="site?.privacycookies"></p>
        </div>
      </div>
    </div>
    <div class="bottom-footer bottom-footer-mobile">
      <div class="row"> 
        <div class="col-lg-12 col-12 bottom-footer-row">
          <div v-html="site?.address"></div>
          <!--<p><a href="https://www.google.com/maps/search/LOS+ANGELES+Ste+2020.+1019+E+4th+Pl,+CA+90013/@34.0420548,-118.2358482,981m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Los Angeles Ste 2020. 1019 E 4th Pl, CA 90013</a></p>
          <p><a href="https://www.google.com/maps/place/WeWork+-+Office+Space+%26+Coworking/@25.219781,55.2830169,1071m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f432d6a37d4bf:0x315c77c169e5a12d!8m2!3d25.219781!4d55.2855918!16s%2Fg%2F11j34kpxzd?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Dubai Ste 2020. One Central 8th and 9th Floor - DWTC - Trade Centre 2, UAE</a></p>-->
        </div>
        <div class="col-lg-6 col-6">
          <p class="copyright" v-html="site?.copyright"></p>
          <p v-html="site?.sitetitle"></p>
          <!--<p v-html="site?.sitetitle"></p>-->
        </div>
        <div class="col-lg-6 col-6">
          <!--<p>EMAIL <a href="mailto:studio@20-20.studio">studio@20-20.studio</a></p>--> <!-- <span v-html="site?.footeremail"></span> -->
          <p v-html="site?.footeremail"></p>
          <p v-if="site?.privacycookies" v-html="site?.privacycookies"></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
