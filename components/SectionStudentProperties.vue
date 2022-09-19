<template>
  <section>
    <div class="container grid lg:grid-cols-2 gap-12">
      <heading text="UOWN Student Properties." center class="grid-cols-span" />
      <div class="relative">
        <img
          src="@/assets/images/W-aquamarine.svg"
          alt
          class="ellipse absolute -z-1"
        />
        <div
          class="grid sm:grid-cols-2 gap-6 items-center justify-items-center relative"
        >
          <property
            v-for="(e, i) in properties"
            :key="i"
            :thumbnail="e.thumbnail"
            :name="e.name"
            :type="e.type"
            :potentialGrowth="e.potentialGrowth"
            :link="e.link"
            :class="{ 'row-span-2': i === 1 }"
          />
          <div class="sm:absolute bottom-0 sm:col-start-2 text-lg">
            <span class="opacity-75">When you invest your capital is</span>
            <router-link
              to="/risk-statement"
              class="link-underlined opacity-75 hover:opacity-100"
              >at risk</router-link
            >
          </div>
        </div>
      </div>
      <div>
        <p v-for="(p, i) in paras" :key="i" class="text-xl">{{ p }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import property from "@/components/SectionStudentPropertiesProperty";

export default {
  components: {
    heading,
    property,
  },

  props: {
    paras: {
      type: Array,
      required: true,
    },

    properties: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.ellipse {
  transform: rotate(-26deg);
  left: -33rem;
  top: 10%;
  max-width: 50rem;
}

@media (min-width: $lg) {
  section {
    // padding: 10% 0 20% 0;
    // padding-bottom: 20%;
  }

  .ellipse {
    transform: rotate(-26deg) scale(1.5);
    left: -65%;
    max-width: 100%;
  }
}
</style>