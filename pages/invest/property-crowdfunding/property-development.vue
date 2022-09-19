<template>
  <div class="sections-wrapper overflow-hidden">
    <hero
      title="Property development investments."
      :paras="heroContent.paras"
      :bgImage="require('@/assets/images/PD-hero.jpg')"
      :bgImageWebp="require('@/assets/images/PD-hero.jpg?webp')"
      :iconLinks="heroContent.iconLinks"
    />
    <LazyHydrate when-visible>
      <sectionU
        img="ball-house_zeu6qy.png"
        title="What is crowdfunded property development?"
        :paras="crowdfundedPropDevParas"
        id="what-is-CPD"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s3 class="lg:mt-20" id="why-invest-in-property-development" />
    </LazyHydrate>
    <div>
      <LazyHydrate when-visible>
        <featureBlocks
          title="How could crowdfunding be better than my own property development business?"
          :blocks="featureBlocks"
          id="could-it-be-better"
        />
      </LazyHydrate>
      <div class="bg-light pt-16 pb-20">
        <p class="container text-center opacity-60">
          <nuxt-link
            to="/help-centre/what-is-property-crowdfunding"
            class="link-underlined mr-1"
            >Find out</nuxt-link
          >more about the crowd.
        </p>
      </div>
    </div>
    <LazyHydrate when-visible>
      <propertyCrowdfundingW style="z-index: 2" id="who-or-what-is-uown" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s6 class id="our-process" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <s7 id="uowns-pledge-to-you" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <sectionQuestion
        title="Why invest with UOWN?"
        :paras="sectionQuestionParas"
        img="q-mark_lynrjd.png"
        id="why-invest-with-uown"
        class="md:-mb-24 lg:mb-0"
      />
    </LazyHydrate>
  </div>
</template>

<script>
const hero = () => import("@/components/HeroPropertyCrowdfunding");
const sectionU = () => import("@/components/PropertyCrowdfundingU");
const s3 = () => import("@/components/PropertyDevelopmentS3");
const featureBlocks = () => import("@/components/FeatureBlocks");
const s6 = () => import("@/components/PropertyDevelopmentS6");
const s7 = () => import("@/components/PropertyDevelopmentS7");
const sectionQuestion = () =>
  import("@/components/PropertyCrowdfundingEllipse");
const propertyCrowdfundingW = () =>
  import("@/components/PropertyCrowdfundingW");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import LazyHydrate from "vue-lazy-hydration";

export default {
  components: {
    hero,
    sectionU,
    s3,
    featureBlocks,
    s6,
    s7,
    sectionQuestion,
    propertyCrowdfundingW,
    LazyHydrate,
  },

  head() {
    return {
      title: "Crowdfunding Property Development | Invest from £1",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Invest in crowdfunding property developments with UOWN. Help experienced property developers secure finance and build homes. Invest from £1. Register now.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/PD-hero.jpg?webp"),
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
          "UOWN is bringing property development investment opportunities to everyone. Traditionally property investment was only available to those with plenty of spare cash, however with our approach to crowdfunded property developments, everyone can get involved, whether you have a little or a lot to invest.",
          "It has been said that there is always money in bricks and mortar, well we believe this to be true. Crowdfunded property development is an innovative take on a tried and tested business model and could be the perfect way to get a taste for property development.",
          "UOWN is quick, easy, and accessible for all investment budgets.",
        ],

        iconLinks: [
          {
            icon: require("@/assets/images/development-investment.svg"),
            title: "Development investment",
            listItems: [
              { scrollTo: "what-is-CPD", text: "What is PCD?" },
              {
                scrollTo: "why-invest-in-property-development",
                text: "Why invest in property development?",
              },
              {
                scrollTo: "could-it-be-better",
                text: "Could it be better than my own development?",
              },
            ],
          },
          {
            icon: require("@/assets/images/uown-and-investing.svg"),
            title: "UOWN and investing",
            listItems: [
              {
                scrollTo: "who-or-what-is-uown",
                text: "Who or what is UOWN?",
              },
              { scrollTo: "our-process", text: "Our Process" },
              { scrollTo: "uowns-pledge-to-you", text: "UOWNs pledge to you" },
              {
                scrollTo: "why-invest-with-uown",
                text: "Why invest with UOWN?",
              },
            ],
          },
        ],
      },

      crowdfundedPropDevParas: [
        "Put simply, it is like any other form of crowdfunding, but in this case, it is to fund the construction of houses or flats. Crowdfunded property development takes traditional property developments and raises some or all of the funds needed from the crowd. The benefit of this is that rather than the profits going to just a few investors, the money is split between the whole crowd based on how much an individual has invested.",
        "Our aim is to keep it straightforward and clear. Property development made easy; where investments are simple to access, uncomplicated and rewarding. There is no hassle from actively managing the project, no large deposits or capital, no property chains, no jumping through hoops to gain access to finance and no day-to-day management. You can carry on doing your job and we’ll do ours; making money for you.",
      ],

      featureBlocks: [
        {
          bgImage: require("@/assets/images/landing-3.jpg"),
          title: "Less to do.",
          description:
            "Crowdfunding removes the difficult decisions about capital, bridging finance, location, development, furnishing and marketing a property for sale.",
        },
        {
          bgImage: require("@/assets/images/landing-4.jpg"),
          title: "Less to know.",
          description:
            "There are no knowledge barriers to overcome to get the development off the ground and running smoothly.",
        },
        {
          bgImage: require("@/assets/images/landing-5.jpg"),
          title: "Start with less.",
          description:
            "There is no need to have large amounts of capital to get started. You can get all of the benefits of property development without the usual barriers to entry.",
        },
      ],

      whoOrWhatParas: [
        "UOWN is simply lots of people all clubbing together to fund something bigger. In this case, that’s properties. Until recently, property investment was only available to a small number of people with large sums of money. Each active member of the UOWN community (a UOWNer) owns shares in one or more properties, alongside other UOWNers.",
        "So property crowdfunding investment is not something to be afraid of, it’s just a group of like minded people pooling resources.",
      ],

      sectionQuestionParas: [
        'By investing with UOWN you are boosting the UK economy by pumping money into much-needed new properties and helping first-time buyers who are struggling to get a foot on the property ladder. All the while targeting a good return for yourself. You could call it a "win win!"',
        "So are you ready to become a property developer?",
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