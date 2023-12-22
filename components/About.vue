<script setup lang="ts">
const page = usePage().value;
const props = defineProps<{
  open?: boolean,
}>()

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
          <p>our Studio is an experience strategy agency</p>
        </div>
        <div class="block-about-focus-areas">
          <div class="block-title">
            <p>Our focus areas</p>
          </div>
          <div class="block-about-focus-areas-list">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-culture-tab" data-bs-toggle="pill" data-bs-target="#pills-culture" type="button" role="tab" aria-controls="pills-culture" aria-selected="true">Culture</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-place-tab" data-bs-toggle="pill" data-bs-target="#pills-place" type="button" role="tab" aria-controls="pills-place" aria-selected="false">Place</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="false">Technology</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-culture" role="tabpanel" aria-labelledby="pills-culture-tab" tabindex="0">
                <div class="focus-title">
                  <p>POSITIONING STRATEGY</p>
                </div>
                <div class="focus-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 focus-question">
                      <p>How can we create memorable places where people feel welcome?</p>
                    </div>
                    <div class="col-lg-9 col-12 focus-answer">
                      <p>We create “Experience Masterplans” – space sequences and ensure all touch-points align with the narrative and business case.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-place" role="tabpanel" aria-labelledby="pills-place-tab" tabindex="0">
                <div class="focus-title">
                  <p>POSITIONING PLACE</p>
                </div>
                <div class="focus-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 focus-question">
                      <p>How can we create memorable places where people feel welcome?</p>
                    </div>
                    <div class="col-lg-9 col-12 focus-answer">
                      <p>We create “Experience Masterplans” – space sequences and ensure all touch-points align with the narrative and business case.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab" tabindex="0">
                <div class="focus-title">
                  <p>POSITIONING TECHNOLOGY</p>
                </div>
                <div class="focus-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 focus-question">
                      <p>How can we create memorable places where people feel welcome?</p>
                    </div>
                    <div class="col-lg-9 col-12 focus-answer">
                      <p>We create “Experience Masterplans” – space sequences and ensure all touch-points align with the narrative and business case.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-strengths">
          <div class="block-title">
            <p>Our strengths</p>
          </div>
          <div class="block-about-strengths-text">
            <p>We craft narrative frameworks to guide a project’s development.</p>
          </div>
          <div class="block-about-strengths-images">
            <div class="strength-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/about/09ebc975f3-1702827506/cent-pak.jpg">
              <div class="caption">
                <p>Sed do eiusmod tempor incididunt ut.</p>
              </div>
            </div>
            <div class="strength-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/about/ad756da611-1702827519/contemporary-hotel_040616_06.jpg">
              <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div class="strength-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/about/c8f3419cfb-1702827533/03b-first-sight.jpg">
              <div class="caption">
                <p>Sed do eiusmod tempor incididunt ut.</p>
              </div>
            </div>
            <div class="strength-image">
              <img src="https://davideg29.sg-host.com/2020/media/pages/about/ad756da611-1702827519/contemporary-hotel_040616_06.jpg">
              <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-methodology">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <p>OUR METHODOLOGY<br>Our process is structured in 3 phases: Discovery, Vision and Implement. We define issues, create strategies and then help implement solutions for a holistic outcome</p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-about-methodology-list">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-discovery-tab" data-bs-toggle="pill" data-bs-target="#pills-discovery" type="button" role="tab" aria-controls="pills-discovery" aria-selected="true">Discovery</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-visioning-tab" data-bs-toggle="pill" data-bs-target="#pills-visioning" type="button" role="tab" aria-controls="pills-visioning" aria-selected="false">Visioning</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-implementation-tab" data-bs-toggle="pill" data-bs-target="#pills-implementation" type="button" role="tab" aria-controls="pills-implementation" aria-selected="false">Implementation</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-discovery" role="tabpanel" aria-labelledby="pills-discovery-tab" tabindex="0">
                <div class="methodology-title">
                  <p>DISCOVERY</p>
                </div>
                <div class="methodology-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 methodology-question">
                      <p>What’s the solution?</p>
                    </div>
                    <div class="col-lg-9 col-12 methodology-answer">
                      <p>We develop strategies to align design with business need & human experience.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-12 methodology-question">
                      <p>How do we do it?</p>
                    </div>
                    <div class="col-lg-9 col-12 methodology-answer">
                      <p>Thanks to our experience, we craft narrative framewors, bringing simplicity to complexity.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-visioning" role="tabpanel" aria-labelledby="pills-visioning-tab" tabindex="0">
                <div class="methodology-title">
                  <p>VISIONING</p>
                </div>
                <div class="methodology-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 methodology-question">
                      <p>What’s the solution?</p>
                    </div>
                    <div class="col-lg-9 col-12 methodology-answer">
                      <p>We develop strategies to align design with business need & human experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-implementation" role="tabpanel" aria-labelledby="pills-implementation-tab" tabindex="0">
                <div class="methodology-title">
                  <p>IMPLEMENTATION</p>
                </div>
                <div class="methodology-content">
                  <div class="row">
                    <div class="col-lg-3 col-12 methodology-question">
                      <p>How do we do it?</p>
                    </div>
                    <div class="col-lg-9 col-12 methodology-answer">
                      <p>Thanks to our experience, we craft narrative framewors, bringing simplicity to complexity.</p>
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
                <p>OUR TEAM<br>We are a group of strategists and designers whose competencies range from research and analysis to visioning and implementing. We work across disciplines to ensure the right outputs to achieve the best outcome.</p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-about-team-list">
            <div class="block-team-group opened">
              <div class="group-title">
                <p>Directors</p>
              </div>
              <div class="group-people">
                <div class="row">
                  <div class="col-lg-4 col-12 single-person">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/about/f969ebc649-1702827727/schermata-2023-12-17-alle-16.42.00.png">
                    <div class="person-info">
                      <div class="person-name">
                        <p>Lam le-nguyem</p>
                      </div>
                      <div class="person-role">
                        <p>Creative lead</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12 single-person">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/about/0a87e76ce5-1702827806/gruppo-di-maschere-142.jpg">
                    <div class="person-info">
                      <div class="person-name">
                        <p>Travis Turner</p>
                      </div>
                      <div class="person-role">
                        <p>Projects lead</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12 single-person">
                    <img src="https://davideg29.sg-host.com/2020/media/pages/about/6695ee2d33-1702827828/gruppo-di-maschere-143.jpg">
                    <div class="person-info">
                      <div class="person-name">
                        <p>Michael Ngan</p>
                      </div>
                      <div class="person-role">
                        <p>Finance & controls</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-team-group">
              <div class="group-title">
                <p>Associates</p>
              </div>
            </div>
            <div class="block-team-group">
              <div class="group-title">
                <p>Staff</p>
              </div>
            </div>
          </div>
        </div>
        <div class="block-about-network">
          <div class="block-main-text">
            <div class="row">
              <div class="col-lg-6 col-12">
                <p>OUR NETWORK<br>We are a group of strategists and designers whose competencies range from research and analysis to visioning and implementing. We work across disciplines to ensure the right outputs to achieve the best outcome.</p>
              </div>
              <div class="col-lg-6 col-12"></div>
            </div>
          </div>
          <div class="block-network-list">
            <p><a href="#">Heatherwick studio</a></p>
            <p><a href="#">Groupwork</a></p>
            <p><a href="#">Grimshaw</a></p>
            <p><a href="#">Systematica</a></p>
            <p><a href="#">URBAN CROP sOLUTIONS</a></p>
            <p><a href="#">CARLO RATTI ASSOCIATI</a></p>
          </div>
          <a href="#" class="button">See all</a>
        </div>
        <AppFooter/>
      </div>
    </div>
  </section>
</template>