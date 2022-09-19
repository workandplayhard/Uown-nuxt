<template>
  <div class="sections-wrapper overflow-hidden">
    <hero
      title="Student Accommodation Investment."
      :paras="heroContent.paras"
      :bgImage="require('@/assets/images/SAI-hero.jpg')"
      :bgImageWebp="require('@/assets/images/SAI-hero.jpg?webp')"
      :iconLinks="heroContent.iconLinks"
    />
    <LazyHydrate when-visible>
      <s2 id="why-student-property" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <sectionEllipse
        title="Student property investment returns."
        :paras="sectionEllipseParas"
        img="ball__rmfvij.png"
        textLeft
        id="how-are-the-returns"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <sectionStudentProperties
        :paras="sectionStudentProperties.paras"
        :properties="sectionStudentProperties.properties"
        id="student-properties"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <sectionMap id="properties-in-leeds" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <sectionU2 id="what-s-property-crowdfunding" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <sectionEllipse
        title="Why invest with UOWN?"
        img="q-mark_lynrjd.png"
        textLeft
        class="md:-mb-24 lg:mb-0"
        id="why-invest-with-UOWN"
      >
        <LazyHydrate when-visible>
          <whyInvest />
        </LazyHydrate>
      </sectionEllipse>
    </LazyHydrate>
  </div>
</template>

<script>
const hero = () => import("@/components/HeroPropertyCrowdfunding");
const s2 = () => import("@/components/StudentPropertiesS2");
const sectionEllipse = () => import("@/components/PropertyCrowdfundingEllipse");
const sectionStudentProperties = () =>
  import("@/components/SectionStudentProperties");
const sectionMap = () => import("@/components/SectionPropertyCrowdfundingMap");
const sectionU2 = () => import("@/components/PropertyCrowdfundingU2");
const whyInvest = () => import("@/components/WhyInvestWithUown");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import LazyHydrate from "vue-lazy-hydration";

export default {
  head() {
    return {};
  },

  components: {
    hero,
    s2,
    sectionEllipse,
    sectionStudentProperties,
    sectionMap,
    sectionU2,
    whyInvest,
    LazyHydrate,
  },

  head() {
    return {
      title: "Student Property Investment Opportunities",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN is the quick and easy way to start investing in student properties through property crowdfunding. Invest from £1. Click to register and get started today.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/SAI-hero.jpg?webp"),
          rel: "preload",
          as: "image",
        },
      ],
    };
  },

  data() {
    return {
      heroContent: {
        paras: [
          "One digs at a time, UOWN is levelling the playing field of the student property investment market. By teaming up with an award-winning student lettings agency, Parklane Properties - UOWNers can look forward to a hassle-free investment where the management of the property is kept in safe hands.",
          "With strong year-on-year rental yields and robust market prospects, student accommodation could be the ideal place to start your investment journey.",
          "Investing in student property with UOWN is quick, easy, and accessible for all investment budgets.",
        ],
        iconLinks: [
          {
            icon: require("@/assets/images/property-performance.svg"),
            title: "Student Property Performance",
            listItems: [
              {
                text: "Why student property?",
                scrollTo: "why-student-property",
              },
              { text: "How are the returns?", scrollTo: "how-are-the-returns" },
            ],
          },
          {
            icon: require("@/assets/images/marker.svg"),
            title: "UOWN student properties",
            listItems: [
              { text: "Student Properties", scrollTo: "student-properties" },
              { text: "Properties in Leeds", scrollTo: "properties-in-leeds" },
            ],
          },
          {
            icon: require("@/assets/images/uown-and-investing.svg"),
            title: "Who or what is UOWN?",
            listItems: [
              {
                text: "What's Property Crowdfunding?",
                scrollTo: "what-s-property-crowdfunding",
              },
              {
                text: "Why Invest with UOWN?",
                scrollTo: "why-invest-with-UOWN",
              },
            ],
          },
        ],
      },

      sectionEllipseParas: [
        "In the three years to 2016, North America has invested £4.3 billion into the UK’s student accommodation market, exceeding the UK’s own investment of £3.6 billion. Those across the pond are drawn to our good track record of high returns in the property investment market.",
        "You can get a decent return on your investment from rental income, while gross yields can be around 10-12% in some areas of the UK.",
        "Thanks to UOWN property crowdfunding you too can invest to get the best from the student property market.",
      ],

      sectionStudentProperties: {
        paras: [
          "UOWN looks for student properties situated within student heartlands in major university towns with large student populations.",
          "Leeds for example has a student population of over 65,000 and they are congregated within particular areas of the city that cater to their needs.",
          "Our strategy is to go for properties with strong gross rents that have a long track rental histories going back five to ten years.",
        ],

        properties: [
          {
            thumbnail: require("@/assets/images/old-bakery-apartments.jpg"),
            name: "Old Bakery Apartments",
            potentialGrowth: 4.07,
            link: "https://app.uown.co/properties/old-bakery-apartments",
          },
          {
            thumbnail: require("@/assets/images/lumley-avenue.jpg"),
            name: "Lumley Avenue",
            potentialGrowth: 5.3,
            type: "Resale",
            link: "https://app.uown.co/properties/lumley-avenue",
          },
          {
            thumbnail: require("@/assets/images/property-3.jpg"),
            name: "Eden Gardens",
            type: "Resale",
            potentialGrowth: 5.3,
            link: "https://app.uown.co/properties/eden-gardens",
          },
        ],
      },

      whoOrWhatParas: [
        "UOWN is simply lots of people all clubbing together to fund something bigger. In this case, that’s properties. Until recently, property investment was only available to a small number of people with large sums of money. Each active member of the UOWN community (a UOWNer) owns shares in one or more properties, alongside other UOWNers.",
        "So property crowdfunding investment is not something to be afraid of, it’s just a group of like minded people pooling resources.",
      ],
    };
  },

  mixins: [fullCanonicalURL],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.sections-wrapper > *:not(:first-child):not(.no-mb) {
  margin-bottom: 3rem;
}

@media (min-width: $lg) {
  .sections-wrapper > * {
    margin-bottom: 0;
  }
}
</style>