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
            <strong>Yes absolutely</strong>. After the project is finished and
            I've received the final payment, the website is 100% yours to own
            and manage. I'll happily assist you in getting the website live on
            the internet so people can visit, free of charge.
          </p>
        </Question>
        <Question
          question="Are you available for maintenance and updates afterwards?"
        >
          <p>
            After every project, I'll remain available for general maintenance
            and updates for 30 days following the completion of the project,
            free of charge. This is to ensure that all of your questions are
            answered and you're feeling comfortable with your new website.
          </p>
          <p>
            Optionally, I'm available as a monthly retainer. The rates for that
            vary depending on how much time you'd need and what kind of updates
            you'd need me to make.
          </p>
        </Question>

        <FancyHeader title="The process" />
        <Question question="How long will the process take?">
          <p>
            I like to spend a minimum of <strong>eight</strong> weeks on a
            project. That gives me plenty of time to go through the design and
            development phases in detail. This also allows us to have enough
            time to communicate feedback during the process.
          </p>
          <p>
            I understand that some projects have a bit more urgency to them and
            I'm open adjusting the timeline. In my experience, the more time a
            project is allotted, the more successful it will be.
          </p>
        </Question>

        <FancyHeader title="Everything else" />
        <Question question="Why do you like ants so much?">
          <p>
            Because they're amazing little creatures. Here are some ant facts:
          </p>
          <ul>
            <li>Ants can lift up to 50 times their body weight.</li>
            <li>There are over 12,000 species of ants.</li>
            <li>
              Ants have two stomachs. One for them and one for sharing with
              other ants.
            </li>
          </ul>
        </Question>
        <Question question="What's your favorite color?">
          <p>I love me a dark wine-like red.</p>
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
    description:
      "As a client, you might have some questions that a lot of other people have as well. I've compiled this list of questions and I've answered them to clear up any confusion.",
  };
  return getMetaData(metaData);
};
useHead({
  title: "FAQ",
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
