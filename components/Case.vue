<script setup lang="ts">
const page = usePage().value;
const site = useSite();
console.log(page);
const props = defineProps<{
  open: boolean,
}>()

</script>

<template>
  
  <section :class="{open}" class="single-section section-case">
    <div class="single-section-inner">
      <NuxtLink to="/" class="section-header"></NuxtLink>
      <div class="site-header">
        <img src="https://davideg29.sg-host.com/2020/media/site/145c3ed371-1702824530/logo-2020.svg">
        <p>Case study</p>
      </div>
      <div class="section-content">
        <div class="case-title">
          <h1>Jasmine Cove</h1>
        </div>
        <div class="case-info">
          <div class="row">
            <div class="col-lg-6 col-12 case-subtitle">
              <p>An exclusive place to find yourself again.</p>
            </div>
            <div class="col-lg-2 col-12">
              <p>LOCATION<br>Yas Island, Abu Dhabi</p>
              <p>YEAR<br>2023</p>
            </div>
            <div class="col-lg-2 col-12">
              <p>CLIENT<br>Aldar Properties</p>
              <p>COLLABORATORS<br>Killa Design</p>
            </div>
            <div class="col-lg-2 col-12">
              <p>SERVICES<br>Place Positioning<br>Brand & Narrative Creation</p>
            </div>
          </div>
        </div>
        <div class="case-image">
          <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/9fadfa8d16-1702829972/aldar_reeman2_cgi26_rearyardarea-t4med_08.jpg">
        </div>
        <div class="case-content">
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title">
                <p>The task</p>
              </div>
              <div class="col-lg-9 col-12 column-content">
                <h3>20-20 Studio was tasked with creating the vision for Jasmine Cove, a new wellness development aimed towards the upper-level income audience.</h3>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-spacer"></div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title">
                <p>Our solution</p>
              </div>
              <div class="col-lg-9 col-12 column-content">
                <h3>We created a wellness-centered positioning for Jasmine Cove, offering a unique experience to its residents.</h3>
                <p>Our approach focused on promoting relaxation, rejuvenation, and recreation through a range of amenities and activities. The development includes coves for spirituality, exclusive private homes, and wellness experiences. It also features Jasmine Cove, a 6+ star hotel focused on wellness. The development makes the most of its context, including beautiful mangroves and beach views. The serene surroundings provide residents with a peaceful and tranquil environment to relax and recharge.</p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-images">
            <div class="single-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/9ca984b770-1702830845/gruppo-di-maschere-138.jpg">
              <div class="caption">
                <p>Ut enim ad minima veniam, quis nostrum</p>
              </div>
            </div>
            <div class="single-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/446714b892-1702830717/gruppo-di-maschere-137.jpg">
              <div class="caption">
                <p>Ut enim ad minima veniam, quis nostrum</p>
              </div>
            </div>
            <div class="single-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/3e531f5f13-1702830739/c6dt.jpg">
              <div class="caption">
                <p>Ut enim ad minima veniam, quis nostrum</p>
              </div>
            </div>
          </div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title"></div>
              <div class="col-lg-9 col-12 column-content">
                <p>Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-text-two-columns">
            <div class="row">
              <div class="col-lg-3 col-12"> </div>
              <div class="col-lg-9 col-12">
                <div class="row">
                  <div class="col-lg-6 col-12 single-column">
                    <p>Brand pillars</p>
                    <h3>EXCLUSIVITY</h3>
                    <p><i>One of a kind - space to be yourself</i></p>
                    <br>
                    <p>Jasmine Cove is a low-density development in Abu Dhabi, offering open spaces and restricted access for residents seeking privacy and tranquility.</p>
                  </div>
                  <div class="col-lg-6 col-12 single-column">
                    <p></p>
                    <h3>WELLNESS</h3>
                    <p><i>Relax, rejuvenate, recreate</i></p>
                    <br>
                    <p>Relax, rejuvenate and recreate at Jasmine Cove, where physical, emotional and spiritual wellness are integrated into every aspect of the development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="single-module module-spacer"></div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title"></div>
              <div class="col-lg-9 col-12 column-content">
                <p>LOREM IPSUM</p>
                <h3>An exclusive place to replenish your Mind, Body & Soul.</h3>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-image">
            <div class="row">
              <div class="col-lg-3 col-12"></div>
              <div class="col-lg-9 col-12">
                <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/c2c1dcc8b1-1702830455/bigger-plots.jpg">
                <div class="caption">
                  <p>Ut enim ad minima veniam, quis nostrum exercitationem</p>
                </div>
              </div>
            </div>
          </div>
          <div class="single-module module-image">
            <div class="row">
              <div class="col-lg-3 col-12"></div>
              <div class="col-lg-9 col-12">
                <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/cb6f35b007-1702830490/schermata-2023-12-17-alle-17.28.03.png">
                <div class="caption">
                  <p>Ut enim ad minima veniam, quis nostrum exercitationem</p>
                </div>
              </div>
            </div>
          </div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title"></div>
              <div class="col-lg-9 col-12 column-content">
                <ol>
                  <li>The Jasmine Causeway</li>
                  <li>JasmineCove Hotel & Resort</li>
                  <li>Mangroves Experience Pods</li>
                  <li>Mangrove Experience Trail</li>
                </ol>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title"></div>
              <div class="col-lg-9 col-12 column-content">
                <p>RECREATIONAL EXPERIENCES</p>
                <h3>Experience a variety of recreational activities at Jasmine Cove</h3>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-images">
            <div class="single-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/9ca984b770-1702830845/gruppo-di-maschere-138.jpg">
              <div class="caption">
                <p>Ut enim ad minima veniam, quis nostrum</p>
              </div>
            </div>
            <div class="single-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/446714b892-1702830717/gruppo-di-maschere-137.jpg">
              <div class="caption">
                <p>Ut enim ad minima veniam, quis nostrum</p>
              </div>
            </div>
            <div class="single-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/3e531f5f13-1702830739/c6dt.jpg">
              <div class="caption">
                <p>Ut enim ad minima veniam, quis nostrum</p>
              </div>
            </div>
          </div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title"></div>
              <div class="col-lg-9 col-12 column-content">
                <p>Our approach focused on promoting relaxation, rejuvenation, and recreation through a range of amenities and activities. The development includes coves for spirituality, exclusive private homes, and wellness experiences. It also features Jasmine Cove, a 6+ star hotel focused on wellness. The development makes the most of its context, including beautiful mangroves and beach views. The serene surroundings provide residents with a peaceful and tranquil environment to relax and recharge.</p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </div>
          </div>
          <div class="single-module module-spacer"></div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title">
                <p>OUTCOME</p>
              </div>
              <div class="col-lg-9 col-12 column-content">
                <h3>The Masterplan incorporates recreational experiences throughout. The mangroves trail is a unique destination for active recreation.</h3>
              </div>
            </div>
          </div>
          <div class="single-module module-double-image">
            <div class="row">
              <div class="col-lg-3 col-12"></div>
              <div class="col-lg-9 col-12">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/24e248cb57-1702830833/gruppo-di-maschere-149.jpg">
                    <div class="caption">
                      <p>Ut enim ad minima veniam, quis nostrum</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/cases/jasmine-cove/9ca984b770-1702830845/gruppo-di-maschere-138.jpg">
                    <div class="caption">
                      <p>Ut enim ad minima veniam, quis nostrum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="single-module module-text-one-column">
            <div class="row">
              <div class="col-lg-3 col-12 column-title"></div>
              <div class="col-lg-9 col-12 column-content">
                <p>Our approach focused on promoting relaxation, rejuvenation, and recreation through a range of amenities and activities. The development includes coves for spirituality, exclusive private homes, and wellness experiences. It also features Jasmine Cove, a 6+ star hotel focused on wellness. The development makes the most of its context, including beautiful mangroves and beach views. The serene surroundings provide residents with a peaceful and tranquil environment to relax and recharge.</p>
              </div>
            </div>
          </div>
          <div class="single-module module-spacer"></div>
        </div>
      </div>

      <AppFooter/>

    </div>
  </section>

</template>
