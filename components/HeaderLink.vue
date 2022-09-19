<template>
  <div class="link-wrapper relative lg:p-0 py-8 px-10">
    <template v-if="link">
      <nuxt-link
        v-if="!outerLink"
        :to="link"
        class="link"
        @click.native="$emit('link-clicked')"
        >{{ text }}</nuxt-link
      >
      <a v-else :href="link" class="link" @click="$emit('link-clicked')">{{
        text
      }}</a>
    </template>
    <template v-else>
      <div
        class="dropdown-toggle flex items-center justify-center cursor-pointer"
        :class="{ 'dropdown-toggle-not-active': !showMenu }"
        @click="showMenu = !showMenu"
        v-click-outside="hideMenu"
      >
        <span class="">{{ text }}</span>
        <img
          src="@/assets/images/caret-down-solid.svg"
          alt=""
          class="w-3 h-3 ml-1 transition-transform duration-200"
          :class="{ 'transform rotate-180': showMenu }"
        />
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div
          v-show="showMenu"
          class="
            menu
            lg:absolute
            left-0
            top-0
            transform
            lg:translate-y-10
            bg-white
            lg:border
            text-center
            lg:text-left
            capitalize
            flex flex-col
            items-center
            lg:block
          "
        >
          <nuxt-link
            v-for="(e, i) in menu"
            :key="i"
            :to="e.link"
            class="menu-link block p-2"
            @click.native="linkClicked"
            >{{ e.text }}</nuxt-link
          >
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      showMenu: false
    };
  },

  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    outerLink: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array
    }
  },

  methods: {
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    },
    hideMenu() {
      this.showMenu = false;
    },
    linkClicked() {
      this.showMenu = false;
      this.$emit("link-clicked");
    }
  },

  directives: {
    ClickOutside
  },

  computed: {
    screenWidth() {
      return this.$mq == "xl" ? true : false;
    }
  },

  watch: {
    screenWidth() {
      this.showMenu = false;
    }
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

@layer components {
  .link {
    @apply border-b border-transparent;

    &:hover {
      @apply border-black;
    }
  }
}

.link,
.dropdown-toggle {
  padding: 0.25rem 0;
}

.link,
.menu-link,
.dropdown-toggle-not-active {
  &:hover {
    opacity: 1;
  }
}

.link.nuxt-link-exact-active,
.menu-link.nuxt-link-exact-active {
  border-bottom: 1px solid $redorange;
  opacity: 1;
}

.menu {
  transition: height 200ms;
  overflow: hidden;
  font-size: 0.85em;
}

@media (min-width: $lg) {
  .menu {
    width: max-content;
    font-size: 1em;
  }

  .menu-link.nuxt-link-exact-active {
    border: none;
    background-color: $blue;
    color: white;
    opacity: 1;
  }

  .line {
    $margin: 0.75rem;
    margin-right: -$margin;

    &::after {
      content: "|";
      margin-left: $margin;
    }
  }
}
</style>
