<template>
  <div class="p-5 mb-3 main rounded">
    <h1
      class="flex justify-between cursor-pointer"
      :class="{ active: collapsed }"
      @click="collapsed = !collapsed"
    >{{question}}</h1>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="collapsed" class="ans overflow-hidden">
        <p class="relative mb-0 pt-4 mt-4 opacity-50" v-html="answer"></p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },

  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
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
    unCollapse() {
      this.collapsed = false;
    }
  }
};
</script>

<style lang='scss' scoped>
.main {
  box-shadow: 0 0 16px 4px rgba(189, 188, 179, 0.12);
}

h1 {
  &::after {
    content: url("~@/assets/images/down-arrow.svg");
    display: block;
    min-width: 1.1rem;
    height: 1.1rem;
    transform: rotate(-90deg);
    transition: transform 300ms;
    margin-left: 5px;
  }

  &.active::after {
    transform: rotate(0);
  }
}

p::before {
  content: "";
  position: absolute;
  width: 30%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
}

.ans {
  transition: height 300ms ease-in-out;
}
</style>