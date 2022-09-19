<template>
  <div class="overflow-hidden sections-wrapper">
    <hero
      title="Property investment in Leeds."
      :paras="heroContent.paras"
      :bgImage="require('@/assets/images/LPI-hero.jpg')"
      :bgImageWebp="require('@/assets/images/LPI-hero.jpg?webp')"
      :iconLinks="heroContent.iconLinks"
    />
    <div class="no-mb">
      <sectionU
        img="BALL_Arrow_oqlfgr.png"
        title="Property investment performance in Leeds."
        :paras="paras"
      />
    </div>
    <section id="on-the-up" class="py-12 no-mb">
      <div class="container">
        <heading text="Leeds is on the up." center />
        <div class="two-cols text-lg opacity-75">
          <p>
            Recognised today as one of the fastest-growing cities in the UK,
            Leeds is looking to make an impact on the global stage which could
            make it a prime target for savvy property investors.
          </p>
          <p>
            Contributing £66.5billion to the UK economy, Leeds boasts the
            largest financial, legal and digital sectors outside London and
            welcomed 29 million tourists to the city in 2017, who pumped £1.7
            billion into the local economy. With world class universities, a
            thriving business sector - hosting the headquarters or key offices
            of HMRC, HSBC, Lloyds, Sky Betting & Gaming, Zurich, Deloitte and
            Allianz - and ongoing investment into residential, retail and
            leisure developments, Leeds has become a vibrant, challenging and
            innovative city.
          </p>
        </div>
        <btn
          text="INVEST"
          invest
          outerLink
          link="https://app.uown.co/properties"
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'>at risk</a>"
          class="text-center mt-8"
        />
      </div>
    </section>
    <div class="no-mb">
      <whyInvestInLeedsProperty id="why-leeds" />
    </div>
    <div class="no-mb">
      <featureBlocks
        title="What is happening next in Leeds?"
        :blocks="featureBlocks"
        id="happening-next"
      />
      <div class="bg-light pt-16 pb-20">
        <btn
          text="INVEST"
          outerLink
          link="https://app.uown.co/properties"
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'> at risk</a>"
          invest
          class="container text-center"
        />
      </div>
    </div>
    <div class="map-mobile sm:hidden"></div>
    <sectionMap w />
    <sectionStudentProperties
      :paras="sectionStudentProperties.paras"
      :properties="sectionStudentProperties.properties"
      id="student-properties"
    />
    <div class="lg:pt-20 xl:pt-32">
      <sectionN id="what-is-UOWN" />
    </div>
    <sectionWhyInvest id="why-invest" />
  </div>
</template>

<script>
const hero = () => import("@/components/HeroPropertyCrowdfunding");
const sectionU = () => import("@/components/PropertyCrowdfundingU");
const heading = () => import("@/components/HeadingWithLine");
const btn = () => import("@/components/BtnRounded");
const whyInvestInLeedsProperty = () =>
  import("@/components/WhyInvestInLeedsProperty");
const featureBlocks = () => import("@/components/FeatureBlocks");
const sectionMap = () => import("@/components/SectionPropertyCrowdfundingMap");
const sectionStudentProperties = () =>
  import("@/components/SectionStudentProperties");
const sectionN = () => import("@/components/PropertyCrowdfundingN");
const sectionWhyInvest = () => import("@/components/SectionWhyInvestWithUown");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import { hydrateWhenVisible } from "vue-lazy-hydration";

