---
title: 2020 In Review
summary: Run a rig rum run a shot across the bow bowsprit rope's end salmagundi lateen sail reef mutiny killick.
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Test Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```scss
.footer {
  background-color: transparent;
  padding: 5rem 0;
  text-align: center;
  margin-top: auto;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  font-size: 1.8rem;
}

.social-icon {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;

  &:hover {
    border-bottom: none;
  }

  svg {
    margin-right: 1rem;
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
}
```

## Test Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>
> – _Will Smith_

## Test Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js
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
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
