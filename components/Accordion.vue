<template>
  <div>
    <p
      @click="collapsed = !collapsed"
      v-click-outside="unCollapse"
      class="font-family-bold ml-1 flex text-xl items-center"
    >
      <span class="icon inline-block relative" :class="{ minus: collapsed }"></span>
      {{header}}
    </p>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <p v-show="collapsed" class="content mb-0">
        {{content}}
        <a v-if="outerLink" :href="link" class="block text-link py-2 italic">{{linkText}}</a>
        <nuxt-link v-else :to="link" class="block text-link py-2 italic">{{linkText}}</nuxt-link>
      </p>
    </transition>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "Accordion",

  props: {
    header: String,
    content: String,
    link: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    outerLink: {
      type: Boolean,
    },
  },

  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    },
    unCollapse() {
      this.collapsed = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.icon {
  height: 10px;
  width: 10px;

  &::before,
  &::after {
    background-color: $black;
    display: block;
    position: absolute;
  }

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    left: 1px;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    height: 100%;
    width: 2px;
    position: absolute;
    transition: transform 500ms;
  }

  &.minus::after {
    transform: translate(0, 0) rotate(90deg);
  }
}
.content {
  transition: height 500ms;
  overflow: hidden;
}
</style>