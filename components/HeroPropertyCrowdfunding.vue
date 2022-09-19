<template>
  <section class="mt-from-header pt-8 pb-20 xl:pb-12 text-white relative">
    <AppImage
      :source="bgImage"
      :sourceWebp="bgImageWebp"
      class="absolute inset-0 -z-1"
      imgClasses="object-cover"
      :lazyLoad="false"
    />
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      ver2
      class="breadcrumbs container mb-8"
    />
    <div class="container grid md:grid-cols-2">
      <div
        class="dividor relative mb-12 pb-12 md:mb-0 md:pb-0 md:pr-12 md:mr-12"
      >
        <heading :text="title" size="md" notBold />
        <div class="x-line my-10"></div>
        <p v-for="(para, i) in paras" :key="i" class="text-lg">
          {{ para }}
        </p>
      </div>
      <div>
        <heading text="Content overview." size="sm" notBold class="mb-6" />
        <div class="space-y-10">
          <iconLinks
            v-for="(e, i) in iconLinks"
            :key="i"
            :icon="e.icon"
            :title="e.title"
            :listItems="e.listItems"
          />
        </div>
      </div>
      <scrollIcon
        class="hidden xl:block mx-auto mt-24 xl:col-span-3 transform xl:-translate-x-12"
      />
    </div>
  </section>
</template>

<script>
import heading from "@/components/Heading2";
import iconLinks from "@/components/HeroPropertyCrowdfundingIconLinks";
import scrollIcon from "@/components/ScrollIcon";
import breadcrumbList from "@/mixins/breadcrumbList";

export default {
  components: {
    heading,
    iconLinks,
    scrollIcon,
    Breadcrumbs: () => import("@/components/Breadcrumbs"),
    AppImage: () => import("@/components/AppImage"),
  },

  data() {
    return {
      breadcrumbs: [
        { text: "Property Investments", link: "/invest" },
        {
          text: "Property Crowdfunding",
          link: "/invest/property-crowdfunding",
        },
        { text: this.title, link: this.$route.path },
      ],
    };
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    paras: {
      type: Array,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
    bgImageWebp: {
      type: String,
      required: true,
    },
    iconLinks: {
      type: Array,
      required: true,
    },
  },

  mixins: [breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.dividor::after {
  content: "";
  background-color: white;
  opacity: 0.5;
  height: 2px;
  width: 65%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.breadcrumbs ::v-deep {
  .crumb {
    transition: opacity 200ms;
    &:hover {
      border-color: white;
    }
  }

  .crumb.crumb.crumb::after {
    color: #e2e8f0;
  }
}

@media (min-width: $md) {
  .dividor::after {
    width: 2px;
    height: 80%;
    left: unset;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>