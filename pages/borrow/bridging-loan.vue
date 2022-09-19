<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16" />
    <textImgEllipse
      textLeft
      title="Bridging finance."
      btnText="Apply now"
      btnNotLink
      :imgOptions="{
        source: require('@/assets/images/BRIDGE_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/BRIDGE_HERO_RENDER.png?webp'),
        scale: 1.3,
        translateX: 5,
        lazyLoad: false
      }"
      class="mb-6"
      scrollTo="scroll"
    >
      <bigP
        text="Do you need cash to further your property development interests but you are faced with an obstacle? Use our bridging finance option to build your property portfolio using our crowdfunding platform."
      />
    </textImgEllipse>
    <LottieSection
      title="UOWN is a trusted partner,
        <br />experienced developer,
        <br />and a transparent platform."
      :cardsContent="lottieCardsContent1"
    />
    <div class="mt-16 mb-10">
      <s2
        :icon="require('@/assets/images/BRIDGING_1.svg')"
        title="The easy way to secure bridging finance"
      >
        <p>
          We know that the UK needs properties and there are people wanting to
          develop them. So let us be the link that brings all this together and
          introduces practical property development funding to property
          developers. ‍
        </p>
        <p>
          All made possible by the
          <NLink to="#">power of the crowd</NLink>.
        </p>
      </s2>
    </div>
    <textImgEllipse
      textLeft
      title="What are bridging loans?"
      btnText="Learn more"
      btnNotLink
      :imgOptions="{
        source: 'BRIDGE_1_SUB_RENDER_mnu767.png',
        scale: 1.25,
        translateX: 3
      }"
      scrollTo="scroll"
    >
      <p class="text-xl">
        A bridging loan for property development is the short term availability
        of cash for people who need it fast, or can’t yet release the cash they
        need.
      </p>
      <p class="text-xl">
        The loan is usually paid back when the project is complete and you sell
        the property or refinance.
      </p>
    </textImgEllipse>
    <textImgU
      title="Why is bridging finance helpful?"
      btnText="Learn more"
      btnNotLink
      :imgOptions="{
        source: 'HOME_S2_STEP_2_nb8ekc.png'
      }"
      scrollTo="scroll"
    >
      <p class="text-xl">
        You may be struggling to sell another property to release the cash for a
        new development, so bridging finance is a conduit to allow you to press
        forward with your plans.
      </p>
      <p class="text-xl">
        The money can be in your account within a couple of days and it is
        essentially acting as a bridge to help you navigate a short term
        problem. This will then enable you to repay the loan quickly or turn it
        into a different form of finance, such as a mortgage.
      </p>
    </textImgU>
    <s2
      :icon="require('@/assets/images/BRIDGING_2.svg')"
      title="Bridging finance for new and old properties"
      class="mb-16"
    >
      <p>
        Loans can be for a ground-up development or for varying forms of
        renovation. If UOWN feels the need is justified and your plans have
        credibility and a clear exit strategy and back-up plan, a bridging loan
        could be available. We offer tailor made loans based on each project.
      </p>
    </s2>
    <LottieSection
      title="The facts and figures of our typical deals"
      :cardsContent="lottieCardsContent2"
    />
    <div class="mt-10">
      <titleParas
        title="Apply for Bridging finance."
        para="Funding is available for new build projects on land you have to develop or for heavy refurb opportunities where you need extra finance quickly. <br><br> In scenarios where a developer has land, it is strongly preferred that all planning permission and the necessary legal obstacles have already been taken care of. <br><br> So if you complete the form to request your funding, we can start talking straight away, and you can let the power of the crowd take you where you want to go."
        id="scroll"
      />
    </div>
    <appForm />
    <faqs title="Bridging finance FAQs." :faqs="faqs" />
    <!-- <emailPopup1 /> -->
  </div>
</template>

<script>
const textImgEllipse = () => import("@/components/TextImgEllipse");
const LottieSection = () => import("@/components/LottieCardsSection");
const s2 = () => import("@/components/SectionTwo");
const textImgU = () => import("@/components/TextImgU");
const appForm = () => import("@/components/AppForm");
const faqs = () => import("@/components/Faqs");
const titleParas = () => import("@/components/TitleParas");
const bigP = () => import("@/components/BigP");
// const emailPopup1 = () => import("@/components/EmailPopup1");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgEllipse,
    LottieSection: hydrateWhenVisible(LottieSection),
    s2: hydrateWhenVisible(s2),
    textImgU: hydrateWhenVisible(textImgU),
    titleParas: hydrateWhenVisible(titleParas),
    faqs: hydrateWhenVisible(faqs),
    bigP: hydrateWhenVisible(bigP),
    appForm: hydrateWhenVisible(appForm),
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // emailPopup1: hydrateWhenVisible(emailPopup1)
  },

  head() {
    return {
      title: "Bridging Loans for Property Developments",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN offer bridging loans to property developers who need finance but don't want to jump through hoops with banks. Apply now for a fast decision.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: 'canonical' },
        {
          href: require("@/assets/images/ellipse-gray.svg"),
          rel: "preload",
          as: "image",
        },
        {
          href: require("@/assets/images/BRIDGE_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      faqs: [
        {
          question: "How long does it take to get a loan?",
          answer:
            "Every deal is different. If you provide all the necessary information promptly and your application is approved by our underwriting team, we can approve a loan within 7-14 days.",
        },
        {
          question: "Will UOWN accept any exit other than sale?",
          answer: "Yes. We accept both refinancing and sale as exits.",
        },
        {
          question: "Do you accept second charge securities?",
          answer: "Yes, such requests are assessed on a case-by-case basis.",
        },
        {
          question:
            "How does UOWN control the refurbishment draws? Does the valuer inspect progress of works (and if so is there a charge for each visit?) or do you release against the borrower’s invoice, photos etc?",
          answer:
            "There is a one-off monitoring fee and the method of monitoring (ie by the valuer, a quantity surveyor or our staff) will be decided by us. We will agree this with you up front.",
        },
      ],

      breadcrumbs: [
        { text: 'Property Financing', link: '/borrow' },
        { text: 'Bridging finance', link: this.$route.path }
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

<style lang='scss' scoped>
</style>