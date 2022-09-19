<template>
  <div
    class="flex flex-wrap"
    :hasX="hasX"
    :class="{ 'is-category': hasX }"
  >
    <breadcrumb :ver2="ver2" text="Home" link="/" :color="color" />
    <breadcrumb
      v-for="(e, i) in breadcrumbs"
      :key="i"
      :ver2="ver2"
      :text="e.text"
      :link="e.link"
      :color="color"
      :lastChild="i == breadcrumbs.length - 1"
      :hasX="hasX"
      :idProp="setIdProp(i, breadcrumbs.length)"
    />
  </div>
</template>

<script>
import breadcrumb from "@/components/Breadcrumb";

export default {
  components: {
    breadcrumb,
  },

  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
    ver2: {
      type: Boolean,
    },
    color: {
      type: String,
    },
    hasX: {
      type: Boolean,
    },
    idProp: {
      type: String,
    },
  },

  methods: {
    setIdProp(index, length) {
      return index === length - 1 ? this.idProp : "";
    },
  },
};
</script>

<style scoped>
.is-category >>> .crumb-wrapper:nth-last-child(2) .crumb::after {
  display: none;
}
</style>