export default {
  components: {
    hero,
    sectionU: hydrateWhenVisible(sectionU),
    heading: hydrateWhenVisible(heading),
    btn: hydrateWhenVisible(btn),
    whyInvestInLeedsProperty: hydrateWhenVisible(whyInvestInLeedsProperty),
    featureBlocks: hydrateWhenVisible(featureBlocks),
    sectionMap: hydrateWhenVisible(sectionMap),
    sectionStudentProperties: hydrateWhenVisible(sectionStudentProperties),
    sectionN: hydrateWhenVisible(sectionN),
    sectionWhyInvest: hydrateWhenVisible(sectionWhyInvest),
  },

  head() {
    return {
      title: "Property Investment Leeds",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN is the quick and easy way to start investing in Leeds properties through property crowdfunding. Invest from £1. Click to register and get started today.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/LPI-hero.jpg?webp"),
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
          "Do you fancy investing in one of the north’s most prosperous regions?",
          "Leeds could be the perfect solution to your investment needs. UOWN has a range of high performing property investment opportunities in Leeds.",
          "Investing in property with UOWN is quick, easy, and accessible for all investment budgets thanks to our crowdfunding platform.",
        ],
        iconLinks: [
          {
            icon: require("@/assets/images/property-performance.svg"),
            title: "Property Performance",
            listItems: [
              {
                text: "Leeds is on the up",
                scrollTo: "on-the-up",
              },
              { text: "Why Leeds?", scrollTo: "why-leeds" },
              {
                text: "What's on the horizon in Leeds?",
                scrollTo: "happening-next",
              },
            ],
          },
          {
            icon: require("@/assets/images/marker.svg"),
            title: "UOWN Properties in Leeds",
            listItems: [
              { text: "Student Properties", scrollTo: "student-properties" },
            ],
          },
          {
            icon: require("@/assets/images/uown-and-investing.svg"),
            title: "Who or what is UOWN?",
            listItems: [
              {
                text: "What's Property Crowdfunding?",
                scrollTo: "what-is-UOWN",
              },
              {
                text: "Why Invest with UOWN?",
                scrollTo: "why-invest",
              },
            ],
          },
        ],
      },

      paras: [
        "Leeds is a vibrant city and is the UK’s second largest metropolitan borough, with a population over 750,000. There is a high demand for city centre living and currently, there are multiple ongoing housing developments, so Leeds could be the perfect place to invest.",
        "Leeds is where it is at, with an average house price of £192,530 in Leeds, up 5% on the year previously, experts predict a 20.5% price growth over the next 5 years for the Yorkshire region, compared to a national average of 14.8%.",
        "Leeds is a well-established university city and with 65,000 students spread between seven full-time universities, there is huge demand for student properties in an area where rental yield in LS6 averages at 10.79% compared to 2.9% in London. It is clear that these numbers add up.",
      ],
      featureBlocks: [
        {
          bgImage: require("@/assets/images/shape1.jpg"),
          title: "Influence.",
          description:
            "Office developments such as Central Square and Wellington Place are bringing some of the UK's best financial, legal and digital companies to Leeds.",
        },
        {
          bgImage: require("@/assets/images/shape2.jpg"),
          title: "Networked.",
          description:
            "HS2 will trigger a £500 million development of Leeds rail station due to be completed in 2026.",
        },
        {
          bgImage: require("@/assets/images/shape3.jpg"),
          title: "Regeneration.",
          description:
            "South Bank Development – aims to double the size of Leeds city centre, bringing 35,000 jobs to boost the local economy by £7.8billion.",
        },
        {
          bgImage: require("@/assets/images/shape4.jpg"),
          title: "Culture.",
          description:
            "The £300million development of a new cultural neighbourhood will bring an innovative approach to modern living in the heart of the city.",
        },
        {
          bgImage: require("@/assets/images/shape1.jpg"),
          title: "Value.",
          description:
            "Leeds has been announced as the home of Channel 4’s new national headquarters.",
        },
      ],

      sectionStudentProperties: {
        paras: [
          "Many of our opportunities are situated in the Leeds student heartlands, home to the majority of the 65,000 students attending the three major universities.",
          "Leeds is a growing and in demand city which has often been overlooked in favour of Manchester. This has meant it has flown under the radar in recent years and as the Manchester property market gets saturated, Leeds is the next city people are looking to for their returns.",
        ],
        properties: [
          {
            thumbnail: require("@/assets/images/village_st.jpg"),
            name: "Village St.",
            type: "Development",
            potentialGrowth: 14.99,
            link: "https://app.uown.co/properties/village-street",
          },
          {
            thumbnail: require("@/assets/images/lumley-avenue.jpg"),
            name: "Lumley Avenue",
            potentialGrowth: 5.3,
            type: "Resale",
            link: "https://app.uown.co/properties/lumley-avenue",
          },
          {
            thumbnail: require("@/assets/images/old-bakery-apartments.jpg"),
            name: "Old Bakery Apartments",
            potentialGrowth: 4.07,
            link: "https://app.uown.co/properties/old-bakery-apartments",
          },
        ],
      },
    };
  },

  mixins: [fullCanonicalURL],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

#happening-next /deep/ .feature-block {
  background-position-y: -4rem;
  padding-top: 65%;
}

#student-properties /deep/ .ellipse {
  display: none;
}

.sections-wrapper > *:not(:first-child):not(.no-mb) {
  margin-bottom: 3rem;
}

.map-mobile {
  background-image: url(~@/assets/images/UO-map.jpg);
  padding-top: 100px;
  padding-bottom: 100px;
  background-position: 50% 50%;
  background-size: 200%;
}

#on-the-up {
  background-image: linear-gradient(7deg, #f6f6f0 31%, #fafaf8 74%, #fff);
}

@media (min-width: $md) {
  .two-cols {
    columns: 2;
  }

  #happening-next /deep/ .feature-block {
    padding-top: 55%;
  }
}

@media (min-width: $lg) {
  .sections-wrapper > * {
    margin-bottom: 0;
  }
}
</style>