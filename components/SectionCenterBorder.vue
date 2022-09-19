<template>
  <div>
    <div class="container grid pb-6 pt-12" :class="classes">
      <iconTitleText
        v-for="(e, i) in content"
        :key="i"
        :icon="e.icon"
        :title="e.title"
        :text="e.text"
        class="relative"
        :link="e.link"
      />
    </div>
  </div>
</template>

<script>
import iconTitleText from "../components/IconTitleText";

export default {
  components: {
    iconTitleText
  },

  props: {
    content: {
      type: Array,
      required: true
    },
    threeCols: {
      type: Boolean
    }
  },

  computed: {
    classes() {
      return {
        "md:grid-cols-3": this.threeCols,
        "md:grid-cols-2": !this.threeCols,
        "three-cols": this.threeCols,
        "gap-10": this.threeCols,
        "gap-16": !this.threeCols
      };
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.container {
  /deep/ .flex {
    &::after,
    &::before {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.25);
    }

    &:not(:last-child) {
      padding-bottom: 4rem;
      &::before {
        content: "";
        width: 100%;
        height: 1px;
        bottom: 0;
      }
    }
  }
}

@media (min-width: $md) {
  .container {
    /deep/ .flex {
      &::before {
        display: none;
      }

      &::after {
        content: "";
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 50%;
      }
    }

    &:not(.three-cols) {
      /deep/ .flex {
        &:nth-child(even)::after {
          display: none;
        }

        &:nth-child(odd) {
          padding-right: 4rem;

          &::after {
            right: 0;
          }
        }
      }
    }

    // works for upto 6 columns
    &.three-cols {
      /deep/ .flex {
        &:not(:first-child):not(:nth-child(3n)):not(:nth-child(4n))::after {
          display: none;
        }

        &:first-child,
        &:nth-child(4n) {
          padding-right: 2.5rem;

          &::after {
            right: 0;
          }
        }

        &:nth-child(3n) {
          padding-left: 2.5rem;
          &::after {
            left: 0;
          }
        }
      }
    }
  }
}
</style>