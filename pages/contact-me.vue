<template>
  <PageHeader eyebrow="Contact me" title="Get in touch" />
  <main id="main">
    <section class="section pb-7">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="d-grid-two-columns half">
          <div class="d-grid__half">
            <form name="contact-form" class="form" data-netlify="true">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  name="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="more-details">Anything else?</label>
                <textarea
                  id="more-details"
                  cols="30"
                  rows="6"
                  name="more-details"
                  placeholder="Any other details I should know?"
                ></textarea>
              </div>
              <button class="button button--primary">
                Send Message <Icon type="arrowRight" />
              </button>
            </form>
          </div>
          <div class="d-grid__half">
            <p>
              I'll respond to your message within 24 to 48 hours as long as I'm
              not on vacation. Prefer to send a direct email and skip the form?
              Feel free to send me a message to email below. Looking forward to
              chatting with you!
            </p>
            <a class="big-link" href="mailto:howdy@traekwells.com"
              >howdy@traekwells.com</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container container--narrow">
        <h3>Around the area?</h3>
        <p>I’d love to connect in person over a coffee or tea.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26809.57649531089!2d-93.15367952228985!3d44.982648590140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1674156973178!5m2!1sen!2sus"
          width="100%"
          height="500"
          class="mb-5"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData";

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/contact-me`,
    description:
      "Contact me today so that we can start to turn your web project into a reality.",
  };
  return getMetaData(metaData);
};
useHead({
  title: "Contact Me",
  meta: getMeta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/contact-me`,
    },
  ],
});
</script>
