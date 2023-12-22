<script setup lang="ts">
const page = usePage().value;
const site = useSite();
console.log(page);
const props = defineProps<{
  open: boolean,
}>()

</script>

<template>
  
    <section :class="{open}" class="single-section section-home">
      <div class="single-section-inner">
        <NuxtLink to="/" class="section-header"></NuxtLink>
        <div class="site-header">
          <img src="https://davideg29.sg-host.com/2020/media/site/145c3ed371-1702824530/logo-2020.svg">
          <p>Our studio is an experiential strategy company based between Melbourne, Los Angeles and London. </p>
        </div>
        <div class="section-content">
           
          <div class="block-about">
            <div class="about-text">
              <div class="row">
                <div class="col-lg-7 col-12">
                  <p>We generate ideas for places that create long-lasting value and recognition.</p>
                  <a href="#" class="button">About us</a>
                </div>
                <div class="col-lg-5 col-12"></div>
              </div>
            </div>
            <img src="https://davideg29.sg-host.com/2020/media/pages/home/02d9fc5d33-1702825771/gruppo-di-maschere-118.jpg" />
          </div>

          <div class="block-experience">
            <div class="experience-circle"></div>
            <div class="block-main-text">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <p>EXPERIENCE VISION<br>Through the 3 pillars of Culture, Place & Technology we bring clarity and creativity to the most ambitious aspirations.</p>
                </div>
                <div class="col-lg-6 col-12"></div>
              </div>
            </div>
            <div class="experience-section">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="experience-word">
                    <p>CULTURE</p>
                  </div>
                  <div class="experience-text">
                    <p>Emotional and brand resonance & ethnographic cultural analysis.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12"></div>
              </div>
            </div>
            <div class="experience-section">
              <div class="row">
                <div class="col-lg-6 col-12"></div>
                <div class="col-lg-6 col-12">
                  <div class="experience-word">
                    <p>PLACE</p>
                  </div>
                  <div class="experience-text">
                    <p>Understanding of spatial parameters for place & space specific solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience-section">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="experience-word">
                    <p>TECHNOLOGY</p>
                  </div>
                  <div class="experience-text">
                    <p>Innovation & tech analysis to understand future digital trends affecting lifestyle.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12"></div>
              </div>
            </div>
          </div>

          <div class="block-latest-cases">
            <div class="block-main-text">
              <p>LATEST CASE STUDIES</p>
            </div>
            <div class="block-latest-cases-list">
              <div class="single-case">
                <NuxtLink to="/cases/jasmine-cover">
                  <div class="case-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/ce7ebaa011-1703171913/gruppo-di-maschere-137.jpg">
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
                    <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/90e8de4098-1703171960/gruppo-di-maschere-149.jpg">
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
            </div>
            <a href="#" class="button">View all</a>
          </div>

          <div class="block-outcomes">
            <div class="block-main-text">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <p>OUR OUTCOMES<br>Our outcomes are centered around creating strong, compelling visions and narratives that engage audiences, prepare for the future and ultimately enhance value.</p>
                </div>
                <div class="col-lg-6 col-12"></div>
              </div>
            </div>
            <div class="block-outcomes-list">
              <p>Enhance value</p>
              <p>ENGAGing STAKeHOLDERS</p>
              <p>CREATE THE FUTURE</p>
            </div>
            <a href="#" class="button">Read more</a>
          </div>

          <div class="block-clients">
            <div class="block-title">
              <p>OUR CLIENTS</p>
            </div>
            <div class="block-main-text">
              <div class="row">
                <div class="col-lg-8 col-12">
                  <p>The thinkers and companies we’re changing  the status quo with.</p>
                </div>
                <div class="col-lg-4 col-12"></div>
              </div>
            </div>
            <div class="block-clients-list">
              <div class="row">
                <div class="col-lg-4 col-12 single-client">
                  <div class="client-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/home/8e4c6298d7-1703150245/wdw.svg">
                  </div>
                  <div class="client-name">
                    <p>University of oxford</p>
                  </div>
                  <div class="client-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut animi adisciplit est. </p>
                  </div>
                </div>
                <div class="col-lg-4 col-12 single-client">
                  <div class="client-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/home/8e4c6298d7-1703150245/wdw.svg">
                  </div>
                  <div class="client-name">
                    <p>Pax world</p>
                  </div>
                  <div class="client-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut animi adisciplit est. </p>
                  </div>
                </div>
                <div class="col-lg-4 col-12 single-client">
                  <div class="client-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/home/8e4c6298d7-1703150245/wdw.svg">
                  </div>
                  <div class="client-name">
                    <p>MGM Resorts</p>
                  </div>
                  <div class="client-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut animi adisciplit est. </p>
                  </div>
                </div>
                <div class="col-lg-4 col-12 single-client">
                  <div class="client-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/home/8e4c6298d7-1703150245/wdw.svg">
                  </div>
                  <div class="client-name">
                    <p>Walt disney world</p>
                  </div>
                  <div class="client-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut animi adisciplit est. </p>
                  </div>
                </div>
                <div class="col-lg-4 col-12 single-client">
                  <div class="client-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/home/8e4c6298d7-1703150245/wdw.svg">
                  </div>
                  <div class="client-name">
                    <p>University of oxford</p>
                  </div>
                  <div class="client-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut animi adisciplit est. </p>
                  </div>
                </div>
                <div class="col-lg-4 col-12 single-client">
                  <div class="client-image">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/home/8e4c6298d7-1703150245/wdw.svg">
                  </div>
                  <div class="client-name">
                    <p>Pax world</p>
                  </div>
                  <div class="client-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut animi adisciplit est. </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="button">View all</a>
          </div>

          <div class="block-team">
            <div class="block-main-text">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <p>THE TEAM<br>We are a group of strategists and designers whose competencies range from research and analysis to visioning and implementing. We work across disciplines to ensure the right outputs to achieve the best outcome.</p>
                </div>
                <div class="col-lg-6 col-12"></div>
              </div>
            </div>
            <div class="block-team-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/home/d7dd564b9a-1702826055/gruppo-di-maschere-140.jpg">
            </div>
            <a href="#" class="button">Read more</a>
          </div>

          <div class="block-newsletter">
            <div class="block-title">
              <p>Newsletter</p>
            </div>
          </div>

          <AppFooter/>

        </div>

      </div>
    </section>

</template>
