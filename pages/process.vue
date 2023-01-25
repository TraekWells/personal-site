<template>
  <PageHeader eyebrow="Process" title="How does the process work?" />
  <main id="main">
    <section class="section pb-7">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="process-block">
          <div class="process-number">1</div>
          <div class="process-description">
            <h3>Book a short discovery call</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis itaque sequi repudiandae, quos inventore temporibus.
            </p>
          </div>
        </div>
        <div class="process-block">
          <div class="process-number">2</div>
          <div class="process-description">
            <h3>Start the design process</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis itaque sequi repudiandae, quos inventore temporibus.
            </p>
          </div>
        </div>
        <div class="process-block">
          <div class="process-number">3</div>
          <div class="process-description">
            <h3>Start the development process</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis itaque sequi repudiandae, quos inventore temporibus.
            </p>
          </div>
        </div>
        <div class="process-block">
          <div class="process-number">4</div>
          <div class="process-description">
            <h3>Test, test, test</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis itaque sequi repudiandae, quos inventore temporibus.
            </p>
          </div>
        </div>
        <div class="process-block">
          <div class="process-number">5</div>
          <div class="process-description">
            <h3>Launch and celebrate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis itaque sequi repudiandae, quos inventore temporibus.
            </p>
          </div>
        </div>
        <div class="process-block">
          <div class="process-number">6</div>
          <div class="process-description">
            <h3>Maintenance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis itaque sequi repudiandae, quos inventore temporibus.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container container--narrow">
        <CallToAction />
      </div>
    </section>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData";

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/process`,
    title: "Traek Wells",
    description: "Process description",
  };
  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/process`,
    },
  ],
});
</script>
