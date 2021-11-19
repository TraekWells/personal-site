<template>
  <nav ref="navigation" class="navigation">
    <div class="container">
      <nuxt-link to="/" style="border-bottom: none">
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 879.2 561.3"
          style="enable-background: new 0 0 879.2 561.3"
          xml:space="preserve"
          class="navigation__logo"
          aria-label="Logo"
        >
          <path
            class="st0"
            fill="#8136a0"
            d="M586.1,271.8c0,9.3-3.8,18.1-10.5,24.5l-87.2,83.2v-58.5h-97.7v58.5l-87.2-83.2c-6.7-6.4-10.5-15.3-10.5-24.5
    v-76.4h-97.7v97.2c0,22.7,9.3,44.4,25.7,60.1l218.5,208.6l218.5-208.6c16.4-15.7,25.7-37.3,25.7-60.1v-97.2h-97.7V271.8z"
          />
          <path
            class="st1"
            fill="#350448"
            d="M878.3,97.7c-3-24-13.6-45.5-29.3-62.3c-16.6-17.9-39.1-30.2-64.3-34c-1-0.2-2.1-0.3-3.1-0.5
    C777,0.4,767.7,0,767.7,0h-83.9H195.4c0,0-93.2,0.4-97.7,0.9c-1,0.1-2.1,0.3-3.1,0.5c-25.3,3.8-47.7,16.2-64.3,34
    C14.5,52.1,3.9,73.7,0.9,97.7c-0.6,4.6-0.9,9.3-0.9,14v21.9c0,5.1,2.1,10,5.8,13.6l91.9,87.7V111c0.4-7.4,6.5-13.3,14-13.3h279.1
    v125.7h48.9h48.9V97.7h279.1c7.5,0,13.6,5.9,14,13.3v123.9l91.9-87.7c3.7-3.5,5.8-8.4,5.8-13.6v-21.9
    C879.2,106.9,878.9,102.3,878.3,97.7z"
          />
        </svg>
      </nuxt-link>
      <ul class="navigation__list">
        <li class="navigation__item">
          <nuxt-link to="/projects"
            ><span class="navigation__link">Projects</span></nuxt-link
          >
        </li>
        <li class="navigation__item">
          <nuxt-link to="/blog"
            ><span class="navigation__link">Writing</span></nuxt-link
          >
        </li>
        <li class="navigation__item">
          <nuxt-link to="/blog/impossible-list"
            ><span class="navigation__link">Impossible List</span></nuxt-link
          >
        </li>
        <li class="navigation__item">
          <nuxt-link to="/about-me"
            ><span class="navigation__link">Who I Am</span></nuxt-link
          >
        </li>
      </ul>
      <button
        v-if="mobile"
        ref="navigation__buttonOpen"
        class="navigation__button-open button button--ghost"
        @click="openMobileNav"
      >
        Menu
      </button>
      <button
        ref="navigation__buttonClose"
        class="navigation__button-close button button--ghost"
        @click="closeMobileNav"
      >
        Close
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobile: null,
    }
  },
  watch: {
    $route() {
      this.closeMobileNav()
    },
  },
  mounted() {
    window.innerWidth <= 600 ? (this.mobile = true) : (this.mobile = false)
    window.addEventListener('resize', this.isMobile)
  },
  destroyed() {
    window.removeEventListener('resize', this.isMobile)
  },
  methods: {
    isMobile() {
      if (window.innerWidth <= 600) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    },
    openMobileNav() {
      this.$refs.navigation__buttonOpen.style.display = 'none'
      this.$refs.navigation__buttonClose.style.display = 'block'
      this.$refs.navigation.classList.add('active')
    },
    closeMobileNav() {
      if (this.mobile) {
        this.$refs.navigation__buttonOpen.style.display = 'block'
      }
      this.$refs.navigation__buttonClose.style.display = 'none'
      this.$refs.navigation.classList.remove('active')
    },
  },
}
</script>

<style lang="scss">
.navigation {
  background-color: var(--color-white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  z-index: 15;
  box-shadow: 0 2px 1.5rem rgba(0, 0, 0, 0.05);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a::after,
    > a::before {
      height: 0;
    }
  }

  &__logo {
    height: 4rem;
  }

  &__list {
    display: flex;

    @include respond-to(phone) {
      display: none;
    }
  }

  &__item {
    list-style: none;

    &:not(:last-child) {
      margin-right: 3rem;
    }
  }

  &__link {
    color: var(--color-gray-900);
    font-size: 1.6rem;
    text-decoration: none;
  }

  &__button-open {
    display: none;

    @include respond-to(phone) {
      display: block;
    }
  }

  &__button-close {
    display: none;
  }

  &.active {
    background-color: var(--color-primary-100);
    height: 100%;

    .navigation__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -10;

      li {
        margin: 2rem 0;

        a {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
