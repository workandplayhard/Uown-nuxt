<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      class="container mt-16 relative z-1" />
    <textImgU
      title="Mezzanine Finance"
      btnText="Apply now"
      btnNotLink
      :imgOptions="{
        source: require('@/assets/images/MEZZANINE_HERO_RENDER.png'),
        sourceWebp: require('@/assets/images/MEZZANINE_HERO_RENDER.png?webp'),
        lazyLoad: false,
        scale: 0.9
      }"
      isHero
      scrollTo="scroll"
    >
      <bigP
        text="Do you need finance to continue with your property development plans, but you are struggling to convince the mainstream banks to invest in you? Our mezzanine finance service can help."
      />
    </textImgU>
    <lottieSection
      title="UOWN is a trusted partner,
        <br />experienced developer,
        <br />and a transparent platform."
      :cardsContent="lottieCardsContent1"
    />
    <div class="mt-16">
      <s2
        :icon="require('@/assets/images/MEZZANINE1.svg')"
        title="Mezzanine finance to get your property development over the line"
      >
        <p>
          Keep your property development project moving with short term financial
          assistance in the form of flexible mezzanine finance.
        </p>
        <p>
          All made possible by the
          <NLink to="#">power of the crowd</NLink>.
        </p>
      </s2>
    </div>
    <textImgEllipse
      title="What is mezzanine finance?"
      :imgOptions="{
        source: 'MEZZ_1_SUB_RENDER_bulx1u.png',
        scale: 1.4
      }"
      btnText="Apply now"
      btnNotLink
      textLeft
      scrollTo="scroll"
    >
      <p class="text-xl">
        Mezzanine finance is effectively a type of business loan that helps a
        property developer in a range of different scenarios. Normally, this is
        to overcome a short term problem where you need extra capital fast to
        continue funding your project.
      </p>
      <p class="text-xl">
        Mezzanine loans are usually paid back in one lump sum, usually from the
        revenue generated from the sale of completed development.
      </p>
    </textImgEllipse>
    <div class="-mt-20">
      <textImgW
        title="Why is mezzanine finance helpful?"
        btnText="Apply now"
        btnNotLink
        :imgWebp="require('@/assets/images/MEZZ_2_SUB_RENDER.png?webp')"
        img="MEZZ_2_SUB_RENDER_cgra9i.png"
        textRight
        scrollTo="scroll"
      >
        <p class="text-xl">
          In property development you can be faced with a number of scenarios
          where you need finance quickly, but your circumstances may mean that you
          don’t qualify as a credible investment vehicle for a traditional bank.
        </p>
        <p class="text-xl">
          Alternative finance is ideal for those who need cash quickly but don’t
          want to have to jump through hoops or pay extortionate fees and interest
          rates to get it.
        </p>
      </textImgW>
    </div>
    <s2
      :icon="require('@/assets/images/MEZZANINE2.svg')"
      title="The benefits of mezzanine finance"
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
    <SectionCenterBorder :content="sectionCenterBorderContent" />
    <lottieSection
      title="The facts and figures of our typical deals"
      :cardsContent="lottieCardsContent2"
      class="my-16"
    />
    <textImgU
      title="How much can I borrow?"
      btnText="Learn more"
      btnNotLink
      :imgOptions="{
        source: 'HOME_S2_STEP_4_pyzerx.png',
        scale: 1.2
      }"
      textLeft
      scrollTo="scroll"
      class="-mt-12"
    >
      <p class="text-xl">
        When using UOWN as your mezzanine finance provider, you will typically
        be able to secure a loan of up to 70% of the property’s value.
      </p>
      <p class="text-xl">
        A number of factors will dictate the amount we can lend you, including
        your experience as a developer, the size of the deposit you can
        contribute, and the location of the property in question and its
        attractiveness to the market.
      </p>
    </textImgU>
    <titleParas
      title="Apply for mezzanine finance."
      para="Funding is available for new build projects on land you have to develop or for heavy refurb opportunities where you need extra finance quickly. <br><br> In scenarios where a developer has land, it is strongly preferred that all planning permission and the necessary legal obstacles have already been taken care of. <br><br> So if you complete the form to request your funding, we can start talking straight away, and you can let the power of the crowd take you where you want to go."
      id="scroll"
    />
    <appForm />
    <faqs title="Mezzanine finance FAQs." :faqs="faqs" />
    <!-- <emailPopup2 /> -->
  </div>
</template>

<script>
const textImgU = () => import("@/components/TextImgU");
const lottieSection = () => import("@/components/LottieCardsSection");
const s2 = () => import("@/components/SectionTwo");
const textImgEllipse = () => import("@/components/TextImgEllipse");
const textImgW = () => import("@/components/TextImgW");
const SectionCenterBorder = () => import("@/components/SectionCenterBorder");
const titleParas = () => import("@/components/TitleParas");
const faqs = () => import("@/components/Faqs");
const appForm = () => import("@/components/AppForm");
const bigP = () => import("@/components/BigP");
// const emailPopup2 = () => import("@/components/EmailPopup2");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"
import faqSchema from "@/mixins/faqSchema"

export default {
  components: {
    textImgU,
    lottieSection: hydrateWhenVisible(lottieSection),
    s2: hydrateWhenVisible(s2),
    textImgEllipse: hydrateWhenVisible(textImgEllipse),
    textImgW: hydrateWhenVisible(textImgW),
    SectionCenterBorder: hydrateWhenVisible(SectionCenterBorder),
    titleParas: hydrateWhenVisible(titleParas),
    faqs: hydrateWhenVisible(faqs),
    bigP: hydrateWhenVisible(bigP),
    appForm: hydrateWhenVisible(appForm),
    Breadcrumbs: () => import('@/components/Breadcrumbs')
    // emailPopup2,
  },

  head() {
    return {
      title: "Mezzanine Finance Providers UK",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN offer mezzanine finance to property developers who need finance but don't want to jump through hoops with banks. Apply now for a fast decision.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: 'canonical' },
        { href: require('@/assets/images/rounded-box-2-gray.svg'), rel: 'preload', as: 'image' },
        {
          href: require("@/assets/images/MEZZANINE_HERO_RENDER.png?webp"),
          rel: "preload",
          as: "image",
        },
      ],
      script: [this.faqSchema],
    };
  },

  data() {
    return {
      sectionCenterBorderContent: [
        {
          icon: require("@/assets/images/MEZZANINE3.svg"),
          title: "Equity as security",
          text:
            "Banks may be hesitant to give access to finance for a development that requires a lot of work. We counteract this by using equity as a form of security if the loan can’t be repaid.",
        },
        {
          icon: require("@/assets/images/MEZZANINE4.svg"),
          title: "Simple repayments",
          text:
            "We factor your interest payments into the balance of the loan, leaving you with a simple and manageable lump sum figure and a repayment date that is easier to aim for.",
        },
        {
          icon: require("@/assets/images/MEZZANINE5.svg"),
          title: "Easy to restructure",
          text:
            "If you are having trouble securing a mortgage in the short term, mezzanine finance can help keep your plans moving. This debt can then easily be restructured when you eventually secure other finance.",
        },
        {
          icon: require("@/assets/images/MEZZANINE6.svg"),
          title: "Controlled interest",
          text:
            "If there’s a problem and payment terms are missed, interest can often be deferred due to the existing equity stake, which means you don’t have to worry about spiralling interest costs.",
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
        { text: 'Property Financing', link: '/borrow' },
        { text: 'Mezzanine Finance', link: this.$route.path },
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