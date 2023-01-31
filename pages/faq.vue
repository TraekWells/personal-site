<template>
  <PageHeader eyebrow="FAQ" title="Frequently Asked Questions" />
  <main id="main">
    <section class="section pb-7">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <FancyHeader title="Cost, Contracts and Payment" />
        <Question question="How much will it cost?">
          <p>
            An answer you probably saw coming, but it depends. There are
            numerous factors when it comes to pricing a project:
          </p>
          <ul>
            <li>How fast do you need it done?</li>
            <li>
              Is it just a design project or a development project? Or both?
            </li>
            <li>How much content is there to migrate, if any?</li>
            <li>Are there any integrations that you'll need?</li>
          </ul>
          <p>
            It's not a simple answer and it varies case by case. If you're
            curious, shoot me an
            <a href="mailto:howdy@traekwells.com">email</a> and I'll be glad to
            give you a free estimate.
          </p>
        </Question>
        <Question question="Will I have to sign a contract?">
          <p>
            Yes. A contract is a good thing for both parties to ensure that we
            both know what we're getting, what's expected of us both and our
            rights.
          </p>
        </Question>
        <Question question="How do you handle payment?">
          <p>
            At the moment, I accept payment in the following formats but I'm
            pretty flexible:
          </p>
          <ul>
            <li>Check</li>
            <li>PayPal</li>
            <li>Venmo</li>
            <li>ACH</li>
          </ul>
        </Question>
        <Question question="Do I have to give a deposit before you start?">
          <p>
            Yes. I'll request a <strong>50%</strong> deposit before I begin any
            work. Just like my accepted forms of payment, I'm flexible on this
            one.
          </p>
        </Question>

        <FancyHeader title="The work" />
        <Question question="Can you design a logo for me?">
          <p>
            The short answer is no but I'll gladly refer you to someone I know
            who can get the job done well or work with someone you may know.
          </p></Question
        >
        <Question question="Do I own my website when it's finished?">
          <p>
            <strong>Yes absolutely</strong>. I'll take care of the development
            and/or the design and once that part is finished and approved, I'll
            happily assist you getting the website on a webhost. You own 100% of
            the website from that point forward.
          </p>
        </Question>
        <Question
          question="Are you available for maintence and updates afterwards?"
        >
        </Question>

        <FancyHeader title="The process" />
        <Question question="How long will the process take?"></Question>
        <Question
          question="What happens when my website is finished?"
        ></Question>

        <FancyHeader title="Everything else" />
        <Question question="Why do you like ants so much?">
          <p>I just think ants are super cool.</p>
        </Question>
        <Question question="What's your favorite color?">
          <p>I love me a dark, wine red.</p>
        </Question>
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
    url: `https://traekwells.com/faq`,
    title: "Traek Wells",
    description: "FAQs",
  };
  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/faq`,
    },
  ],
});
</script>
