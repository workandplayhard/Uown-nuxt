<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <textImgU
      textLeft
      title="Peer to Peer Lending"
      btnText="Learn more"
      btnNotLink
      scrollTo="apply-for-peer-to-peer-property-finance"
      :imgOptions="{
        source: require('@/assets/images/P2P_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/P2P_HERO_RENDER.png?webp'),
        lazyLoad: false,
        translateX: -10
      }"
      isHero
    >
      <bigP
        text="Do you need to borrow money quickly to fund your property development, but you don’t want to deal with the banks? Peer to peer lending could be the property finance option for you."
      />
    </textImgU>
    <div class="section overflow-hidden my-12 sm:-mt-6">
      <lottieSection
        title="UOWN is a trusted partner,
          <br />experienced developer,
          <br />and a transparent platform."
        :cardsContent="lottieCardsContent1"
      />
    </div>
    <s2
      :icon="require('@/assets/images/P2P_1.svg')"
      title="Peer to peer lending matches your demand for funds with a pool of investors"
    >
      <p>
        We know that the UK needs properties and there are people wanting to
        develop them. So let us be the link that brings all this together and
        introduces practical property development funding to property
        developers.
      </p>
      <p>
        All made possible by the
        <nuxt-link to="#">power of the crowd</nuxt-link>.
      </p>
    </s2>
    <textImgEllipse
      textLeft
      title="Simpler property finance, powered by people"
      btnText="Property crowdfunding"
      btnLink="/invest/property-crowdfunding"
      :imgOptions="{
        source: 'P2P_1_SUB_RENDER_lv3krr.png',
        scale: 1.65
      }"
    >
      <p class="text-xl">
        It’s much quicker and simpler to borrow money from a person, rather than
        a bank.
      </p>
      <p class="text-xl">
        UOWN’s property crowdfunding platform could be the best way to bring everything
        together to offer benefits to both the borrower and the investor.
      </p>
    </textImgEllipse>
    <div class="mb-12 sm:mt-10">
      <sectionCenterBorderExtended
        :icon="require('@/assets/images/P2P_2.svg')"
        title="The benefits of peer to peer lending"
        :blocks="sectionCenterBorderExtendedBlocks"
      />
    </div>
    <s2
      :icon="require('@/assets/images/P2P_7.svg')"
      title="UOWN are a tried and tested platform"
    />
    <sectioncenterBorder :content="sectionCenterBorderBlocks" />
    <lottieSection
      title="The facts and figures of our typical deals"
      :cardsContent="lottieCardsContent2"
      class="my-16"
    />
    <titleParas
      title="Apply for peer to peer property finance."
      para="Funding is available for new build projects on land you have to develop or for heavy refurb opportunities where you need extra finance quickly. <br><br> In scenarios where a developer has land, it is strongly preferred that all planning permission and the necessary legal obstacles have already been taken care of. <br> <br> So if you complete the form to request your funding, we can start talking straight away, and you can let the power of the crowd take you where you want to go."
      id="apply-for-peer-to-peer-property-finance"
    />
    <appForm />
    <faqs title="P2P Lending FAQs." :faqs="faqs" />
    <!-- <emailPopup /> -->
  </div>
</template>

<script>
const textImgU = () => import("@/components/TextImgU");
const bigP = () => import("@/components/BigP");
const lottieSection = () => import("@/components/LottieCardsSection");
const s2 = () => import("@/components/SectionTwo");
const textImgEllipse = () => import("@/components/TextImgEllipse");
const sectionCenterBorderExtended = () =>
  import("@/components/SectionCenterBorderExtended");
