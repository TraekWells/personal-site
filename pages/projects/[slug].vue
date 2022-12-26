<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ project.title }}</h1>
        <p class="lead">
          {{ project.summary }}
        </p>
      </div>
    </header>
    <article class="section">
      <nuxt-picture
        v-if="project.featuredImage"
        class="featured-image"
        :src="project.featuredImage"
        :alt="project.title"
      />
      <div class="container container--narrow">
        <div class="content">
          <div class="content__image">
            <nuxt-picture
              v-if="!project.featuredImage"
              :src="project.previewImage"
              :alt="project.title"
            />
          </div>
          <div class="content__text">
            <ContentDoc />
          </div>
          <div class="content__sidebar">
            <h4>Technology Used</h4>
            <ul class="technology">
              <li
                v-for="tech in technology"
                :key="tech"
                class="technology__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="technology__icon-wrapper"
                  fill="currentColor"
                  stroke="none"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0Z"></path>
                    <g
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linejoin="round"
                    >
                      <path d="M4.48 11.98h14.99"></path>
                      <path d="M13.483 5.988L19.513 12l-6.04 6.01"></path>
                    </g>
                  </g>
                </svg>
                <span>{{ tech }}</span>
              </li>
            </ul>
            <h4>Project Links</h4>
            <ul>
              <li>
                <a
                  :href="project.linkToProject"
                  target="_blank"
                  rel="noreferrer noopener"
                  >View Live Project</a
                >
              </li>
              <li v-if="project.linkToCode">
                <a
                  :href="project.linkToCode"
                  target="_blank"
                  rel="noreferrer noopener"
                  >View Code</a
                >
              </li>
            </ul>
            <h4>Table of Contents</h4>
            <ul>
              <li v-for="header in tableOfContents" :key="header.id">
                <a :href="`#${header.link}`">{{ header.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <article class="section">
      <div class="container container--narrow">
        <h2>More Projects</h2>
        <div class="projects">
          <ProjectCard
            v-for="project in moreProjects"
            :key="project.path"
            :project="project"
          />
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData.js";
import { ref, onMounted } from "vue";
const tableOfContents = ref([]);
const technology = ref([]);
const { path } = useRoute();

const { data: project } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/projects").where({ _path: path }).findOne();
});

const { data: moreProjects } = await useAsyncData(
  `more-content-${path}`,
  () => {
    return queryContent("/projects")
      .where({ _path: { $ne: path } })
      .find();
  }
);

const getHeaders = () => {
  const headers = Array.from(document.querySelectorAll(".content h2"));
  headers.forEach((header) => {
    const headerObj = {};
    headerObj.text = header.textContent;
    headerObj.link = header.id;
    tableOfContents.value.push(headerObj);
  });
};

const getTechnology = () => {
  const techList = project.value.technology
    .split(",")
    .map((item) => item.trim());
  technology.value.push(...techList);
};

onMounted(() => {
  getHeaders();
  getTechnology();
});

const getMeta = () => {
  const metaData = {
    type: "article",
    url: `https://traekwells.com${path}`,
    title: project.value.title,
    description: project.value.summary,
    image: project.value.previewImage,
  };
  return getMetaData(
    metaData,
    {
      property: "article:published_time",
      content: project.value.createdAt,
    },
    {
      property: "article:modified_time",
      content: project.value.updatedAt,
    },
    { name: "twitter:label1", content: "Written by" },
    { name: "twitter:data1", content: "Traek Wells" }
  );
};
useHead({
  meta: getMeta,
  title: project.value.title,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com${path}`,
    },
  ],
});
</script>
