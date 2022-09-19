<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16" />
    <textImgEllipse
      :imgOptions="{
        source: require('@/assets/images/NEW_BUILD_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/NEW_BUILD_HERO_RENDER.png?webp'),
        lazyLoad: false,
        scale: 1.2,
        translateX: -3
      }"
      title="New Build Development Loans"
      btnText="Learn more"
      btnNotLink
      scrollTo="an-effective-way-to-finance-new-homes"
      :scrollOffset="getSrollOffset"
      class="mb-6"
    >
      <bigP
        text="Do you need help funding your new build property development? We can can help fund your project using alternative financing to secure the money you need."
      />
    </textImgEllipse>
    <lottie
      title="UOWN is a trusted partner,
          <br />experienced developer,
          <br />and a transparent platform."
      :cardsContent="lottieCardsContent1"
    />
    <s2
      :icon="require('@/assets/images/NEW_BUILD_1.svg')"
      title="New build developer loans from UOWN."
      class="mt-6"
    >
      <p>
        To get your new build development project over the line, you need an
        injection of finance, and this is where UOWN can help.
      </p>
      <p>
        All made possible by the
        <nuxt-link to="#"> power of the crowd</nuxt-link>.
      </p>
    </s2>
    <textImgU
      :imgOptions="{
        source: 'NEW_BUILD_1_SUB_RENDER_xwygfj.png',
        scale: 1.2
      }"
      title="An effective way to finance new homes"
      btnText="Apply now"
      btnNotLink
      scrollTo="apply-for-new-build-development-finance"
      textLeft
      id="an-effective-way-to-finance-new-homes"
    >
      <p class="text-xl">
        Getting funding in place to progress your new build development is
        crucial. It allows you to budget, to put a credible timescale and
        project plan together and it allows you to effectively press ‘Go’ on
        your dreams and to get people in new homes.
      </p>
      <p class="text-xl">
        UOWN can help make that happen with our flexible development loans.
      </p>
    </textImgU>
    <sectionCenterBorder :content="sectionCenterBorder" threeCols />
    <lottie
      title="The facts and figures of our typical deals"
      :cardsContent="lottieCardsContent2"
      class="mt-6"
    />
    <textImgW
      :imgWebp="require('@/assets/images/NEW_BUILD_2_SUB_RENDER.png?webp')"
      img="NEW_BUILD_2_SUB_RENDER_cfl4jl.png"
      title="An alternative way to fund the creation of new homes."
      btnText="Learn more"
      btnNotLink
      scrollTo="faqs"
      :imgScale="1.3"
      textRight
      downward
      class="sm:-mt-12"
    >
      <p class="text-xl">
        The main benefit of partnering with UOWN for your residential
        development finance is that we have a readymade crowdfunding investment
        platform that has willing investors already lined up.
      </p>
      <p class="text-xl">
        We can connect property developers wanting money with investors who are
        wanting to invest it. This allows you to request funding to be released
        as and when you need it, at different stages of the new-build
        development.
      </p>
    </textImgW>
    <titleParas
      title="Apply for new build development finance."
      para="UOWN can provide the answer to releasing the funds you need to complete your new-build property development, and without the need to go to mainstream banks. <br><br> We have a range of finance options available and can provide the one that perfectly suits your needs and circumstances. <br><br> So complete the form today, request your funding and let UOWN make your property development dreams come true."
      id="apply-for-new-build-development-finance"
    />
    <appForm id="form" />
    <faqs title="New Build Finance FAQs" :faqs="faqs" id="faqs" />
    <!-- <emailPopup1 /> -->
  </div>
</template>

<script>
import textImgEllipse from "@/components/TextImgEllipse";
import bigP from "@/components/BigP";
import lottie from "@/components/LottieCardsSection";
import s2 from "@/components/SectionTwo";
import textImgU from "@/components/TextImgU";
import sectionCenterBorder from "@/components/SectionCenterBorder";
import textImgW from "@/components/TextImgW";
import titleParas from "@/components/TitleParas";
import appForm from "@/components/AppForm";
import faqs from "@/components/Faqs";
// import emailPopup1 from "@/components/EmailPopup1";
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgEllipse,
    bigP: hydrateWhenVisible(bigP),
    lottie: hydrateWhenVisible(lottie),
    s2: hydrateWhenVisible(s2),
    textImgU: hydrateWhenVisible(textImgU),
    sectionCenterBorder: hydrateWhenVisible(sectionCenterBorder),
    textImgW: hydrateWhenVisible(textImgW),
    titleParas: hydrateWhenVisible(titleParas),
    faqs: hydrateWhenVisible(faqs),
    appForm: hydrateWhenVisible(appForm),
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // emailPopup1,
  },

  head() {
    return {
      title: "New Build Developer Loans",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN offer property development loans to developers who are committed to building new homes. Click now to apply and receive a fast decision.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/ellipse-gray.svg"),
          rel: "preload",
          as: "image",
        },
        {
          href: require("@/assets/images/NEW_BUILD_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      sectionCenterBorder: [
        {
          title: "Mezzanine finance",
          text:
            "Flexible finance to allow you to purchase any assets or secure a mortgage needed to hit your development goals, available with simple repayment terms.",
          link: "/borrow/mezzanine-finance",
        },
        {
          title: "Construction finance",
          text:
            "Loan based on the cost of building a new development, not on the finished value of the property.",
        },
        {
          title: "Bridging loan",
          text:
            "Finance made available quickly and repaid quickly. This is ideal for meeting a gap in your funding, such as covering unexpected urgent payments on the project.",
          link: "/borrow/bridging-loan",
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
            "UOWN takes a legal charge over the property and therefore has the right to repossess in debt funded projects. In the case of equity based deals we have step in rights to be able to try and recoup value from a project and to take over the running of the project to see it through to the best conclusion possible for our investors. <br><br> This measure will only be used as a last resort and we will work with you to find acceptable repayment methods or help complete the project. If you show no signs of reasonably being able to repay the loan or deliver the project then your property could be at risk of repossession. Please refer to our risk statement.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Financing', link: '/borrow' },
        { text: 'New Build Development Loans', link: this.$route.path }
      ]
    };
  },

  computed: {
    getSrollOffset() {
      if (this.$mq !== "sm") return 150;
    },
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