const sectioncenterBorder = () => import("@/components/SectionCenterBorder");
const titleParas = () => import("@/components/TitleParas");
const appForm = () => import("@/components/AppForm");
const faqs = () => import("@/components/Faqs");
// const emailPopup = () => import("@/components/EmailPopup1");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgU,
    bigP: hydrateWhenVisible(bigP),
    lottieSection: hydrateWhenVisible(lottieSection),
    s2: hydrateWhenVisible(s2),
    textImgEllipse: hydrateWhenVisible(textImgEllipse),
    sectionCenterBorderExtended: hydrateWhenVisible(sectionCenterBorderExtended),
    sectioncenterBorder: hydrateWhenVisible(sectioncenterBorder),
    titleParas: hydrateWhenVisible(titleParas),
    appForm: hydrateWhenVisible(appForm),
    faqs: hydrateWhenVisible(faqs),
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // LazyHydrate
    // emailPopup,
  },

  head() {
    return {
      title: "P2P Lending | P2P Property Investments",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Put your money to work with P2P property investments from UOWN. Help experienced property developers secure finance and build homes. Invest from £1. Register now.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: 'canonical' },
        { href: require('@/assets/images/rounded-box-2-gray.svg'), rel: 'preload', as: 'image' },
        {
          href: require("@/assets/images/P2P_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      sectionCenterBorderExtendedBlocks: [
        {
          icon: require("@/assets/images/P2P_3.svg"),
          title: "Competitive rates",
          text:
            "Because you aren’t dealing with banks or financial institutions, you are also free of their overheads, so you can enjoy more competitive interest rates in return.",
        },
        {
          icon: require("@/assets/images/P2P_4.svg"),
          title: "Flexible terms",
          text:
            "You can enjoy more flexible terms on the loan, which can often mean no fees for overpayment or for early exit/repayment and flexible payment dates.",
        },
        {
          icon: require("@/assets/images/P2P_5.svg"),
          title: "Simple application process",
          text:
            "The online application process is fast and convenient. You only have to deal with UOWN not the individual P2P lenders, so everything is simple and straightforward.",
        },
        {
          icon: require("@/assets/images/P2P_6.svg"),
          title: "A language you understand",
          text:
            "P2P lending is accessible and user-friendly, and compared to other forms of financial funding involves no jargon or complex terms and conditions.",
        },
      ],

      sectionCenterBorderBlocks: [
        {
          icon: require("@/assets/images/P2P_8.svg"),
          title: "Existing network of investors",
        },
        {
          icon: require("@/assets/images/P2P_9.svg"),
          title: "Proven track record in crowdfunding",
        },
        {
          icon: require("@/assets/images/P2P_10.svg"),
          title: "Transparent but secure",
        },
        {
          icon: require("@/assets/images/P2P_11.svg"),
          title: "Risk managed process",
        },
      ],

      faqs: [
        {
          question:
            "Do I need to be an experienced investor/developer to list a project through UOWN?",
          answer:
            "Experiential knowledge is invaluable in the property market. At UOWN, we focus on the potential of every project. This is why our team of experts appraise projects and those running them to determine the creditworthiness of the company and ability to repay. Thus, we prefer to list projects that have experienced developers undertaking them.",
        },
        {
          question:
            "What factors do you consider when deciding whether or not a development should be listed on the UOWN platform?",
          answer:
            "As a duty of care to protect our borrowers, we ensure that all projects comply with FCA (Financial Conduct Authority) regulations. We also carefully assess every project contextually and against KPIs (Key Performance Indicators). We require all our projects to have planning permission. We assess projects based on key performance factors such as the Profit on Cost, Loan to GDV, Loan to Value and Loan to Cost and the returns we can give to our investors.",
        },
        {
          question:
            "Is there a limit on how much a developer can borrow through UOWN?",
          answer: "We aim to loan between £25,000 and £5 million per project.",
        },
        {
          question: "What happens if I can't repay?",
          answer:
            "UOWN takes a legal charge over the property and therefore has the right to repossess in debt funded projects. In the case of equity based deals we have step in rights to be able to try and recoup value from a project and to take over the running of the project to see it through to the best conclusion possible for our investors. This measure will only be used as a last resort and we will work with you to find acceptable repayment methods or help complete the project. If you show no signs of reasonably being able to repay the loan or deliver the project then your property could be at risk of repossession. Please refer to our risk statement.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Investments', link: '/invest' },
        { text: 'Peer to Peer Lending', link: this.$route.path },
      ]
    };
  },

  inject: ["lottieCardsContent1", "lottieCardsContent2"],

  mixins: [fullCanonicalURL, breadcrumbList, faqSchema],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>